import React from "react";

interface HeaderProps {
  month: string;
  year: number;
  onNavigate: (direction: "prev" | "next") => void;
}

export const Header: React.FC<HeaderProps> = ({ month, year, onNavigate }) => {
  return (
    <>
      <div className="calendar-header">
        <button onClick={() => onNavigate("prev")}>←</button>
        <span>{`${month} ${year}`}</span>
        <button onClick={() => onNavigate("next")}>→</button>
      </div>
      <div className="days-of-the-week">
        <span>
          <p>Lunes</p>
        </span>
        <span>
          <p>Martes</p>
        </span>
        <span>
          <p>Miercoles</p>
        </span>
        <span>
          <p>Jueves</p>
        </span>
        <span>
          <p>Viernes</p>
        </span>
        <span>
          <p>Sabado</p>
        </span>
        <span>
          <p>Domingo</p>
        </span>
      </div>
    </>
  );
};
