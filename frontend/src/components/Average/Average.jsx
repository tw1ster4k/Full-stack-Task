import React, {useState, useEffect} from 'react'
import { cn } from '@bem-react/classname'
import "./Average.css"

const Average = () => {
    const cnAverage = cn("Average")
    const [number, setNumber] = useState(0)
    const [type, setType] = useState(false)

    const Negative = () => {
      setType(!type)
    }
    console.log(type)

    const onNumeric = (e) => {
      setNumber(e.target.value)
      console.log(number)
    }

    const Receive = async function(e) {
      const response = await fetch("http://localhost:4000/newnumber", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({numeric:number,type:type})
    })
    } 

  return (
    <div className={cnAverage()}>
        <label ><input type="number" onChange={onNumeric} className={cnAverage("Number")}/> Введите число</label>
        <label ><input type="checkbox" onChange={Negative} className={cnAverage("Type")}/> Отрицательное</label>
        <button onClick={Receive}>Получить среднее</button>
        <h1>Среднее Арифметическое: 43</h1>
    </div>
  )
}

export default Average