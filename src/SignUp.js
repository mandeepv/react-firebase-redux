import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './userSlice';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { logout } from './userSlice';

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Call the hook
    const user = useSelector(state => state.user.user);
    const handleSignUp = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(login(userCredential.user));
        alert("Signup was successful! Click OK to continue.");
        navigate("/home");  // Use the navigate function
      } catch (error) {
        console.error("Error signing up:", error);
        alert(`Error signing up: ${error.message}`);  // Show the exact error message
      }
    };
    
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

    if (user) {
      return <div>You are already signed in
        <button onClick={() => navigate("/home")}>GO TO HOME</button>
        <button onClick={handleSignOut}>SIGNOUT</button>
      </div>;
    }
    return (
      <div>
        <form onSubmit={handleSignUp}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}
  
export default SignUp;
