import React, { useState } from 'react';
import './RetrieveData.css';

function RetrieveData() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState({});

  const handleData = () => {
    const data = JSON.parse(localStorage.getItem(search));
    console.log(data);
    setUser(data);
  };

  return (
    <div className="retrieve-data-container">
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter your Aadhar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={handleData}>
          Find
        </button>
      </div>
      {user ? (
        <div className="user-data-container">
          {Object.keys(user).map((key) => (
            <li key={key}>
              {key} : {user[key]}
            </li>
          ))}
        </div>
      ) : (
        <h1>No Data Found</h1>
      )}
    </div>
  );
}

export default RetrieveData;
