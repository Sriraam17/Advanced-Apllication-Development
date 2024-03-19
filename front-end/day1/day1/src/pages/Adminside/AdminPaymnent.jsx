// import React from 'react';
import '../../assets/css/Admin/adminstatus.css'; // Import your CSS file
import AdminSideBar from './AdminSideBar';

const data = [
  { status: "paid", totalpayment: 10000, paymentdate: "Nov 29,2023" ,modeofpayment:"creditCard"},
  { status: "paid", totalpayment: 5000, paymentdate: "Dec 29,2023" ,modeofpayment:"other"},
  { status: "paid", totalpayment: 1000, paymentdate: "May 27,2023" ,modeofpayment:"creditCard"},
];

const AdminPayment = () => {
  return (
    <div>
        <AdminSideBar/>
        <h1 className='admi-text'>PAYMENT</h1>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>STATUS</th>
            <th>TOTAL AMOUNT</th>
            <th>PAYMENT DATE</th>
            <th>MODE OF PAYMENT</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.status}>
              <td>{item.status}</td>
              <td>{item.totalpayment}</td>
              <td>{item.paymentdate}</td>
              <td>{item.modeofpayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminPayment;