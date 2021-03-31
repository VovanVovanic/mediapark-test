import React, { useState } from 'react'
import Button from '../button/button';
import { useFormik } from "formik";
import styles from './login.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../message/message';
import { RootStateType } from '../redux/store';
import { fetchAuth } from '../redux/actions/auth';



type formikErrorType = {
  email?: string;
  password?: string;
};
export type dataType = {
  email: string;
  password: string;
};

const Login = () => {
  const [requestType, setRequestType] = useState<string>('')
  const dispatch = useDispatch()
  const message = useSelector<RootStateType, string>((state) => state.auth.message)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: (values) => {
      const errors: formikErrorType = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (values.password.length < 5) {
        errors.password = "Too Short password";
      }
      return errors;
    },

    onSubmit: (values: dataType) => {
      requestType === "login" && dispatch(fetchAuth(values, 1));
      requestType === "register" && dispatch(fetchAuth(values, 0));
      formik.resetForm();
    },
  });
 

  const onLogHandler = (type: string) => {
    setRequestType(type)
  }

  return (
    <>
      <h2 className={styles.loginHeader}>Login or register</h2>
      <form className={styles.login} onSubmit={formik.handleSubmit}>
        {formik.errors.email && formik.touched.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <input
          type={"email"}
          className={styles.loginEmail}
          placeholder={"type your email"}
          {...formik.getFieldProps("email")}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <input
          type={"password"}
          className={styles.loginPassword}
          placeholder={"type your password"}
          {...formik.getFieldProps("password")}
          onBlur={formik.handleBlur}
        />

        <div className={styles.loginBtns}>
          <Button type={"login"} onClick={() => onLogHandler("login")}>
            login
          </Button>
          <Button type={"register"} onClick={() => onLogHandler("register")}>
            register
          </Button>
        </div>
      </form>
     {message && <Message text={message}/>}
    </>
  );
}
export default Login