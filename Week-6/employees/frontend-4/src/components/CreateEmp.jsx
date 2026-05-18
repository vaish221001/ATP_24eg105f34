import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateEmp() {

  const { register, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async(newEmpObj) => {
    console.log("Form Data Submitted:", newEmpObj);
    try{
      setLoading(true);
      //make http Post req
      let res = await fetch("http://localhost:4000/employee-api",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newEmpObj)
      })
      if(res.ok) {
        alert("Employee Created Successfully!");
        reset();
        navigate("/list-of-employees");
      } else {
        alert("Failed to create employee.");
      }
    } catch(err) {
      console.error("Error creating employee:", err);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="form-container">
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input {...register("name")} className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input {...register("email")} className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input {...register("mobile")} className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Designation</label>
          <input {...register("designation")} className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Company Name</label>
          <input {...register("companyName")} className="form-input" />
        </div>

        <button type="submit" className="form-button">Add Employee</button>
      </form>
    </div>
  )
}

export default CreateEmp;
