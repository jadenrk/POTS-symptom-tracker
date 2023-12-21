import { useEffect } from 'react';
import { useSymptomLogsContext } from '../hooks/useSymptomLogsContext';
import { useAuthContext } from '../hooks/useAuthContext';

// components
import SymptomLogDetails from '../components/SymptomLogDetails';

const Logs = () => {
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
        <div className="flex flex-grow flex-col overflow-hidden">
            {symptomLogs && symptomLogs.map((log) => (
                <SymptomLogDetails key={log._id} symptomLog={log} />
            ))}
        </div>
    )
}

export default Logs;