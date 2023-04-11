import {createContext} from "react";

export const WeightContext = createContext();

function WeightContextProvider({children}) {
  return <WeightContext.Provider>{children}</WeightContext.Provider>;
}

export default WeightContextProvider;
