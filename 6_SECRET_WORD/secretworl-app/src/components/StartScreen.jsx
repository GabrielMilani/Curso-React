import "./StartScreen.css"

const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>	Click no botão para começão a jogar</p>
            <button
                onClick={startGame}
            >Começar o jogo</button>
        </div>
    )
}

export default StartScreen