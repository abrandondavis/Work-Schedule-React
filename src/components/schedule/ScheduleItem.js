import React from "react";

export default function ScheduleItem({ employee, onEditClick, onDeleteClick }) {

  const handleEditClick = () => {
    onEditClick(employee);
  };

  const handleDeleteClick = () => {
    onDeleteClick(employee);
  }

  return (
    <tr>
      <th scope="row">{employee.name}</th>
      <td>{employee.sunday}</td>
      <td>{employee.monday}</td>
      <td>{employee.tuesday}</td>
      <td>{employee.wednesday}</td>
      <td>{employee.thursday}</td>
      <td>{employee.friday}</td>
      <td>{employee.saturday}</td>
      <td>
        <button className="btn btn-secondary" onClick={handleEditClick}>Edit</button>
        <span> <strong>|</strong> </span>
        <button className="btn btn-secondary" onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  )
}