import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Call the hook

    const handleSignUp = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(login(userCredential.user));
        alert("Signup was successful! Click OK to continue.");
        navigate("/");  // Use the navigate function
      } catch (error) {
        console.error("Error signing up:", error);
        alert(`Error signing up: ${error.message}`);  // Show the exact error message
      }
    };
  
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
