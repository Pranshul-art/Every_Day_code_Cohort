import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCount  } from './atoms'
function App() {
  
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const NotificationCount = useRecoilValue(notificationAtom);
  const totalNotificationcount=useRecoilValue(totalNotificationCount)
  return (
    <div>
      <button>Home</button>
      
        <button>My network ({ networkNotificationCount>99?"99+":networkNotificationCount })</button>
        <button>Jobs ({ jobsNotificationCount })</button>
        <button>Messages ({ messagingNotificationCount })</button>
        <button>Notification ({ NotificationCount })</button>
      
      
      <button>Me{totalNotificationcount}</button>
    </div> 
  )
}
export default App
