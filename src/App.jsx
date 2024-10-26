import Calculator from './calculator'
import renderEmployee from './employees'
import Footer from './footer'
import cocretaLogo from './assets/cocretainc.jpg';
import './App.css'

function App() {  

  return (
    <>
    <main>
      <img src={cocretaLogo} alt="cocreta logo"/>
      <h1>Cocreta</h1>
    </main>
    <div className="envoltura">
      {renderEmployee()}
    <h2>Calculator</h2>
      {Calculator()}
    </div>
      {Footer()}
    </>
  )
}

export default App

