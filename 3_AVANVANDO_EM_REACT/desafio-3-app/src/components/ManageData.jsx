import { useState } from "react"

const ManageData = () => {

    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(15)}>Mudar Valor</button>
        </div>
    )
}

export default ManageData