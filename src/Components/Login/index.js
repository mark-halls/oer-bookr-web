import React, { useState } from "react";

import { connect } from 'react-redux'
import { loginUser } from '../../Store/Actions'
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



const mapDispatchToProps = {
  loginUser
}


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
    const credentials = {
      username: values.username,
      password: values.password
    }
    props.loginUser(credentials)
  }
})(Login);

export default connect(
  null,
  mapDispatchToProps
)(FormikLoginForm);
