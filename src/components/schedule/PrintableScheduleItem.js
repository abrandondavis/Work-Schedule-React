import React from "react";

export default function PrintableScheduleItem({ employee }) {

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
    </tr>
  )
}