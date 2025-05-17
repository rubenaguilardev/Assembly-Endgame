import {languages} from './languages.js'
import {useState} from 'react'

export default function App() {

  const [currentWord, setCurrentWord] = useState('react')

  const [guessed, setGuessed] = useState([])

  const wrongWordCount = guessed.filter(letter => !currentWord.includes(letter)).length

  const isGameWon = currentWord.split('').every(letter => guessed.includes(letter))
  const isGameLost = wrongWordCount === languages.length - 1 ? true : false
  const isGameOver = isGameWon || isGameLost

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

  const letters = currentWord.split('').map((letter, index) => 
    <span 
      key={index} 
      className='letter'>
        {guessed.includes(letter) ? letter.toUpperCase() : ''}
    </span>
  )
  

  const languageChips = languages.map((chip, index) => 
    <span 
      key={chip.name}
      className={index < wrongWordCount ? 'chip lost' : 'chip'}
      style={{
          backgroundColor: chip.backgroundColor,
          color: chip.color
      }}>
      {chip.name}
    </span>)

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className='status'>
        {isGameOver && <div 
          className='status-container' 
          style={{backgroundColor: isGameWon ? '#10A95B' : '#BA2A2A'}}>
            <h2>{isGameWon ? 'You win!' : 'Game over!'}</h2>
            <span>{isGameWon ? 'Well done! 🎉' : 'You lose! Better start learning Assembly 😭'}</span>
        </div>}
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
      <section className='new-game-container'>
        {isGameOver && <button className='new-game-btn'>New Game</button>}
      </section>
    </main>
  )
}
