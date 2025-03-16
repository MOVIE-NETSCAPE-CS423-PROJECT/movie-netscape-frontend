import { Route, Routes } from "react-router";
import { IndexPage } from "./IndexPage";

export const AdminApp = () => {
  return (
    <Routes>
      <Route path={"/dashboard"} element={<IndexPage />} />
    </Routes>
  );
};
