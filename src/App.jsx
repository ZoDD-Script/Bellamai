import './App.css'
import { About, Clients, Edge, Header, NavBar, Service, Testimonies } from './components'

function App() {
  return (
    <header>
      <section className="header">
        <NavBar />
        <Header />
      </section>
      <About />
      <Service />
      <Edge />
      <Clients />
      <Testimonies />
    </header>
  )
}

export default App
