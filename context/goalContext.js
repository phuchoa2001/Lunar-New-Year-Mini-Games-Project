import { createContext, useContext, useState } from 'react';

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const initialValues = {
    idGame: null,
    target: '',
    note: '',
    inGame: 'Avatar 3x',
  }
  const [data, setData] = useState(initialValues);

  const resetData = () => {
    setData(initialValues);
  }

  return (
    <GoalContext.Provider value={{ data, setData, resetData }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoalContext = () => useContext(GoalContext);
