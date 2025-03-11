export const AlertComponent = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} mt-3 alert-dismissible`} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
