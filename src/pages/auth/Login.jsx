import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import { Link, useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/authSlice";

export function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const from = location.state?.from || "/";

  // const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const resultAction = await dispatch(loginUser(values));
    console.log("Login Result: ", resultAction);
    if (loginUser.fulfilled.match(resultAction)) {
      navigate(from, { replace: true });
      resetForm();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
        <p className="lead left">Login to continue.</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => {
            return (
              <Form>
                <FormControl
                  name="username"
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
                <div className="col-lg-6 col-sm-12">
                  <DefaultButton type="submit" label="Login" />
                </div>
              </Form>
            );
          }}
        </Formik>
        <div className="d-flex justify-content-between">
          <p className="pt-3 ">
            Please <Link to={"/register"}>register</Link> to get better
            services.{" "}
          </p>
          <p className="pt-3">
            <Link to={"/forgot"}>Forgot Password</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
