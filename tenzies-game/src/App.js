import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid'

function App() {
    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const newDice =[];
              for (let i = 0; i < 10; i++) {
           
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld:false,
                id: nanoid()
            });
        }
        // console.log(newDice)
        return newDice;
    }

    function rollDice() {
        return setDice((s) => allNewDice());
    }


    const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld}/>);

    return (
        <main>
            <div className='dice-container'>{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    );
}

export default App;
