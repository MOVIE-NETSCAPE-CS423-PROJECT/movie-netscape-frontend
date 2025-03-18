import { BrowserRouter, Routes, Route } from "react-router";

import { Header } from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Rented from "./pages/Rented";
import { Footer } from "./components/Footer";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { Plans } from "./pages/Plans";
import { SingleMovie } from "./pages/SingleMovie";
import { NotFound } from "./pages/NotFound";
import { AlertComponent } from "./components/AlertComponent";
import { Protected } from "./components/Protected";
import { Logout } from "./pages/auth/Logout";
import { Checkout } from "./pages/Checkout";
import { useSelector } from "react-redux";
import { UserProfile } from "./pages/profile/UserProfile";
import { VerifyAccount } from "./pages/auth/VerifyAccount";
import { IndexPage } from "./pages/admin/IndexPage";
import { MovieIndex } from "./pages/admin/MovieIndex";
import { PlanIndex } from "./pages/admin/PlanIndex";
import { RatingIndex } from "./pages/admin/RatingIndex";
import { ChangePassword } from "./pages/auth/ChangePassword";
import { AllAccounts } from "./pages/admin/AllAccounts";

function App() {
  const { error } = useSelector((state) => state.auth);
  // console.log(Date.now());
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        {error && <AlertComponent message={error} type={"danger"} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Protected />}>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/rented" element={<Rented />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profiles" element={<UserProfile />} />
          </Route>

          <Route element={<IndexPage />}>
            <Route path={"/movies"} element={<MovieIndex />} />
            <Route path={"/plans"} element={<PlanIndex />} />
            <Route path={"/rating"} element={<RatingIndex />} />
            <Route path={"/all-accounts"} element={<AllAccounts />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/subscription" element={<Plans />} />
          <Route path={`/movie/:id`} element={<SingleMovie />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/verify" element={<VerifyAccount />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
