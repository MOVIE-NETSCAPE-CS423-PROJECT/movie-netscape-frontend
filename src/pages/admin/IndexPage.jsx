import { NavLink, Outlet } from "react-router";

export const IndexPage = () => {
  return (
    <div className="mt-4 d-flex authorization-page">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-group">
                  <li className="list-group-item py-3">
                    <NavLink className="nav-link" to={"/movies"}>
                      Manage Movies
                    </NavLink>
                  </li>
                  <li className="list-group-item py-3">
                    <NavLink className="nav-link" to={"/plans"}>
                      Manage Plans
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};
