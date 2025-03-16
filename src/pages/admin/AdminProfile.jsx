import { Outlet, Route, Routes } from "react-router";

export const AdminProfile = () => {
  return (
    <div className="mt-4 d-flex authorization-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <h2>Admin Panel</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="col-lg-12">
              <div className="col-lg-12">
                <div className="list-group rounded-0  my-3">
                  {/* <Routes>
                    <Route path="/mange-plans" element={{}} />
                  </Routes> */}
                  <button
                    type="button"
                    className="d-flex list-group-item list-group-item-action justify-content-between align-items-center"
                  >
                    <span>Manage Plans</span>
                  </button>
                  <button
                    type="button"
                    className="d-flex list-group-item list-group-item-action justify-content-between align-items-center"
                  >
                    <span>Manage Movies</span>
                  </button>
                  <button
                    type="button"
                    className="d-flex list-group-item list-group-item-action justify-content-between align-items-center"
                  >
                    <span>Age Ratings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">{Outlet}</div>
        </div>
      </div>
    </div>
  );
};
