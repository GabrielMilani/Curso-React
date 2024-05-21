import React from 'react'

const Challenge = () => {

    const a = 1;
    const b = 3;

    // const soma = (a, b) => {
    //     return (
    //        console.log(a + b)
    //     )
    // }

    return (
        <div>
            <p>Valor A = {a}</p>
            <p>Valor B = {b}</p>

            <button onClick={() => console.log(a + b)} > Somar </button>
        </div >
    )
}

export default Challenge