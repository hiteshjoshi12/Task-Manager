import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";

const useSignup = (onsignup) => {
  const email = useRef(null);
  const password = useRef(null);
  const [Errormsg, setErrmsg] = useState(null);

  const handelsignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        onsignup();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrmsg(errorCode + " " + errorMessage);
      });
  };

  return {
    email,
    password,
    Errormsg,
    handelsignup,
  };
};

export default useSignup;
