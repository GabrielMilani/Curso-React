
import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 5;

  const readTitle = true

  const [name] = useState("Mario")

  return (
    <div>
      <h1>React com CSS</h1>

      <MyComponent></MyComponent>

      <p>Este paragrafo e do app.Jsx</p>

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p >

      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}> CSS dinamico </h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}> CSS dinamico </h2>

      <h2 style={name == "Mario" ? ({ color: "green", backgroundColor: "red" }) : null}> CSS dinamico </h2>

      <h2 className={readTitle ? "red-title" : "title"}>Este titulo tera classe dinamica</h2>

      <Title></Title>

    </div >
  )
}

export default App
