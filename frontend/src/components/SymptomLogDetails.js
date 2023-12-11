import { useSymptomLogsContext } from "../hooks/useSymptomLogsContext";
import { format } from "date-fns";
import { useAuthContext } from '../hooks/useAuthContext';

const SymptomLogDetails = ({ symptomLog }) => {
    const { dispatch } = useSymptomLogsContext();
    const { user } = useAuthContext();

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
        <tr className="symptomLog-details">
            <td className="date">mm/dd/yy</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
    )
}

export default SymptomLogDetails;