"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser } from "../actions/Action";
import { editThisUser } from "../actions/Action";

const UsersList = () => {
  const dispatch = useDispatch();
  const dataUsers = useSelector((state) => state.students.studentData);

  console.log("USERS List ", dataUsers);

  function handleDelete(id) {
    console.log("USER ID =", id);
    debugger;
    dispatch(deleteUser(id, dataUsers));
  }

  function handleUpdateClick(id) {
    console.log("UPDATE ID =", id);
    const editUser = dataUsers.filter((student) => student.id === id);
    dispatch(editThisUser(editUser));
  }

  return (
    <>
      <div className="container">
        <h2>Users List</h2>
        <table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col"> Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(dataUsers).map((x, index) => {
              return (
                <>
                  <tr className="table-light">
                    <th scope="row">{x.id}</th>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.company}</td>
                    <td>{x.role}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info"
                        style={{ marginRight: "5px" }}
                        onClick={() => handleUpdateClick(x.id)}
                      >
                        {/* onClick={() => navigate(`/useredit?id=${x.id}`)} */}
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={(e) => handleDelete(x.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
            {}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersList;
