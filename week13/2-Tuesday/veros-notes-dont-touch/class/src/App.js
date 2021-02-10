
import React, {useState, useEffect} from 'react'

//custom file
const useCounter = ({initialState, step}) => {
  const [count, setCount] = useState(initialState)  //
 
  const increment = () => setCount(count + step);
  
  return [count, increment]
}

//component
const App = () => {

  const [count, increment] = useCounter({initialState: 5, step:4});

  return <button onClick={increment}>{count}</button>
  
}

// const App = () => {

//   //const initialCount = ()=> parseInt(window.localStorage.getItem('count'))  || 0;

  
//   return (
//     <div styles={{textAlign: 'center', paddingTop:'200px'}}>
//       <button onClick={handleChange}>{count}</button>
      
//     </div>
//   )
// }

export default App
