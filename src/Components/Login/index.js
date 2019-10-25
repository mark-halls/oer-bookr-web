import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

import { device } from "../../Styles/device";

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;

  input {
    padding: 0.75em 0;
    margin: 0.75em 0;
    width: 80%;

    @media ${device.tablet} {
      width: 400px;
    }
  }

  button {
    width: 12em;
  }
`;

const Login = ({ values, touched, errors }) => {
  return (
    <StyledForm>
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
    </StyledForm>
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

  handleSubmit(values, { props }) {
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
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("username", values.username);
        props.setLoginToken(true);
        props.history.push("/");
        props.history.push("/");
      })
      .catch(err => console.dir(err));
  }
})(Login);

export default FormikLoginForm;
