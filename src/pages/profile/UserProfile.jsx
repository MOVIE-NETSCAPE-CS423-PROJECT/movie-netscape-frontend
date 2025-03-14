import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux/features/profileSlice";
import { useEffect } from "react";

export const UserProfile = () => {
  const { profiles } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  console.log(profiles);

  return (
    <div className="mt-4 d-flex authorization-page">
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column ">
              <img
                className=" mt-5 mb-3"
                width="150px"
                src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
              />
              <span className="font-weight-bold">{"Firstname Lastname"}</span>
              <span className="text-black-50">{profiles?.userId}</span>
              <span className="text-black-50">
                Current Profile: {profiles?.currentAccountPlanName}
              </span>
              <span className="text-black-50">
                Status: {profiles?.accountStatus}
              </span>
            </div>
          </div>

          <div className="col-md-9">
            <div className="py-0">
              <div className="d-flex justify-content-between align-items-center mb-0">
                <h4 className="">Account Details</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      value=""
                      disabled
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Last name"
                      disabled
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="labels">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="dwabuluka@gmail.com"
                      value=""
                      disabled
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="labels">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+1 (555) 000-0000"
                      value=""
                      disabled
                    />
                  </div>
                </div>
              </div>

              {/* <div className="col-md-4">
                <div className="d-flex justify-content-between align-content-center">
                  <h4 className="h4">Profiles</h4>
                  <button className="btn mb-4">
                    <FaPlusCircle size={25} />
                  </button>
                </div>
                <ListComponent
                  profiles={profiles?.profiles}
                  key={profiles?.profiles?.profileId}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
