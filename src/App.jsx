import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Router from './Router'
import ChatBotGlobal from './components/ChatBotGlobal'

function App() {
  return (
    <>
      <ChatBotGlobal/>
      <NavBar/>
      <Router />
      <Footer/>
    </>
  )
}

export default App
