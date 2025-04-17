import React, { useEffect, useState } from 'react';
import '../components/User.css';
import axios from 'axios';

const User = () => {
     const [records, setRecords] = useState([]);
     const [name,setName]=useState('');
     const [email,setEmail]=useState('');
     const [address, setAddress] = useState('');
     const [street, setStreet] = useState('');
     const [suite, setSuite] = useState('');
     const [phone, setPhone] = useState('');
     const [website, setWebsite] = useState('');
     const [zipcode, setZipcode] = useState('');

  const [expandedUserId, setExpandedUserId] = useState(null); 
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
  async function addUserData() {
     const userName = name.trim();
     const userEmail = email.trim();
     const userAddress = address.trim();
     const userStreet = street.trim();
     const userSuite = suite.trim();
     const userPhone = phone.trim();
     const userWebsite = website.trim();
     const userZipcode = zipcode.trim();
   
     if (userName && userEmail && userAddress) {
       try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json; charset=UTF-8",
           },
           body: JSON.stringify({
             name: userName,
             email: userEmail,
             address: {
                  city: userAddress,
                  street: userStreet,
                  suite: userSuite,
                  zipcode:userZipcode,
                },
             phone:userPhone,
             website:userWebsite,
           }),
         });
   
         const newUser = await response.json();
   
         const mockUser = {
           id: records.length + 1, 
           name: newUser.name,
           email: newUser.email,
           address: {
             street:newUser.address.street,
             suite: newUser.address.suite,
             city: newUser.address.city,
             zipcode:newUser.address.zipcode,
           },
           phone:newUser.phone,
           website: newUser.website,
         };
   
         setRecords([...records, mockUser]);
   
         setName('');
         setEmail('');
         setAddress('');
         setStreet('');
         setSuite('');   
         setPhone('');
         setWebsite('');
         setZipcode('');
   
       } catch (error) {
         console.error("Error adding user:", error);
       }
     }
   }
     const toggleViewMore = (id) => {
      setExpandedUserId(prevId => (prevId === id ? null : id));
     };

  return (
       <div className='container'>
          <h1>User Data</h1>
        <div className="add-input-container">
        <label>Enter User Name:</label>
        <input type='text' placeholder='Enter User Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        
        <label>Enter User Email:</label>
        <input type='email' placeholder='Enter User Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        
        <label>Enter User Address:</label>
        <input type='text' placeholder='Enter User Address' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
        
        <label>Enter User Street:</label>
        <input type='text' placeholder='Enter User Street' value={street} onChange={(e)=>setStreet(e.target.value)}></input>  
            
        <label>Enter User Suite:</label>
        <input type='text' placeholder='Enter User Suite' value={suite} onChange={(e)=>setSuite(e.target.value)}></input>     
     
        <label>Enter User Zipcode</label>
        <input type='text' placeholder='Enter User Zipcode' value={zipcode} onChange={(e)=>setZipcode(e.target.value)}></input>     
                  
        <label>Enter User Phonenumber:</label>
        <input type='text' placeholder='Enter User Phonenumber' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>     
               
        <label>Enter User Website:</label>
        <input type='text' placeholder='Enter User Website' value={website} onChange={(e)=>setWebsite(e.target.value)}></input>     
      </div>
          <button className='adduser-btn' onClick={addUserData}>Add New User</button>

      <div className='user-table-wrapper' style={{ overflow: 'auto' }}>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
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
                  <td>{record.email}</td>
                  <td>{record.address.city}</td>
                  <td>
                    <button  className="viewmore-btn" onClick={() => toggleViewMore(record.id)}>
                      {expandedUserId === record.id ? 'Hide' : 'View More'}
                    </button>
                    <button className='delete-btn'>Delete</button>
                  </td>
                </tr>
                {expandedUserId === record.id && (
                  <tr>
                    <td colSpan="6">
                      <div>
                        <strong>Phone:</strong> {record.phone} <br />
                        <strong>Website:</strong> {record.website} <br />
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

