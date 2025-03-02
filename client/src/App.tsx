import Button from "./components/Button";
import ScoreDisplay from "./components/ScoreDisplay";
import useGameLogic from "./hooks/useGameLogic";
import { Cookie } from "lucide-react";

function App() {
  const { score, prizesWon, bonusPoints, prizeWon, onButtonClick } =
    useGameLogic();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <Cookie size={36} className="text-amber-600 mr-3" />
          <h1 className="text-4xl font-bold text-amber-800">Cookie Clicker</h1>
        </div>

        <div className="mb-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <ScoreDisplay
            score={score}
            prizesWon={prizesWon}
            bonusPoints={bonusPoints}
            prizeWon={prizeWon}
          />
        </div>

        <div className="flex justify-center">
          <Button onClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
