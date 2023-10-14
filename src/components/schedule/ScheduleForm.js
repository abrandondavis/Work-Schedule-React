import React, { useState } from "react";

export default function ScheduleForm({ initialEmployee, onSubmit }) {
  // Define state variables to hold the form data
  const [formData, setFormData] = useState({
    name: initialEmployee ? initialEmployee.name : "",
    sunday: initialEmployee ? initialEmployee.sunday : "",
    monday: initialEmployee ? initialEmployee.monday : "",
    tuesday: initialEmployee ? initialEmployee.tuesday : "",
    wednesday: initialEmployee ? initialEmployee.wednesday : "",
    thursday: initialEmployee ? initialEmployee.thursday : "",
    friday: initialEmployee ? initialEmployee.friday : "",
    saturday: initialEmployee ? initialEmployee.saturday : "",
  });

  // Define a function to handle form field changes
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit button clicked');
    // Here, you can submit formData to update the employee data
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="sunday">
          Sunday
        </label>
        <input
          type="text"
          className="form-control"
          id="sunday"
          name="sunday"
          value={formData.sunday}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="monday">
          Monday
        </label>
        <input
          type="text"
          className="form-control"
          id="monday"
          name="monday"
          value={formData.monday}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="tuesday">
          Tuesday
        </label>
        <input
          type="text"
          className="form-control"
          id="tuesday"
          name="tuesday"
          value={formData.tuesday}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="wednesday">
          Wednesday
        </label>
        <input
          type="text"
          className="form-control"
          id="wednesday"
          name="wednesday"
          value={formData.wednesday}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="thursday">
          Thursday
        </label>
        <input
          type="text"
          className="form-control"
          id="thursday"
          name="thursday"
          value={formData.thursday}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="friday">
          Friday
        </label>
        <input
          type="text"
          className="form-control"
          id="friday"
          name="friday"
          value={formData.friday}
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="saturday">
          Saturday
        </label>
        <input
          type="text"
          className="form-control"
          id="saturday"
          name="saturday"
          value={formData.saturday}
          onChange={handleFormChange}
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </form>
  );
}
