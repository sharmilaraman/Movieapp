import React, { useEffect, useState } from 'react';
import '../components/User.css';
import axios from 'axios';
import Navbar from '../Navbar';

const User = () => {
  const [records, setRecords] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null); // for View More

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRecords(response.data);
      } catch (error) {
        console.error('Error Fetching Data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleViewMore = (id) => {
    setExpandedUserId(prevId => (prevId === id ? null : id));
  };

  return (
       <div className='container'>
            {/* <Navbar /> */}
      <h1>User Data</h1>
      <div className='user-table-wrapper' style={{ overflow: 'auto' }}>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <React.Fragment key={record.id}>
                <tr key={record.id}> 
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.username}</td>
                  <td>{record.email}</td>
                  <td>{record.address.city}</td>
                  <td>
                    <button onClick={() => toggleViewMore(record.id)}>
                      {expandedUserId === record.id ? 'Hide' : 'View More'}
                    </button>
                  </td>
                </tr>
                {expandedUserId === record.id && (
                  <tr>
                    <td colSpan="6">
                      <div>
                        <strong>Phone:</strong> {record.phone} <br />
                        <strong>Website:</strong> {record.website} <br />
                        <strong>Company:</strong> {record.company.name} <br />
                        <strong>Full Address:</strong> {record.address.street}, {record.address.suite}, {record.address.city}, {record.address.zipcode}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

