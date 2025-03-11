import { useEffect } from "react";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  return <Navigate to="/login" />;
};
