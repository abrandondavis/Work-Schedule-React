import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import ScheduleItem from "./ScheduleItem";
import ScheduleModal from "./ScheduleModal";

export default function ScheduleList() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal and clear reset fields
  const closeAndClearModal = () => {
    setIsModalOpen(false);
    setEditEmployee(null);
  };

  // Function to open modal in edit mode
  const onOpenModal = (employee) => {
    setEditEmployee(employee);
    setIsModalOpen(true);
  };

  // Function to handle updating employees
  const handleUpdate = async (formData) => {
    try {
      console.log('Updating employee with ID:', editEmployee.id);
      console.log('Updated data:', formData);
      const updatedEmployee = await EmployeeService.updateEmployee(editEmployee.id, formData);

      console.log('Updated employee:', updatedEmployee);

      setEmployees((prevEmployees) =>
        prevEmployees.map((p) => (p.id === updatedEmployee.id ? updatedEmployee : p)));

      closeAndClearModal();
    } catch (error) {
      console.error('Error updating employee: ', error);
    }
  };

  // Function to handle creating new employees
  const handleCreate = async (formData) => {
    try {
      const createdEmployee = await EmployeeService.createEmployee(formData);
      setEmployees((prevEmployees) => [...prevEmployees, createdEmployee]);
      closeAndClearModal();
    } catch (error) {
      console.error('Error adding employee: ', error);
    }
  };

  // Function to handle deleting employees
  const onDeleteClick = async (employee) => {
    try {
      await EmployeeService.deleteEmployee(employee.id);
      setEmployees((prevEmployees) => prevEmployees.filter((p) => p.id !== employee.id));
    } catch (error) {
      console.error('Error deleting employee: ', error);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await EmployeeService.getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees: ', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div id="employee-list" className="container mt-5 mb-5">
      <button className="btn btn-secondary mb-3" onClick={openModal}>
        Add Employee
      </button>
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">Sunday</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <ScheduleItem
              key={employee.id}
              employee={employee}
              onEditClick={() => onOpenModal(employee)}
              onDeleteClick={() => onDeleteClick(employee)}
            />
          ))}
        </tbody>
      </table>
      <ScheduleModal
        isOpen={isModalOpen}
        onClose={closeAndClearModal}
        mode={editEmployee ? 'update' : 'create'}
        initialEmployee={editEmployee || null}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
