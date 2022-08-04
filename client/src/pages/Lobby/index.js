import React, { useEffect, useState } from 'react'
import { w3cwebsocket } from 'websocket'

function Lobby() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')
    const [userList, setUserList] = useState([])

    const client = new w3cwebsocket(`ws://127.0.0.1:8000/ws/lobbies/test/`);

    useEffect(() => {
        client.onopen = () => {
            console.log('Websocket client connected')
        }

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply!', dataFromServer)
            if (dataFromServer) {
                setMessages((messages) => messages.concat({
                    msg: dataFromServer.message,
                    username: dataFromServer.username,
                }))
                console.log(dataFromServer['userList'])
                if (dataFromServer['userList']) {
                    setUserList(dataFromServer['userList'])
                }
            }

        }
    }, [])

    const ButtonClicked = (e) => {
        client.send(JSON.stringify({
            type: 'message',
            message: value,
            username: username
        }))
        setValue('')
        e.preventDefault()
    }

    return (
        <>
            <div data-testid='lobbybtn' role='maintest'>
            <main>
                {messages.map(message =>
                    <div key={message.id} >
                        <p>{message['username']}</p>
                        <p>{message['msg']}</p>
                    </div>)}
                <input id="chat-message-input" type="text" value={value} onChange={e => setValue(e.target.value)}></input>
                <input id="chat-message-submit" type="button" value="Send" onClick={ButtonClicked}></input>
            </main>
            </div>
        </>
    )
}

export default Lobby
