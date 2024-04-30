import './App.css'
import { About, Clients, Edge, Header, NavBar, Service } from './components'

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
    </header>
  )
}

export default App
