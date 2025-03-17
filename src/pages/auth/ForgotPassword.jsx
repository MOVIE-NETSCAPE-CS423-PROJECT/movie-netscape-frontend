import { Link, useNavigate } from "react-router";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import axios from "axios";
import { API_BASE_URL } from "../../../config";

export function ForgotPassword() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    try {
      const reset = await axios.post(
        `${API_BASE_URL}/api/v1/auth/forgot-password/${values.email}`
      );
      if (reset.status == 200) {
        navigate("/verify", {
          state: { type: "forgot-password", email: values.email },
        });
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
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
          <p></p>
          <p className="pt-3 ">
            <Link to={"/login"}>Login</Link> instead
          </p>
        </div>
      </div>
    </div>
  );
}
