import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux/features/profileSlice";
import { useEffect } from "react";
import { ModalComponent } from "../../components/ModalComponent";
import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import axiosInstance from "../../utils/axiosInstance";

export const UserProfile = () => {
  const { profiles, loading } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, []);

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
            style={{ minHeight: "450px" }}
          >
            {!loading && (
              <div className="d-flex flex-column ">
                <img
                  className="py-2 mb-3 rounded-circle"
                  width="300px"
                  src="https://github.com/mdo.png"
                />
                <span className="h3 text-uppercase">{`${profiles?.firstName} ${profiles?.lastName}`}</span>
                <span className="text-black-50">{profiles?.accountId}</span>
                <span className="text-black-50">
                  {`${profiles?.currentAccountPlanName} - ${
                    profiles?.hasActiveSubscription
                      ? "Subscribed"
                      : "Not Subscribed"
                  }`}
                </span>
              </div>
            )}
          </div>

          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Account Information
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <Formik initialValues={{}}>
                            {() => (
                              <Form>
                                <div className="row">
                                  <h6 className="h6">Bio</h6>
                                  <div className="col-lg-12 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="Profile Image Url"
                                      type="text"
                                    />
                                  </div>
                                  <div className="col-lg-6 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="First Name"
                                      type="text"
                                    />
                                  </div>
                                  <div className="col-lg-6 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="Last Name"
                                      type="text"
                                    />
                                  </div>
                                  <h6 className="h6">Address</h6>
                                  <div className="col-lg-12 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="Street"
                                      type="text"
                                    />
                                  </div>
                                  <div className="col-lg-4 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="City"
                                      type="text"
                                    />
                                  </div>
                                  <div className="col-lg-5 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="State"
                                      type="text"
                                    />
                                  </div>
                                  <div className="col-lg-3 col-md-6 vol-sm-12">
                                    <FormControl
                                      name="profileName"
                                      control="input"
                                      placeholder="Zip"
                                      type="text"
                                    />
                                  </div>

                                  <div className="col-lg-6">
                                    <DefaultButton
                                      type="submit"
                                      label="Update Information"
                                    />
                                  </div>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Profile Manager
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            Add
                          </button>
                          <div className="list-group my-3">
                            {profiles?.profiles.map((profile) => (
                              <button
                                key={profile.id}
                                type="button"
                                className="d-flex list-group-item list-group-item-action justify-content-between align-items-center "
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
              </div>
            </div>

            <div className="row">
              {/* <div className="col-md-6">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <RenderAddProfile />
    </div>
  );
};
