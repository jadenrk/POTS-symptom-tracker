import { useAuthContext } from './useAuthContext';
import { useSymptomLogsContext } from './useSymptomLogsContext';

export const useLogout = () => {
    const { dispatch: authContext } = useAuthContext();
    const { dispatch: symptomLogsDispatch } = useSymptomLogsContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        authContext({ type: 'LOGOUT' });
        symptomLogsDispatch({type: 'SET_SYMPTOM_LOGS', payload: null});
    }

    return { logout };
}