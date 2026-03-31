import { useState } from "react";
import Die from "./components/Die";

function App() {
  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  };
  const [dice, setDice] = useState(generateAllNewDice());

  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
