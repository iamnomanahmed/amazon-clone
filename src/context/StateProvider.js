
import React, {createContext, useContext,useReducer} from 'react';

//PREPARE THE DATA LAYER
export const StateContext= createContext()


// Wrapping the app and provide the data layer
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
    </StateContext.Provider>
)

// PULL INFO
export const useStateValue =()=> useContext(StateContext)