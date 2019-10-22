import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../Store/Actions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

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

const mapDispatchToProps = {
  registerUser
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ username, password, confirm, email }) {
    return {
      username: username || "",
      password: password || "",
      email: email || "",
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

  handleSubmit(values, { props }) {
    const credentials = {
      username: values.username,
      password: values.password,
      primaryemail: values.email
    };
    props.registerUser(credentials);
  }
})(Signup);

export default connect(
  null,
  mapDispatchToProps
)(FormikSignupForm);
