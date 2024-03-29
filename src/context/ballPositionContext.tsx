// MyStateContext.js
import React, { createContext, useState, useContext } from "react";
import { INITIAL_Ball_Position } from "../helpers/moveBallFunc";

const MyStateContext = createContext(INITIAL_Ball_Position);

export const ballPosition = ({ children }) => {
  const [ballPosition, setBallPosition] = useState(INITIAL_Ball_Position);

  const updateState = (newState: any) => {
    setBallPosition(newState);
  };

  return (
    <MyStateContext.Provider value={{ ballPosition, updateState }}>
      {children}
    </MyStateContext.Provider>
  );
};

export const useMyBallPosition = () => {
  const context = useContext(MyStateContext);
  if (!context) {
    throw new Error("useMyState must be used within a ballPosition");
  }
  return context;
};
