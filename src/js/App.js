import React from 'react';

export default function App() {
    const title = "Hello World My Application";
    const enhancedTitle = title + '- React App!'
    const sendNotification = () => {
        electron.notificationAPI.sendNotification('My custom message');
    }

    return(
        <>
        <h1>{enhancedTitle}</h1>
        <button onClick={sendNotification}>Send Notification</button>
        </>
    )
}