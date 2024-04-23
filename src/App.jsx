import './App.css'
import Navbar from './components/navbar/Navbar'
import { Header } from './components'
import About from './components/about/About'

function App() {
  return (
    <header>
      <section className="header">
        <Navbar />
        <Header />
      </section>
      <About />
    </header>
  )
}

export default App
