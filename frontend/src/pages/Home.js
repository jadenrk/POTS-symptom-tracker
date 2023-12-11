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

            <div className="fixTableHead">
                <table className="logs table table-fixed">
                    <thead>
                        <tr className="symptomLabels table-row">
                            <th className="date">Date</th>
                            <th className="">Dizziness</th>
                            <th className="">Palpitations</th>
                            <th className="">Chest Pain</th>
                            <th className="">Pre-Syncope</th>
                            <th className="">Brainfog</th>
                            <th className="">Dyspnea</th>
                            <th className="">GI Problems</th>
                            <th className="">Fatigue</th>
                            <th className="">Nausea</th>
                            <th className="">Muscle Pain</th>
                            <th className="">Headache</th>
                            <th className="min-w-[1.5rem]">Insomnia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {symptomLogs && symptomLogs.map((log) => (
                            <SymptomLogDetails key={log._id} symptomLog={log} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;