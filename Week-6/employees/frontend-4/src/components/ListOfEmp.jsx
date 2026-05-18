import React, { useState, useEffect } from 'react';

function ListOfEmp() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const getEmployees = async () => {
    try {
      let res = await fetch("http://localhost:4000/employee-api");
      let data = await res.json();
      if (res.ok) {
        setEmps(data.payload);
      } else {
        setErr(data.message || "Failed to fetch employees.");
      }
    } catch (error) {
      setErr("Error fetching employees.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8 font-bold text-indigo-700">List Of Employees</h1>

      {loading && <p className="text-center">Loading...</p>}
      {err && <p className="text-center text-red-500">{err}</p>}

      {!loading && !err && emps.length === 0 && (
        <p className="text-center">No employees found.</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{empObj.name}</h3>
            <p className="text-gray-600 mt-2"><span className="font-medium">Email:</span> {empObj.email}</p>
            <p className="text-gray-600 mt-1"><span className="font-medium">Designation:</span> {empObj.designation}</p>
            <p className="text-gray-600 mt-1"><span className="font-medium">Company:</span> {empObj.companyName}</p>
            <p className="text-gray-600 mt-1"><span className="font-medium">Phone:</span> {empObj.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmp;
