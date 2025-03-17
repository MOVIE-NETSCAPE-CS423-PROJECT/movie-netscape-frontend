import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { API_BASE_URL } from "../../../config";

export const ChangePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialValues = {
    email: location.state.email,
    newPassword: "",
    confirmNewPassword: "",
  };

  async function handleSubmit(values, { resetForm }) {
    try {
      const changePassword = await axios.post(
        `${API_BASE_URL}/api/v1/auth/change-password`,
        values
      );
      if (changePassword.status == 200) {
        navigate("/login");
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
        <p className="lead left">Change password.</p>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => {
            return (
              <Form>
                <FormControl
                  name="newPassword"
                  control="input"
                  placeholder="New password"
                  type="password"
                />

                <FormControl
                  name="confirmNewPassword"
                  control="input"
                  placeholder="Confirm New password"
                  type="password"
                />

                <DefaultButton type="submit" label="Change Password" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
