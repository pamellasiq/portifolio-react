import './App.css'
import Header from './assets/Components/Header/Header'
import Nav from './assets/Components/Nav/Nav'
import About from './assets/Components/About/About'

function App() {
  return (
    <>
      <div className='Header_wrapper'>
        <Nav/>
        <Header/>
      </div>
      <About/>
    </>
  )
}

export default App
