import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { doc,setDoc,serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      
      updateProfile(auth.currentUser, {
        displayName: name
      });

      const formDataCopy = {...formData}
   delete formDataCopy.password
  formDataCopy.timestamp = serverTimestamp()

  await setDoc(doc(db,'users',user.uid),
  formDataCopy
  )

      navigate('/')
    } catch (error) {
      toast.error('Something went wrong!')
    }
  };

  const { name, email, password } = formData;

  

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="nameInput"
            onChange={changeHandler}
            name=""
            id="name"
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="emailInput"
            onChange={changeHandler}
            name=""
            id="email"
          />

          <div className="passwordInputDiv">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              placeholder="Password"
              className="passwordInput"
              onChange={changeHandler}
              id="password"
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPass((prevState) => !prevState)}
            />
          </div>

          <Link to="/ForgotPassword" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        <Link to="/Sign-In" className="registerLi">
          Sign In Instead
        </Link>
      </div>
    </>
  );
}

export default SignUp;
