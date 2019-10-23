import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = ({ values, touched, errors }) => {
  return (
    <Form>
      <Field
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
      />
      {touched.username && errors.username && <p>{errors.username}</p>}

      <Field
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
      {touched.email && errors.email && <p>{errors.email}</p>}

      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
      />
      {touched.password && errors.password && <p>{errors.password}</p>}

      <Field
        type="password"
        name="confirm"
        placeholder="Confirm"
        value={values.confirm}
      />
      {touched.confirm && errors.confirm && <p>{errors.confirm}</p>}

      <button type="submit">Signup</button>
    </Form>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ username, password, confirm }) {
    return {
      username: username || "",
      password: password || "",
      confirm: confirm || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username required"),
    email: Yup.string()
      .email()
      .required("Email Required"),
    password: Yup.string().required("Password Required"),
    confirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  }),

  handleSubmit({ username, email, password }, { props }) {
    axios
      .post("https://samirlilienfeld-oer-bookr.herokuapp.com/users/user", {
        username: username,
        primaryemail: email,
        password: password
      })
      .then(res => props.history.push("/login"))
      .catch(err => console.error(err));
  }
})(Signup);

export default FormikSignupForm;
