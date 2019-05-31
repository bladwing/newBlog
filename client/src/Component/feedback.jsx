import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../static/css/feedback.css';

const Basic = () => (
  <div>
    <h3>Please feedback our Blog</h3>
    <Formik
      initialValues={{ email: '', textarea: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <Field className="field" type="email" name="email" placeholder="Enter your mail" />
          <ErrorMessage name="email" component="div" /> <br/>
          <textarea className="field"  type="text" name="text" placeholder="Enter you feedback"></textarea>
          <ErrorMessage name="text" component="div"/> <br/>
          <button className="btn" type="submit" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;