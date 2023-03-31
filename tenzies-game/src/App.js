import { useEffect, useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);

        if (allHeld && allSameValue) {
            setTenzies(true);
            console.log('You won!');
        }
    }, [dice]);

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({ generateNewDie });
        }
        // console.log(newDice)
        return newDice;
    }

    function rollDice() {
        setDice((s) =>
            s.map((x) => {
                return x.isHeld ? x : generateNewDie();
            })
        );
    }

    function holdDice(id) {
        // console.log(id);
        setDice((prev) =>
            prev.map((x) => {
                return x.id === id ? { ...x, isHeld: !x.isHeld } : x;
            })
        );
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ));

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className='title'>Tenzies</h1>
            <p className='instructions'>
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className='dice-container'>{diceElements}</div>
            <button className='roll-dice' onClick={rollDice}>
                {tenzies ? 'New Game': 'Roll'}
            </button>           
        </main>
    );
}

export default App;
