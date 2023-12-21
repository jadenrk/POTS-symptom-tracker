import { useSymptomLogsContext } from "../hooks/useSymptomLogsContext";
import { format } from "date-fns";
import { useAuthContext } from '../hooks/useAuthContext';

const SymptomLogDetails = ({ symptomLog }) => {
    const { dispatch } = useSymptomLogsContext();
    const { user } = useAuthContext();

    const dateToUse = new Date(symptomLog.logDate);

    const handleClick = async () => {
        if (!user) {
            return;
        }
        const response = await fetch('/api/symptomlogs/' + symptomLog._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${ user.token }`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_SYMPTOM_LOG', payload: json });
        }
    }

    return (
        <div className="flex flex-row border border-black rounded m-1">
            <div className="flex flex-col px-2 py-1 date justify-center border-r border-black">
                {format(dateToUse, "MM-dd-yyyy")}
            </div>
            <div className="flex symptomData p-2">
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Brainfog
                        </div>
                        <div className="px-2 py-1">{ symptomLog.brainfog }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Chest pain
                        </div>
                        <div className="px-2 py-1">{ symptomLog.chestPain }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Dizziness
                        </div>
                        <div className="px-2 py-1">{ symptomLog.dizziness }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Dyspnea
                        </div>
                        <div className="px-2 py-1">{ symptomLog.dyspnea }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Fatigue
                        </div>
                        <div className="px-2 py-1">{ symptomLog.fatigue }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Gastrointestinal issues
                        </div>
                        <div className="px-2 py-1">{ symptomLog.gastrointestinal }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Headache
                        </div>
                        <div className="px-2 py-1">{ symptomLog.headache }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Insomnia
                        </div>
                        <div className="px-2 py-1">{ symptomLog.insomnia }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Muscle pain
                        </div>
                        <div className="px-2 py-1">{ symptomLog.musclePain }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Nausea
                        </div>
                        <div className="px-2 py-1">{ symptomLog.nausea }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Palpitations
                        </div>
                        <div className="px-2 py-1">{ symptomLog.palpitations }</div>
                    </div>
                    <div className="flex flex-row m-1 border border-gray-600 rounded">
                        <div className="px-2 py-1 bg-gray-500 text-gray-50">
                            Pre-syncope
                        </div>
                        <div className="px-2 py-1">{ symptomLog.preSyncope }</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-2 py-1 date justify-center border-l border-black">
                <div>modify</div>
            </div>
        </div>
    )
}

export default SymptomLogDetails;