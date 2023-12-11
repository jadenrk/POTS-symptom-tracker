import { SymptomLogsContext } from "../context/SymptomLogsContext";
import { useContext } from "react";

export const useSymptomLogsContext = () => {
    const context = useContext(SymptomLogsContext);

    if (!context) {
        throw Error('useSymptomLogsContext must be used inside a SymtpomLogsContextProvider');
    }

    return context;
}