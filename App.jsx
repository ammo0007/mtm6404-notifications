import { useState } from 'react'
import notificationsData from './notifications'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  return (
    <div className="app">
      <div className="notifications-container">
        <header className="header">
          <h1>Notifications</h1>
          <span className="count">{notifications.length}</span>
        </header>

        <button
          className="clear-all"
          onClick={clearAllNotifications}
          disabled={notifications.length === 0}
        >
          Clear All Notifications
        </button>

        <div className="notifications-list">
          {notifications.length === 0 ? (
            <p className="empty-message">No notifications to display.</p>
          ) : (
            notifications.map(notification => (
              <div className="notification" key={notification.id}>
                <div className="notification-content">
                  <h3>{notification.name}</h3>
                  <p>{notification.message}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => clearNotification(notification.id)}
                  aria-label={`Clear notification from ${notification.name}`}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
