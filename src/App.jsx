import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import Users from './Users';


function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
 
  return (
    <>
      <h3>React Core Concepts 2</h3>

       <Counter></Counter>
       <Team></Team>
       <Users></Users>
       <Friends></Friends>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('button 3 clicked')}}>Click3</button>
      <button onClick={() => addToFive(3)}>Click4</button>
    </>
  )
}

export default App
