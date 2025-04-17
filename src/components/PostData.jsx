import React, { useEffect, useState } from 'react'
import '../components/PostData.css'
import axios from 'axios';
import Navbar from '../Navbar';


const PostData = () => {
     const [records,setRecords]=useState([]);
     useEffect(()=>{
          const fetchData = async()=>{
                try{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                    setRecords(response.data);
                    console.log(response);
                } 
                catch(error){
                    console.error('Error Fetching Data:',error);
                }
          };
          fetchData();
     },[]);
     return (
      <div className='post-container'>
    <h1>Post Data</h1>
    <div style={{ overflowX: 'auto' }}>

    <table className="table-container" border={1} cellPadding={10} cellSpacing={0}>
          <thead>
               <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Title</th>
               </tr>
          </thead>
          <tbody>
               {records.map((record)=>
               <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.userId}</td>
                    <td>{record.title}</td>

               </tr>
               )}
          </tbody>
    </table>
    </div>
               </div>
               
  )
}

export default PostData;
