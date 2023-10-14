import React, { useEffect, useState } from "react";
import PrintableScheduleItem from "./PrintableScheduleItem";
import EmployeeService from "../../services/EmployeeService";

export default function PrintableVersion(employee) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await EmployeeService.getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees: ', error)
      }
    };
    fetchEmployees();
  }, []);

  const print = () => window.print();

  return (
    <div id="employee-list" className="container mt-5">
      <button className="btn btn-secondary no-print mb-3" onClick={print}>Print <i class="bi bi-printer printer-icon"></i></button>
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
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
          <PrintableScheduleItem
            key={employee.id}
            employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}