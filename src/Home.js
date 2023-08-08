import { useDispatch, useSelector } from 'react-redux';
import { logout } from './userSlice';
import { auth } from './firebase'; // Keep using your auth instance
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Get the navigate function

    if (!user) {
      return <div>Please log in to view your details.
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </div>;
    }
  
    const handleSignOut = async () => {
      try {
        await auth.signOut(); // Use the signOut method directly on the auth instance
        dispatch(logout());
        alert("Signed out successfully!");
        navigate("/"); // Redirect to the sign-in page
      } catch (error) {
        console.error("Error signing out:", error);
        alert(`Error signing out: ${error.message}`); // Show the exact error message
      }
    };
  
    return (
        <div>
            <div>
                {user && (
                    <div>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                )}
            </div>
        </div>
    );
}
         
export default Home;
