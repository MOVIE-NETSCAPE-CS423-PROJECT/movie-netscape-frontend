import { Link, useLocation, useNavigate } from "react-router";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import { FormControl } from "../../components/form/FormControl";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authSlice";

export function Register() {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const onSubmit = (values, { resetForm }) => {
    const result = dispatch(registerUser(values));

    if (registerUser.fulfilled.match(result)) {
      navigate("/verify", { replace: true });
      resetForm();
      return;
    }
    if (registerUser.rejected.match(result)) {
      console.log("error", error);
    }
    if (loading) {
      console.log("loading");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-8 col-md-12 col-sm-12 mx-auto">
        <p className="lead left">Register to continue.</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => {
            return (
              <Form>
                <div className="row">
                  <div className="col-lg-6">
                    <FormControl
                      name="firstname"
                      control="input"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormControl
                      name="lastname"
                      control="input"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <FormControl
                  name="email"
                  control="input"
                  placeholder="Email"
                  type="email"
                />
                <FormControl
                  name="password"
                  control="input"
                  placeholder="Password"
                  type="password"
                />
                <DefaultButton type="submit" label={"Register"} />
              </Form>
            );
          }}
        </Formik>
        <p className="pt-3">
          Please <Link to={"/login"}>login</Link> to get better services.{" "}
        </p>
      </div>
    </div>
  );
}
