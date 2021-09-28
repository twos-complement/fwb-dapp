import { createContext, useState } from 'react'

import SystemMessages from '../SystemMessages'

export const SystemMessageContext = createContext({
  createMessage: () => {},
  closeMessage: () => {},
})

let idCounter = 0

export const SystemMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  function createMessage(message) {
    setMessages([...messages, { id: idCounter++, ...message }])
  }

  function closeMessage(message) {
    // Animate message out:
    const messagesWithAnimateOut = messages.map(m => {
      if (m.id == message.id)
        return {
          ...message,
          animateOut: true,
        }
      return m
    })
    setMessages(messagesWithAnimateOut)

    // Wait for animation, then remove:
    setTimeout(() => {
      setMessages(messages.filter(({ id }) => id != message.id))
    }, 1000)
  }

  return (
    <SystemMessageContext.Provider value={{ createMessage, closeMessage }}>
      {children}
      <SystemMessages messages={messages} closeMessage={closeMessage} />
    </SystemMessageContext.Provider>
  )
}

export default SystemMessageContext
