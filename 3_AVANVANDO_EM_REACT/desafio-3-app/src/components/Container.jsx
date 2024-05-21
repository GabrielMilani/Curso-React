import React from 'react'

const Container = ({ children }) => {
    return (
        <div>
            <h2>Este e o titulo do container</h2>
            {children}
        </div>
    )
}

export default Container