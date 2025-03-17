import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";

export const MovieIndex = () => {
  const initialValues = {
    title: "",
    genre: "",
    isPremium: false,
    storyHint: "",
    streamUrl: "",
    imageUrl: "",
    thumbnail: "",
    rating: 0,
    isAdultMovie: false,
    releaseDate: "",
    duration: 50,
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="row">
      <div className="col-lg-12 border-bottom">
        <h2>Add Movie</h2>
      </div>

      <div className="col-lg-12">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form>
              <div className="row mt-4">
                <div className="col-md-6">
                  <FormControl
                    name="title"
                    control="input"
                    placeholder="Movie Title"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <FormControl
                    name="genre"
                    control="input"
                    placeholder="Movie Genre"
                    type="text"
                  />
                </div>

                <div className="col-md-6">
                  <FormControl
                    name="isPremium"
                    control="input"
                    placeholder="Is Premium"
                    type="text"
                  />
                </div>

                <div className="col-md-6">
                  <FormControl
                    name="duration"
                    control="input"
                    placeholder="Duration"
                    type="text"
                  />
                </div>

                <div className="col-md-12">
                  <FormControl
                    name="streamUrl"
                    control="input"
                    placeholder="Stream Url"
                    type="text"
                  />
                </div>

                <div className="col-md-12">
                  <FormControl
                    name="imageUrl"
                    control="input"
                    placeholder="Movie Thumbnail Url"
                    type="text"
                  />
                </div>

                <div className="col-md-4">
                  <FormControl
                    name="rating"
                    control="input"
                    placeholder="Movie Rating"
                    type="number"
                  />
                </div>

                <div className="col-md-4">
                  <FormControl
                    name="isAdultMovie"
                    control="input"
                    placeholder="Is Adult Movie"
                    type="text"
                  />
                </div>

                <div className="col-md-4">
                  <FormControl
                    name="releaseDate"
                    control="input"
                    placeholder="Release Date"
                    type="text"
                  />
                </div>
                <div className="col-md-12">
                  <FormControl
                    name="storyHint"
                    control="input"
                    placeholder="Story Hint"
                    type="text"
                    as={"textarea"}
                  />
                </div>

                <DefaultButton label={"Add Movie"} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
