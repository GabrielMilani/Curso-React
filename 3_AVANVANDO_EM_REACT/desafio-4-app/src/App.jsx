import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const pessoas = [
    { id: 1, name: "Gabriel", age: 26, profession: "dev" },
    { id: 2, name: "Mario", age: 15, profession: "estudante" },
    { id: 3, name: "Karen", age: 27, profession: "Bancaria" }
  ]

  const [users, setUsers] = useState(pessoas)


  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <UserDetails
            name={user.name}
            age={user.age}
            profession={user.profession}
          ></UserDetails>
        </div>
      ))

      }

    </>
  )
}

export default App
