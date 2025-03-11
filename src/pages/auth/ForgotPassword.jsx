import { Link } from "react-router";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";

export function ForgotPassword() {
  const initialValues = {
    email: "",
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
        <p className="lead left">Reset password.</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => {
            return (
              <Form>
                <FormControl
                  name="email"
                  control="input"
                  placeholder="Email"
                  type="email"
                />

                <DefaultButton type="submit" label="Send" />
              </Form>
            );
          }}
        </Formik>
        <div className="d-flex justify-content-between">
          <p className="pt-3 ">
            <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
