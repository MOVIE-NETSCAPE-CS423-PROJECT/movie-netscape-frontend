import { FaAirbnb } from "react-icons/fa";
export function DefaultButton({ type, label }) {
  return (
    <div className="d-grid gap-2  ">
      <button className="btn btn-main btn-lg" type={type}>
        <span>{label}</span> <FaAirbnb />
      </button>
    </div>
  );
}
