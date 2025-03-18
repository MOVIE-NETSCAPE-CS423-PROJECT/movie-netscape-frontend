import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config";
import axiosInstance from "../../utils/refreshToken/axiosInstance";

export const AllAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const getAllAccounts = async () => {
    try {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/api/v1/accounts`,
        {
          headers: {
            "ngrok-skip-browser-warning": "69420", // Add the custom header for this request
          },
        }
      );
      setAccounts(response.data.accounts);
      console.log(response.data.accounts);
    } catch (error) {
      console.log("Unable to get accounts: ", error);
    }
  };

  useEffect(() => {
    getAllAccounts();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 border-bottom py-2">
        <h2>All Accounts</h2>
      </div>
      <div className="col-lg-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Account Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Current Plan</th>
              <th scope="col">Subscription</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <th scope="row">*</th>
                <td>{account.accountId}</td>
                <td>{account.firstName}</td>
                <td>{account.lastName}</td>
                <td>{account.currentAccountPlanName}</td>
                <td>{account.hasActiveSubscription ? "Yes" : "No"}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
