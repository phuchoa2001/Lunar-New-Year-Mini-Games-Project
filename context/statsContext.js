// createContext.js
import { createContext, useContext, useState } from 'react';

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [data, setData] = useState({
    count: 0,
    result: {
      views: 0
    }
  });

  return (
    <StatsContext.Provider value={{ data, setData }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStatsContext = () => useContext(StatsContext);
