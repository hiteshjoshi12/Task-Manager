import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../components/Firebase";


const useLogin = (onLogin) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in");
        onLogin();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(`${errorCode} ${errorMessage}`);
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        alert("Password reset link sent succesfully !")
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(`${errorCode} ${errorMessage}`);
      });
  };

  return {
    emailRef,
    passwordRef,
    errorMsg,
    handleLogin,
    handleForgotPassword,
  };
};

export default useLogin;
