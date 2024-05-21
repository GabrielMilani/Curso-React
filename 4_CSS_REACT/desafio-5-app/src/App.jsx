import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const autos = [
    { id: 1, brand: "VW", model: "Fusca", color: "Preto" },
    { id: 2, brand: "GM", model: "Astra", color: "Vermelho" },
    { id: 3, brand: "Fiat", model: "Uno", color: "Branco" }
  ]

  const [cars, setCars] = useState(autos)

  return (
    <>
      <h1>CAR DETAILS</h1>
      <div className="car-container">
        {cars.map((car) => (
          <CarDetails
            car={car}
          ></CarDetails >
        ))}
      </div>

    </>
  )
}

export default App
