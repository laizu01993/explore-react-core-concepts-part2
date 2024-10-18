export default function Friend({friend}){
    const {name, email} = friend;
    const friendsStyle ={
        border: '2px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }
    return (
        <div style={friendsStyle}>
            <h4>Name:{name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}