import { Link } from "react-router";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { DefaultButton } from "../../components/buttons/DefaultButton";

export function VerifyAccount() {
  const [otp, setOtp] = useState("");
  const onSubmit = () => {
    console.log("Form data", otp);
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
        <div className="mt-3">
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
