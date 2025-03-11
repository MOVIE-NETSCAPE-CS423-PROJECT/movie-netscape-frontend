import { FaAngleRight } from "react-icons/fa6";

export const ListComponent = ({ profiles }) => {
  return (
    <ul className="list-group" key={1}>
      {profiles?.map((profile) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={profile.id}
        >
          <button className="btn btn-link">
            <FaAngleRight />
          </button>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{profile?.profileId}</div>
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
      ))}
    </ul>
  );
};
