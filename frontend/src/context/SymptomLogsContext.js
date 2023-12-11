import { createContext, useReducer } from "react";

export const SymptomLogsContext = createContext();

export const symptomLogsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_SYMPTOM_LOGS':
            return {
                symptomLogs: action.payload
            }
        case 'CREATE_SYMPTOM_LOG':
            return {
                symptomLogs: [action.payload, ...state.symptomLogs]
            }
        case 'DELETE_SYMPTOM_LOG':
            return {
                symptomLogs: state.symptomLogs.filter((sl) => sl._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const SymptomLogsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(symptomLogsReducer, {
        symptomLogs: null
    });

    return (
        <SymptomLogsContext.Provider value={{...state, dispatch}}>
            { children }
        </SymptomLogsContext.Provider>
    )
}