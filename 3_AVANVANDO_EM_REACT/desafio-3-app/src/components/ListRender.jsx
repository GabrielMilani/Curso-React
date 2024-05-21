import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Gabriel", "Jose", "Neide", "Karen"])

    const [users, setUsers] = useState([
        { id: 1, name: "Gabriel", age: 26 },
        { id: 2, name: "Jose", age: 61 },
        { id: 3, name: "Neide", age: 60 },
        { id: 4, name: "Karen", age: 27 }])


    const deleteRandon = () => {
        const randonNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randonNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
                ))}
            </ul>

            <button onClick={deleteRandon}> Delete User</button>
        </div>
    )
}

export default ListRender