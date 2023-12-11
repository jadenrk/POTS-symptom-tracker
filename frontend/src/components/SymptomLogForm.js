import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useSymptomLogsContext } from "../hooks/useSymptomLogsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const SymptomLogForm = () => {
    const { dispatch } = useSymptomLogsContext();
    const { user } = useAuthContext();

    const [logDate, setLogDate] = useState(new Date());
    const [dizziness, setDizziness] = useState(0);
    const [palpitations, setPalpitations] = useState(0);
    /*const [chestPain, setChestPain] = useState5('');
    const [preSyncope, setPreSyncope] = useState('');
    const [brainfog, setBrainfog] = useState('');
    const [dyspnea, setDyspnea] = useState('');
    const [gastrointestinal, setGastrointestinal] = useState('');
    const [fatigue, setFatigue] = useState('');
    const [nausea, setNausea] = useState('');
    const [musclePain, setMusclePain] = useState('');
    const [headache, setHeadache] = useState('');
    const [insomnia, setInsomnia] = useState('');*/
    const [error, setError] = useState(null);

    const rangeOptions = [];
    for (let i = 0; i <= 10; i++) {
        rangeOptions.push(i);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }
        
        const symptomLog = { logDate, dizziness, palpitations };

        Object.keys(symptomLog).forEach(key => {
            if (key.value === null && key !== 'logDate') {
                symptomLog[key] = 0;
            } 
        })

        const response = await fetch('/api/symptomlogs', {
            method: 'POST',
            body: JSON.stringify(symptomLog),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ user.token }`
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            e.target.reset();
            setLogDate(new Date());
            setDizziness(0);
            setPalpitations(0);
            setError(null);
            dispatch({ type: 'CREATE_SYMPTOM_LOG', payload: json });
        }
    }

    return (
        <form className="create flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <h3>Log Symptoms</h3>
            
            <label>Date: {format(new Date(logDate), "MM-dd-yyyy")}</label>
            <DayPicker
                mode="single"
                required
                selected={logDate}
                onSelect={setLogDate}
                footer=''
            />

            <label>Dizziness: {dizziness}</label>
            <div className="relative mb-6">
                <input 
                    id="labels-range-input" 
                    type="range" 
                    defaultValue="0"
                    min="0" max="10" step="1"
                    className="w-full h-2"  
                    onChange={(e) => setDizziness(e.target.value)}
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute -bottom-6 start-[01%]">
                    0
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[11%] -bottom-6">
                    1
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[20%] -bottom-6">
                    2
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[30%] -bottom-6">
                    3
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[39%] -bottom-6 ">
                    4
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[49%] -bottom-6">
                    5
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[57%] -bottom-6 ml-1">
                    6
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[66%] -bottom-6 ml-1">
                    7
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[76%] -bottom-6 ml-1">
                    8
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[85%] -bottom-6 ml-1">
                    9
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-[95%] -bottom-6">
                    10
                </span>
            </div>

            <label>Palpitations:</label>
            <input
                type="number"
                onChange={(e) => setPalpitations(e.target.value)} 
                defaultValue={palpitations} 
            />

            <button>Add Symptom Log</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SymptomLogForm;