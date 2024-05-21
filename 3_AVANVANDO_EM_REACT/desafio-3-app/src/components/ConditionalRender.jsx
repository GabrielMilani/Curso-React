import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name] = useState("Gabriel");

    return (
        <div>
            <div>
                <h1>Isso será exibido?</h1>
                {x && <p>Se X for true, sim!"</p>}
                {!x && <p>Agora X e false!"</p>}
            </div>
            <div>
                {name == "Gabriel" ?
                    <div>
                        <p>
                            "O nome é Gabriel"
                        </p>
                    </div>
                    :
                    <div>
                        <p>
                            "não e Gabriel"
                        </p>
                    </div>
                }
            </div>
        </div>


    )
}

export default ConditionalRender