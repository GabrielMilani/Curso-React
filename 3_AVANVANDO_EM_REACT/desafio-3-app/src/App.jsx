import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const cars = [
    {
      id: 1,
      brand: "VW",
      km: 0,
      color: "azul",
      newcar: true
    },
    {
      id: 2,
      brand: "fiat",
      km: 0,
      color: "branco",
      newcar: true
    },
    {
      id: 3,
      brand: "GM",
      km: 0,
      color: "Preto",
      newcar: true
    },
    {
      id: 4,
      brand: "VW",
      km: 10000,
      color: "amarelo",
      newcar: false
    },
  ]

  const showMessage = () => {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <h1>Avançando em react</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Paisagem" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name={"Gabriel"}></ShowUserName>
      <CarDetails brand="VW" km={10000} color="Verde" newcar={false}></CarDetails>
      <CarDetails brand="fiat" km={0} color="Branco" newcar={true} ></CarDetails>
      <CarDetails brand="GMC" km={10000} color="Preto" newcar={false}></CarDetails>

      {cars.map((car) => (
        <div key={car.id}>
          <CarDetails brand={car.brand} km={car.km} color={car.color} newcar={car.newcar}></CarDetails>
        </div>
      ))}

      <Fragment></Fragment>
      <Container>
        <p>Este é o conteudo do container</p>
      </Container>
      <ExecuteFunction
        showMessage={showMessage}
      ></ExecuteFunction>

      <Message msg={message}></Message>
      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>

    </div>
  )
}

export default App
