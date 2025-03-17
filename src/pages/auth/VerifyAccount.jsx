import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import axios from "axios";
import { API_BASE_URL } from "../../../config";

export function VerifyAccount() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const parameters = location.state;
  console.log(location.state);
  const type = location.state?.type;

  const onSubmit = async () => {
    if (type == "forgot-password") {
      const verifyResetPasswordToken = await axios.post(
        `${API_BASE_URL}/api/v1/auth/verify-password-reset-token`,
        {
          token: otp,
        }
      );
      if (verifyResetPasswordToken.status == 200) {
        navigate("/change-password", { state: parameters });
      }
    } else {
      const verify = await axios.post(`${API_BASE_URL}/api/v1/users/verify`, {
        token: otp,
      });
      if (verify) {
        navigate("/login");
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
        <p className="h3 strong pb-4">
          Enter the 6 digit code sent to your email.
        </p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          placeholder={"******"}
          containerStyle={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
          inputStyle={{ flex: "50%", height: "60px", borderRadius: "10px" }}
          renderSeparator={<span> </span>}
          renderInput={(props) => <input {...props} />}
        />
        <div className="col-lg-6 mt-3">
          <DefaultButton label={"Verify"} onClick={onSubmit} />
        </div>
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
