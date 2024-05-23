//CSS
import { useCallback, useEffect, useState } from 'react'
import './App.css'

//Components
import StartScreen from './components/StartScreen'

//Data
import { wordsList } from "./data/words"
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

const guessesQty = 30

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category };
  }, words);

  //starts the secret word game
  const startGame = useCallback(() => {
    clearLetterStates();

    const { word, category } = pickWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letra) => letra.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  //process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((atualGuessedLetters) => [...atualGuessedLetters, letter]);
    } else {
      setWrongLetters((atualWrongLetters) => [...atualWrongLetters, normalizedLetter]);
      setGuesses((atualGuesses) => atualGuesses - 1);
    }
  };

  console.log(wrongLetters);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((atualScore) => atualScore += 100)
      startGame();
    }
  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name)
  };

  return (
    <div className='App'>
      {gameStage === 'start' &&
        <StartScreen
          startGame={startGame}
        ></StartScreen>
      }
      {gameStage === 'game' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        ></Game>
      }
      {gameStage === 'end' &&
        <GameOver
          retry={retry}
          score={score}
        ></GameOver>
      }
    </div>
  )
}

export default App
