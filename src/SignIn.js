import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './userSlice';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
