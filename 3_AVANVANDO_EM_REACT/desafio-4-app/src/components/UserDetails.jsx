import React from 'react'

const UserDetails = ({ name, age, profession }) => {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{profession}</li>
            </ul>
            <div>
                {age >= 18 ?
                    <div>
                        <p>"O Usuário pode ter Habilitação"</p>
                    </div>
                    :
                    <div>
                        <p>"O Usuário não pode ter Habilitação"</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserDetails