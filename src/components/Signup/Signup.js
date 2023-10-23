import React, { useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import emailjs from 'emailjs-com';


import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Signup() {



  const sendEmail = async (emailjsData) => {
    try {
      const result = await emailjs.send('service_219robq', 'template_xckno4s', emailjsData, '1-Y5d5TGmZp1y_gYP');
      console.log(result.text);
    } catch (error) {
      console.error(error);
    }
  };
  
  //

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (e) => {
    console.log("enter")
    e.preventDefault();
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    console.log("a enter")

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
    console.log("f enter")
    const emailjsData = {
      user_name: values.name,
      user_email: values.email,
      user_password: values.pass,
    };
    console.log("d enter")
        sendEmail(emailjsData);
        console.log("d2 enter")

        navigate("/Dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
{/* <form onSubmit={handleSubmission}> */}
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
        name="user_name"
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
        name="user_email"
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
        name="user_password"
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Signup;
