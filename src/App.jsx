import './App.css'
import Navbar from './components/navbar/Navbar'
import { Header } from './components'

function App() {
  return (
    <header>
      <section className="header">
        <Navbar />
        <Header />
      </section>
    </header>
  )
}

export default App
