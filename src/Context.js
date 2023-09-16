import { createContext , useReducer } from "react";


export const theameContext = createContext();

const initialState =  {darkMode : false};
const themeReducer = (state , action )=>{
    switch(action.type){
        case'toggle':
        return{
            darkMode:!state.darkMode
        }
        default:return state
       ; 
    }
};

export const ThemeProvider = (props)=>{
    const [state , dispatch]= useReducer(themeReducer , initialState);
    return(
        <theameContext.Provider value = {{state , dispatch}}>
        {props.children}</theameContext.Provider>
    )
}