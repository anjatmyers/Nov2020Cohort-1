import React, {useState, useRef, useEffect} from "react";
import  './styles.css'

const StopWatch = () => {

    const [lapse, setLapse] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
    
    useEffect(() => {
      return () => {
        //when the component unmounts
        //no memory leaks after the component is unmounted
        return clearInterval(intervalRef.current);

      };
    })

    const handleRunClick = () => {
        
        if(running){
            //do something
            clearInterval(intervalRef.current);
        }
        else{
            //start our clock

            const startTime = Date.now() - lapse;

            intervalRef.current = setInterval(()=>{
                setLapse(Date.now() - startTime)
            }, 0)
        }

        setRunning(!running);

    }

    const handleClearClick = () => {
        clearInterval(intervalRef.current);
        setLapse(0);
        setRunning(false);

    }

  return <div>
      <label>{lapse} ms</label>

      <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>

      <button onClick={handleClearClick}>Clear</button>
  </div>
};

export default StopWatch;
