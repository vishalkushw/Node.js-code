
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Admin.css";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [taskId, setTaskid] = useState("");
  const isAdmin = useSelector((state) => state.isAdmin);
  const navigate = useNavigate();

  const toggleClass = () => setIsActive(!isActive);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/getuser");
      setUser(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/deleteuser/${id}`);
      toast.success("User deleted successfully");
      toggleClass();
      getUser();
    } catch (err) {
      toast.error("Failed to delete user");
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAdmin) getUser();
    else navigate("/");
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return (
    <div className="alltaskdiv">
      {user.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={user._id}>
                <td data-column="S.No">{index + 1}</td>
                <td data-column="Name">{user.name}</td>
                <td data-column="Title">{user.title}</td>
                <td data-column="Email">{user.email}</td>
                <td data-column="Action" style={{ cursor: "pointer" }}>
                  <MdDeleteForever
                    style={{ color: "darkred", fontSize: "25px" }}
                    onClick={() => {
                      setTaskid(user._id);
                      toggleClass();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isActive && (
        <div
          className="confirmation-box"
          role="dialog"
          aria-labelledby="confirm-title"
          aria-describedby="confirm-desc"
        >
          <h2 id="confirm-title">Confirm Deletion</h2>
          <p id="confirm-desc">Are you sure you want to delete this user?</p>
          <div className="confirmation-box-buttons">
            <button className="yes" onClick={() => deleteUser(taskId)}>
              Yes
            </button>
            <button className="no" onClick={toggleClass}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;