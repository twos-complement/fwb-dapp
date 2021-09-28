import PropTypes from 'prop-types'
import styled from 'styled-components'

import SystemMessage from './ui/core/SystemMessage'

const SystemMessages = ({ messages, closeMessage }) => {
  return (
    <Layout>
      {messages.map(message => (
        <SystemMessage
          key={message.id}
          message={message}
          handleDismiss={closeMessage}
        />
      ))}
    </Layout>
  )
}

SystemMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      animateOut: PropTypes.bool,
      state: PropTypes.oneOf(['info', 'success', 'error']).isRequired,
    }),
  ),
}

const Layout = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
`

export default SystemMessages
