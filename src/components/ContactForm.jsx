import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name ist erforderlich"),
    email: Yup.string()
      .email("Ungultige E-Mail-Addresse")
      .required("E-Mail-Adresse ist erforderlich"),
    subject: Yup.string().required("Betreff ist erforderlich"),
    message: Yup.string()
      .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
      .required("Nachricht ist erforderlich"),
  });
  const handleFormSubmit = (values, { resetForm }) => {
    const mailtoLink = `mailto:nilou.asghari@gmail.com?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(
      `Name:${values.name}\nE-Mail-Adresse:${values.email}\n\n${values.message}`
    )}`;
    toast.success(
      "Ihr  E-Mail-Client wird bald geöffnet, um die Nachricht zu senden!"
    );
    resetForm();
    window.location.href = mailtoLink;
  };
  return (
    <div className="w-100 p-4">
      <ToastContainer />
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-Mail-Adresse
            </label>
            <Field type="text" name="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Betreff
            </label>
            <Field type="text" name="subject" className="form-control" />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Nachricht
            </label>
            <Field
              as="textarea"
              name="message"
              className="form-control"
              rows="4"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Absenden
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
