// import React from 'react';
import '../../assets/css/Admin/adminstatus.css'; // Import your CSS file
import AdminSideBar from './AdminSideBar';
// import Navbar from './NavBar';

const data = [
  { id: 1, name: 'John', contact: 9487458974 ,email:"abc@gmail.com",jobtitle:"Manager"},
  { id: 2, name: 'Jane', contact: 6382029792 ,email:"abc@gmail.com",jobtitle:"software engineer"},
  { id: 3, name: 'Doe', contact: 9443333972 ,email:"abc@gmail.com",jobtitle:"HR"},
];

const AdminAppStatus = () => {
  return (
    <div>
        <AdminSideBar/>
        <h1 className='admi-text'>APPLICATION</h1>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>{item.jobtitle}</td>
              <td>
              <select name="Category"
                placeholder="Category"
                // value={formData.Category}  
                // onChange={handleChange}
                required
                >
    <option value="Pending">Pending</option>
    <option value="Shortlisted">Shortlisted</option>
    <option value="Rejected">Rejected</option>
  </select>
              </td>
              <td>
                <button className='btn'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
  );
};

export default AdminAppStatus;