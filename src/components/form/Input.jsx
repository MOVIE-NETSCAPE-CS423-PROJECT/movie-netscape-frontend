import { Field, ErrorMessage } from "formik";
import { TextError } from "./TextError";
export function Input({ name, placeholder, type, ...rest }) {
  return (
    <div className="mb-3">
      {/* <div className="form-control"> */}
      {/* <label htmlFor={name} className="form-label">
        {placeholder}
      </label> */}
      <Field
        className="form-control form-control-lg"
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
      {/* </div> */}
    </div>
  );
}
