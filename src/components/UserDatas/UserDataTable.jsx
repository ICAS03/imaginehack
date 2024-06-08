import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "../UserDatas/UserDataTable.css";
import { useNavigate } from "react-router";

const UserDataTable = ({ userData }) => {
  const navigate = useNavigate();
  const handleReviewClick = (user) => {
    navigate("/Profile", { state: { user } });
  };
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th className="table-head-cell">Name</th>
            <th className="table-head-cell">Contact</th>
            <th className="table-head-cell">Email</th>
            <th className="table-head-cell">Grading</th>
            <th className="table-head-cell">Position 1</th>
            <th className="table-head-cell">Position 2</th>
            <th className="table-head-cell">Summary</th>
            <th className="table-head-cell">View More</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr key={user.ID} className="table-row">
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.contact}</td>
              <td className="table-cell">{user.email}</td>
              <td
                className={`table-cell grading ${user.grading
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                {user.grading}
              </td>
              <td className="table-cell">{user.position1}</td>
              <td className="table-cell">{user.position2}</td>
              <td className="table-cell">{user.summary}</td>
              <td className="table-cell">
                <button
                  className="view-more-button"
                  onClick={() => handleReviewClick(user)}
                >
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
