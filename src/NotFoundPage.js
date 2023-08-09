import { useDispatch, useSelector } from 'react-redux';
import { logout } from './userSlice';
import { auth } from './firebase'; // Keep using your auth instance
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function NotFoundPage() {

    const navigate = useNavigate(); // Call the hook
    return (
        <div>
            <div>
                <h3>OOPS! You're not supposed to be here</h3>
                <button onClick={() => navigate("/home")}>GO TO HOME</button>
            </div>
        </div>
    );
}
         
export default NotFoundPage;
