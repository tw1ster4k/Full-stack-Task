import React, {useState, useEffect} from 'react'
import "./Messages.css"
import {cn} from "@bem-react/classname"

const Messages = () => {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState("")
    const cnMessage = cn("Message")

    const onText = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    const onAuthor = (e) => {
        setAuthor(e.target.value)
        console.log(author)
    }

    const newMessage = async function(e){
        e.preventDefault();
        const response = await fetch("http://localhost:4000/newmessage", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({text:text,author:author})
        })
    }

  return (
    <div className={cnMessage()}>
        <form className={cnMessage("newMessage")} onSubmit={newMessage}>
        <label ><input type="string" onChange={onText} className={cnMessage("Text")}/> Текст</label>
        <label ><input type="string" onChange={onAuthor} className={cnMessage("Author")} /> Автор</label>
        <button type='submit' className={cnMessage("Button")}>Разместить сообщение</button>
        </form>
        <div className={cnMessage("allMessage")}>

        </div>
    </div>
  )
}

export default Messages