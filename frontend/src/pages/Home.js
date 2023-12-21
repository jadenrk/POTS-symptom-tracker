import { useEffect } from 'react';
import SymptomLogForm from '../components/SymptomLogForm';
import SymptomLogDetails from '../components/SymptomLogDetails';
import { useSymptomLogsContext } from "../hooks/useSymptomLogsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
    const { symptomLogs, dispatch } = useSymptomLogsContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchLogs = async () => {
            const response = await fetch('/api/symptomlogs', {
                headers: {
                    'Authorization': `Bearer ${ user.token }`
                }
            });
            const json = await response.json();

            if (response.ok){
                dispatch({ type: 'SET_SYMPTOM_LOGS', payload: json });
            }
        }

        if (user) {
            fetchLogs();
        }
    })

    return (
        <div className="home flex flex-row justify-around overflow-auto p-2">
            <div className="newLog">
                <SymptomLogForm/>
            </div>
        </div>
    )
}

export default Home;