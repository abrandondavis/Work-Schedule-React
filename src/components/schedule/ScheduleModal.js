import React from "react";
import Modal from 'react-bootstrap/Modal';
import ScheduleForm from "./ScheduleForm";
import EmployeeService from "../../services/EmployeeService";

export default function ScheduleModal({ isOpen, onClose, mode, initialEmployee, onCreate, onUpdate }) {
  const handleClose = () => {
    onClose();
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (mode === 'create') {
        // Call the service method to create a new employee
        console.log('handle submit inside schedulemodal.js');

        // Pass the created employee to the callback function
        onCreate(formData);

      } else if (mode === 'update') {
        // Call the service method to update the employee
        const updatedEmployee = await EmployeeService.updateEmployee(initialEmployee.id, formData);

        // Pass the updated employee to the callback function
        onUpdate(updatedEmployee);
      }

      // Close the modal
      handleClose();
    } catch (error) {
      // Handle errors here (e.g., show an error message to the user)
      console.error('Error:', error);

      // Optionally, you can handle specific errors or show an error message to the user
      // For example, if you want to display an error message to the user, you can use state to store the error message and render it in the component.
      // Example: setErrorState(error.message);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header>
        {mode === 'create' ? 'Add Employee' : 'Update Employee'}
      </Modal.Header>
      <Modal.Body>
        <ScheduleForm
          initialEmployee={initialEmployee}
          onSubmit={handleFormSubmit} />
      </Modal.Body>
    </Modal>
  );
}