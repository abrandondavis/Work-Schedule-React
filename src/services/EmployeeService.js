const Default_URL = 'https://652a6cf24791d884f1fce8c4.mockapi.io/api/schedule';

class EmployeeService {
  constructor(url) {
    this.url = url || Default_URL; // Assign the provided URL or use the default
  }

  // Create | POST
  async createEmployee(employeeData) {
    try {
      // Attempt to create a new employee by sending a POST request to the API
      const response = await fetch(this.url + 'employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors that occur during the create operation
      console.error('Error creating employee:', error);
      throw error;
    }
  }

  // Read | GET
  async getEmployees() {
    try {
      // Attempt to fetch employees from the API
      const response = await fetch(this.url + 'employees', {
        method: 'GET',
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      const data = await response.json();

      // Return the fetched data
      return data;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error fetching employees:', error);
      throw error;
    }
  }

  // Update | PUT or PATCH
  async updateEmployee(employeeId, updatedData) {
    try {
      // Attempt to update a employee by sending a PUT or PATCH request to the API
      const response = await fetch(this.url + `employees/${employeeId}`, {
        method: 'PUT', // Use PUT or PATCH as needed
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      const data = await response.json();

      // Return the updated employee data
      return data;
    } catch (error) {
      // Handle any errors that occur during the update operation
      console.error('Error updating employee:', error);
      throw error;
    }
  }

  // Delete | DELETE
  async deleteEmployee(employeeId) {
    try {
      // Attempt to delete a employee by sending a DELETE request to the API
      const response = await fetch(this.url + `employees/${employeeId}`, {
        method: 'DELETE',
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Return a success message or indicator
      return 'Employee deleted successfully';
    } catch (error) {
      // Handle any errors that occur during the delete operation
      console.error('Error deleting employee:', error);
      throw error;
    }
  }
}

//Exports as a new class by default, could be changed if mulitple URLs are needed.
export default new EmployeeService();