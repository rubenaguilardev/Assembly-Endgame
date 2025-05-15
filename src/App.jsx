import {languages} from './languages.js'
import Chip from './Chip'

export default function App() {

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
     
    </main>
  )
}
