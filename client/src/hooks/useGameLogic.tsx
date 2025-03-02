import { useEffect, useState } from "react";
import { fetchUserData, handleClick } from "../services/api";
import { toast } from "sonner";

const useGameLogic = () => {
  const [score, setScore] = useState<number>(0);
  const [prizesWon, setPrizesWon] = useState<number>(0);
  const [bonusPoints, setBonusPoints] = useState<number | null>(null);
  const [prizeWon, setPrizeWon] = useState<boolean>(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setScore(data.score);
        setPrizesWon(data.prizesWon);
      } catch (error) {
        console.error("Error loading user data:", error);
        toast.error("Failed to load user data");
      }
    };
    loadUserData();
  }, []);

  const onButtonClick = async () => {
    try {
      const data = await handleClick();
      // console.log("data : ", data);

      setScore(data.score);
      setBonusPoints(data.bonusPoints || null);
      setPrizeWon(data.prizeWon || false);

      if (data.bonusPoints) {
        toast.success(`You earned ${data.bonusPoints} bonus points!`);
      }
      if (data.prizeWon) {
        setPrizesWon((prev) => prev + 1);
        toast.success("You won a prize!");
      }
    } catch (error) {
      console.error("Error handling click:", error);
      toast.error("Failed to handle click");
    }
  };

  return { score, prizesWon, bonusPoints, prizeWon, onButtonClick };
};

export default useGameLogic;
