import React, {useState, useEffect} from 'react'
import { cn } from '@bem-react/classname'
import "./Average.css"

const Average = () => {
    const cnAverage = cn("Average")
    const [number, setNumber] = useState(0)
    const [arr, setArr] = useState([{numeric: 2 , type:"false"}])
    const [type, setType] = useState(false)
    const [mid, setMid] = useState(0)

    useEffect(() => {
      (async () => {
          const res = await fetch("http://localhost:4000/number", {
              method:"GET",
              headers: {
                  "Content-Type": "application/json",
              }
          })
          const data = await res.json()
          data.length !== undefined ? setArr(data) : console.log("нету нечего")
        })()
      }, [])
      
      const Negative = () => {
        setType(!type)
      }
      console.log(type)
      
      const onNumeric = (e) => {
        setNumber(Number(e.target.value))
        console.log(number)
      }
      
      const Mean = (e) => {
      console.log(arr[arr.length-1])
      if(arr[arr.length-1].type === "true" || Number(arr[arr.length-1].numeric) < 0){
        setMid((number - (Number(arr[arr.length-1].numeric) < 0 ? !Number(arr[arr.length-1].numeric) : Number(arr[arr.length-1].numeric))) / 2)
        console.log(mid)
      }
       else if(arr[arr.length-1].type === "false" && Number(arr[arr.length-1].numeric) >= 0){
        setMid(({type: true && number > 0 ? !number : number} + Number(arr[arr.length-1].numeric)) / 2)
        console.log(mid)
      }
    }

    const Receive = async function(e) {
      Mean()
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
        <h1>Среднее Арифметическое: { mid }</h1>
    </div>
  )
}

export default Average