import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Feed from './pages/Feed.jsx'
import Messages from './pages/Messages.jsx'
import Chatbox from './pages/Chatbox.jsx'
import Connections from './pages/Connections.jsx'
import Discover from './pages/Discover.jsx'
import Profile from './pages/Profile.jsx'
import CreatePost from './pages/CreatePost.jsx'
import { useUser } from '@clerk/clerk-react'
import Layout from './pages/Layout.jsx'
import { Toaster} from 'react-hot-toast'

const App = () => {
  const { user } = useUser()
  return (
    <>
      <Toaster />
      <Routes>  
      <Route path='/' element={!user ? <Login /> : <Layout />}>
        {/* Nest all protected routes inside Layout */}
        <Route index element={<Feed />} />
        <Route path='messages' element={<Messages />} />
        <Route path='messages/:userId' element={<Chatbox />} />
        <Route path='connections' element={<Connections />} />
        <Route path='discover' element={<Discover />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:profileId' element={<Profile />} />
        <Route path='create-post' element={<CreatePost />} />
      </Route>
    </Routes>
    </>
  )
}

export default App