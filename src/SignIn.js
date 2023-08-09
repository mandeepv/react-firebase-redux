import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './userSlice';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { logout } from './userSlice';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Call the hook
    const user = useSelector(state => state.user.user);


    const handleSignIn = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userData = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        };
        dispatch(login(userData));
        alert("Signing in. Click OK to continue.");
        navigate("/home");  // Use the navigate function
      } catch (error) {
        console.error("Error signing in:", error);
        alert(`Error signing in: ${error.message}`); // Show error alert
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
        {/* ... rest of your component */}
        <form onSubmit={handleSignIn}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
}

export default SignIn;
