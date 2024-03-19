import  { useState } from 'react';
import '../assets/css/Applyjob.css';

const Edituser = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  return (
    <div className="registration-form-container">
      <h2>CREATE JOB</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name='Jobtitle'
            value={formData.Jobtitle}
            placeholder='Job Tile'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name='Department'
            value={formData.Department}
            placeholder='Department'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name='Location'
            value={formData.Location}
            placeholder='Loction'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="Responsibility"
            placeholder="Responsibility"
            value={formData.Responsibility}
            onChange={handleChange}
            required
          />
            </div>
        <div className="form-group">
          <textarea
            type="text"
            name="Qualification"
            placeholder="Qualification"
            value={formData.Qualification}
            onChange={handleChange}
            required
            />
            </div>
        <div className="form-group">
          <input
            type="date"
            name="Deadline"
            placeholder="Deadline"
            value={formData.Deadline}
            onChange={handleChange}
            required
            />
            </div>
        <div className="form-group">
          <textarea
            type="text"
            name="ApplicationFee"
            placeholder="Responsibility"
            value={formData.ApplicationFee}
            onChange={handleChange}
            required
          />
            </div>
        <div className="form-group">
        <select name="Category"
                placeholder="Category"
                value={formData.Category}  
                onChange={handleChange}
                required
        >
    <option value="Free">Free</option>
    <option value="Premium">Premium</option>
  </select>
            </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edituser;