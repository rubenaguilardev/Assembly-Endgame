import {languages} from './languages.js'
import Chip from './Chip'
import {useState} from 'react'

export default function App() {

  const [currentWord, setCurrentWord] = useState('react')

  const [guessed, setGuessed] = useState([])

  const wrongWordCount = guessed.filter(letter => !currentWord.includes(letter)).length

  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]

  function addGuessedLetter(letter) {

    setGuessed(prevGuessed =>
      prevGuessed.includes(letter) ? 
        prevGuessed : [...prevGuessed, letter])
  }

  const keyboardKeys = alphabet.map(letter => {
    const isGuessed = guessed.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed & !currentWord.includes(letter)

    return (
      <button 
        key={letter} 
        className={isCorrect ? 'green' : isWrong ? 'red' : null}
        onClick={() => addGuessedLetter(letter)}>{letter.toUpperCase()}
      </button>
  )
})

  const letters = currentWord.split('').map((letter, index) => (
    <span 
      key={index} 
      className='letter'>
        {guessed.includes(letter) ? letter.toUpperCase() : ''}
    </span>)
  )

  const languageChips = languages.map(chip => 
    (<Chip 
      key={chip.name}
      name={chip.name} 
      backgroundColor={chip.backgroundColor}
      color={chip.color}
      />))

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className='status'>
        <h2>You win!</h2>
        <span>Well done! 🎉</span>
      </section>
      <section className='chips'>
        {languageChips}
      </section>
      <section className='word-section'>
        {letters}
      </section>
      <section className='keyboard'>
        {keyboardKeys}
      </section>
     
    </main>
  )
}
