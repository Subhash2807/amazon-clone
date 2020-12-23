import  React,{createContext,useContext,useReducer,children} from "react";
// Prepare the data lare
export const StateContext = createContext();

export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue=()=> useContext(StateContext);