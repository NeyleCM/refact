import Calculator from './calculator'
import renderEmployee from './employees'
import Footer from './footer'
import Header from './top'

import './App.css'

function App() {  

  return (
    <>
      {Header()}
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

