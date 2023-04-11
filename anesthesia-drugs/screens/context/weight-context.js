import {createContext, useState} from "react";

export const WeightContext = createContext();

function WeightContextProvider({children}) {
  const [weight, setWeight] = useState();

  const weightInputHandler = (enteredText) => {
    setWeight(enteredText);
  };

  const value = {
    weight,
    weightInputHandler,
  };

  return (
    <WeightContext.Provider value={value}>{children}</WeightContext.Provider>
  );
}

export default WeightContextProvider;
