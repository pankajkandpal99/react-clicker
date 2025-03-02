import React from "react";
import { Cookie } from "lucide-react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105 active:scale-95 flex items-center"
    >
      <Cookie size={24} className="mr-2" />
      Click Cookie!
    </button>
  );
};

export default Button;
