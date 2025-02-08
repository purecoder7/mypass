import React, { useState } from "react";

function PasswordManager() {
  const [PassData, setPassData] = useState({ website: "", username: "", pass: "" });
  const [Passwords, setPasswords] = useState(() => {
    return JSON.parse(localStorage.getItem("passwords")) || []; // Load saved passwords from localStorage
  });

  // Function to save a new password
  const savePass = () => {
    if (!PassData.website || !PassData.username || !PassData.pass) {
      alert("Please fill in all fields!");
      return;
    }

    setPasswords((prevPasswords) => {
      const updatedPasswords = [...prevPasswords, PassData];

      // Save updated passwords to localStorage
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

      return updatedPasswords;
    });

    // Clear input fields after saving
    setPassData({ website: "", username: "", pass: "" });
  };

  // Handle input changes
  let handleChange = (e) => {
    setPassData({ ...PassData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Save Password</h2>

            <div className="mb-3">
              <label htmlFor="website" className="form-label">Website</label>
              <input 
                onChange={handleChange} 
                value={PassData.website} 
                type="text" 
                name="website" 
                className="form-control" 
                placeholder="Enter website" 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">User Name</label>
              <input 
                onChange={handleChange} 
                value={PassData.username} 
                type="text" 
                name="username" 
                className="form-control" 
                placeholder="Enter username" 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input 
                onChange={handleChange} 
                value={PassData.pass} 
                type="password" 
                name="pass" 
                className="form-control" 
                placeholder="Enter password" 
                required 
              />
            </div>

            <button onClick={savePass} type="submit" className="btn btn-primary w-100">
              Save Password
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordManager;
