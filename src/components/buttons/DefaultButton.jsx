import { FaAirbnb } from "react-icons/fa";
export function DefaultButton({ type, label, onClick }) {
  return (
    <div
    //className="d-grid gap-2  "
    >
      <button className="btn btn-main btn-lg" type={type} onClick={onClick}>
        <span>{label}</span>
        {/* <FaAirbnb /> */}
      </button>
    </div>
  );
}
