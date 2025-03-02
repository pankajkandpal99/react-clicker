import React, { useEffect, useState } from "react";
import { Award, Star, Gift, Zap } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  prizesWon: number;
  bonusPoints: number | null;
  prizeWon: boolean;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  prizesWon,
  bonusPoints,
  prizeWon,
}) => {
  const [showBonus, setShowBonus] = useState(false);
  const [showPrize, setShowPrize] = useState(false);

  useEffect(() => {
    if (bonusPoints) {
      setShowBonus(true);
      const timer = setTimeout(() => {
        setShowBonus(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bonusPoints]);

  useEffect(() => {
    if (prizeWon) {
      setShowPrize(true);
      const timer = setTimeout(() => {
        setShowPrize(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [prizeWon]);

  return (
    <div className="text-center">
      <div className="mb-4 flex items-center justify-center">
        <Star className="text-yellow-500 mr-2" size={24} />
        <p className="text-2xl font-bold text-gray-800">
          Score: <span className="text-amber-600">{score}</span>
        </p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <Award className="text-purple-500 mr-2" size={24} />
        <p className="text-2xl font-bold text-gray-800">
          Prizes: <span className="text-purple-600">{prizesWon}</span>
        </p>
      </div>

      {/* Bonus Points Notification */}
      {showBonus && bonusPoints && (
        <div className="my-3 p-2 bg-yellow-100 border border-yellow-300 rounded-lg animate-pulse flex items-center justify-center">
          <Zap className="text-yellow-500 mr-2" size={20} />
          <p className="text-xl font-bold text-yellow-700">
            +{bonusPoints} Bonus Points!
          </p>
        </div>
      )}

      {/* Prize Won Notification */}
      {showPrize && (
        <div className="my-3 p-2 bg-purple-100 border border-purple-300 rounded-lg animate-pulse flex items-center justify-center">
          <Gift className="text-purple-500 mr-2" size={20} />
          <p className="text-xl font-bold text-purple-700">You Won a Prize!</p>
        </div>
      )}
    </div>
  );
};

export default ScoreDisplay;
