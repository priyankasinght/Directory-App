import React, { useState } from "react";
import "./AddData.css";

function AddData() {
  const [rows, setRows] = useState([
    {
      userName: "",
      dob: "",
      uid: "",
      mobile: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const row = rows[index];
    if (row.uid.length !== 12) {
      alert("Aadhar number must be 12 digits.");
      return;
    }
    localStorage.setItem(row.uid, JSON.stringify(row));
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
    const row = rows[index];
    const uid = row.uid;
    const updatedRows = rows.filter((row) => row.uid !== uid);
    setRows(updatedRows);
    localStorage.removeItem(row.uid);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        userName: "",
        dob: "",
        uid: "",
        mobile: "",
      },
    ]);
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div>
      <div className="add-button-container">
        <table className="table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar No.</th>
              <th>Mobile No.</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="userName"
                    value={row.userName}
                    onChange={(e) => {
                      handleInputChange(e, index);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="dob"
                    value={row.dob}
                    onChange={(e) => {
                      handleInputChange(e, index);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="uid"
                    value={row.uid}
                    onChange={(e) => {
                      handleInputChange(e, index);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="mobile"
                    value={row.mobile}
                    onChange={(e) => {
                      handleInputChange(e, index);
                    }}
                  />
                </td>
                <td>{calculateAge(row.dob)}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="blue-background-white-text"
                      onClick={(e) => handleSubmit(e, index)}
                    >
                      Submit
                    </button>
                    <button
                      className="blue-background-white-text"
                      onClick={(e) => handleDelete(e, index)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-button" onClick={handleAddRow}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddData;
