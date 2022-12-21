import React,{useState} from 'react'
import Header from './Header'


function Apps() {

    const [counter, setCounter] = useState(0)
    function ButtonIncrease(){
        setCounter(function(oldCounterValue) {
            return oldCounterValue +1
        })
    }
    function ButtonDecrease()
    {
        setCounter(function(oldCounterValue){
            return oldCounterValue -1
        })


    }
  return <div>
    <h1>Counter:{counter}</h1>
    <button onClick={ButtonIncrease}>Increase the Count</button>
    <button onClick={ButtonDecrease}>Decrease the Count</button>
    </div>
}

export default Apps
