import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <nav>
                    { user && (
                        <div>
                            <div>
                                <Link to="/">
                                    <h1>Log Symptom</h1>
                                </Link>
                                <Link to="/logs">
                                    <h1>View Logs</h1>
                                </Link>
                            </div>
                            <div>
                                <span>{user.email}</span>
                                <Link onClick={handleClick}>Log out</Link>
                            </div>
                        </div>
                    )}
                    { !user && (
                        <div>
                            <Link to="/signup">Sign up</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;