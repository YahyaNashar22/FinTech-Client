import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Game.module.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [title, setTitle] = useState("Can you win this?");
  const playerSymbol = "x";
  const computerSymbol = "o";
  const navigate = useNavigate();

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    if (count % 2 === 1 && !lock) {
      const timeout = setTimeout(() => {
        makeComputerMove();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [count]);

  const makeComputerMove = () => {
    if (lock) return;

    const availableMoves = board.reduce(
      (acc, cell, index) => (cell === "" ? [...acc, index] : acc),
      []
    );

    const randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];

    const updatedBoard = [...board];
    updatedBoard[randomMove] = computerSymbol;

    setBoard(updatedBoard);
    setCount(count + 1);
    checkWin(updatedBoard);
  };

  const toggle = (num) => {
    if (lock || board[num] !== "") {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[num] = playerSymbol;

    setBoard(updatedBoard);
    setCount(count + 1);
    checkWin(updatedBoard);
  };

  const checkWin = (currentBoard) => {
    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (
        currentBoard[a] !== "" &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        won(currentBoard[a]);
        return;
      }
    }

    if (count === 8) {
      won(null);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === playerSymbol) {
      setTitle("Congratulations, You Won !");
    } else if (winner === computerSymbol) {
      setTitle("Sorry, Computer Wins !");
    } else {
      setTitle("Draw !");
    }
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className={style.game}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.board}>
        {[0, 1, 2].map((i) => (
          <div key={i} className={style.row}>
            {[0, 1, 2].map((j) => {
              const num = i * 3 + j;
              return (
                <div
                  key={num}
                  className={style.box}
                  onClick={() => toggle(num)}
                >
                  {board[num] === playerSymbol && (
                    <img src={cross} alt="Cross" />
                  )}
                  {board[num] === computerSymbol && (
                    <img src={circle} alt="Circle" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
