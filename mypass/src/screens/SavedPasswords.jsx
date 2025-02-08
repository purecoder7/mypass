import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Table } from "react-bootstrap";
import { Trash, Clipboard } from "react-bootstrap-icons";

function SavedPasswords() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("passwords");
    if (storedData) setData(JSON.parse(storedData));
  }, []);

  const deletePassword = (index) => {
    const newData = data.filter((_, findex) => findex !== index);
    setData(newData);
    localStorage.setItem("passwords", JSON.stringify(newData));
  };

  const copyPassword = (password) => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        {data.length > 0 ? (
          <div className="card shadow-lg mx-auto p-4" style={{ maxWidth: "800px" }}>
            <h2 className="text-center mb-4">Saved Passwords</h2>
            <Table striped bordered hover responsive>
              <thead className="table-dark">
                <tr>
                  <th>Website</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => (
                  <tr key={index}>
                    <td>{d.website}</td>
                    <td>{d.username}</td>
                    <td>{d.pass}</td>
                    <td className="text-center">
                      <Button variant="secondary" className="me-2" onClick={() => copyPassword(d.pass)}>
                        <Clipboard className="me-2" /> Copy
                      </Button>
                      <Button variant="danger" onClick={() => deletePassword(index)}>
                        <Trash className="me-2" /> Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-5">
            <h2>No Passwords Saved</h2>
            <p>Please save some passwords to view them here.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SavedPasswords;