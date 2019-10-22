import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ values, touched, errors }) => {
  return (
    <Form>
      <Field
        type="text"
        name="username"
        placeholder="Username"
        value={values.name}
      />
      {touched.username && errors.name && <p>{errors.name}</p>}
      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
      />
      {touched.password && errors.password && <p>{errors.password}</p>}
      <button type="submit">Login</button>
    </Form>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username required"),
    password: Yup.string().required("Password required")
  }),

  handleSubmit(values) {
    axios
      .post(
        "https://samirlilienfeld-oer-bookr.herokuapp.com/login",
        `grant_type=password&username=${values.username}&password=${values.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        // this.props.history.push("/users");
      })
      .catch(err => console.dir(err));
  }
})(Login);

export default FormikLoginForm;
