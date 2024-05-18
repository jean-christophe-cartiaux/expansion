
import './App.css'
import Hero from"./component/hero/hero.jsx"
import Header from "./component/header/header.jsx";

function App() {


  return (
      <>
        <header>
          <Header />
        </header>
        <main>
            <section>
                <Hero/>
            </section>
        </main>
      </>
  )
}
export default App;