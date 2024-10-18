import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const friendsStyle ={
        border: '2px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div style={friendsStyle}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend
                friend={friend}></Friend>)
            }
        </div>
    )
}