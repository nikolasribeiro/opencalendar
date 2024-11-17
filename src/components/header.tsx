import React from "react";

interface HeaderProps {
  month: string;
  year: number;
  onNavigate: (direction: "prev" | "next") => void;
}

export const Header: React.FC<HeaderProps> = ({ month, year, onNavigate }) => {
  return (
    <div className="calendar-header">
      <button onClick={() => onNavigate("prev")}>←</button>
      <span>{`${month} ${year}`}</span>
      <button onClick={() => onNavigate("next")}>→</button>
    </div>
  );
};
