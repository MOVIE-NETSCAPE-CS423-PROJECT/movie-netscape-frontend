import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux/features/profileSlice";
import { useEffect } from "react";
import { ModalComponent } from "../../components/ModalComponent";
import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import axiosInstance from "../../utils/axiosInstance";

export const UserProfile = () => {
  const { profiles } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const RenderAddProfile = () => {
    const initialValues = {
      profileName: "",
      profileDescription: "",
      profileImageUrl: "",
      profileType: "KIDS",
      hasParentalControl: false,
      isPrimaryProfile: false,
    };

    const handleSubmitProfileAdding = async (values) => {
      const response = await axiosInstance.post(
        `/api/v1/accounts/${profiles.accountId}/profiles`,
        { values }
      );
      console.log("Result: ", response);
    };

    return (
      <ModalComponent title={"Add Profile"}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmitProfileAdding(values)}
        >
          {() => (
            <Form>
              <FormControl
                name="profileName"
                control="input"
                placeholder="Profile Name"
                type="text"
              />
              <FormControl
                name="profileImageUrl"
                control="input"
                placeholder="Profile Picture Url"
                type="text"
              />
              <FormControl
                name="profileDescription"
                control="input"
                placeholder="Profile Description"
                type="text"
                as="textarea"
              />
              <DefaultButton type={"submit"} label={"Add Profile"} />
            </Form>
          )}
        </Formik>
      </ModalComponent>
    );
  };

  return (
    <div className="mt-4 d-flex authorization-page">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center text-center py-2 rounded"
            // style={{ background: "gray" }}
          >
            <div className="d-flex flex-column ">
              <img
                className="py-2 mb-3 rounded-circle"
                width="300px"
                src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
              />
              <span className="font-weight-bold">{`${profiles?.firstName} ${profiles?.lastName}`}</span>
              <span className="text-black-50">{profiles?.accountId}</span>
              <span className="text-black-50">
                {profiles?.currentAccountPlanName}
              </span>
            </div>
          </div>

          <div className="col-md-12 mt-5">
            <div className="row">
              {/* <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <h4 className="">Account Details</h4>
                </div>
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
              </div> */}

              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Profiles</h4>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add
                  </button>
                </div>
                <div className="list-group rounded-0  my-3">
                  {profiles?.profiles.map((profile) => (
                    <button
                      key={profile.id}
                      type="button"
                      className="d-flex list-group-item list-group-item-action justify-content-between align-items-center"
                    >
                      <span>{profile.profileName}</span>
                      <span className="badge badge-default badge-pill text-dark">
                        14
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderAddProfile />
    </div>
  );
};
