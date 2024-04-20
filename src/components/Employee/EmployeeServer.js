const API_URL = "https://apiempleados.onrender.com/employees/"

export const listEmployees = async () => {
    return await fetch(API_URL)
} 

export const deleteEmployers = async (id) => {
    return await fetch(`${API_URL}{id}`, {
        method: 'DELETE',
    })
}

export const registerEmployee = async (employee) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: String(employee.name).trim(),
            email: String(employee.email).trim(),
            phone: String(employee.phone).trim(),
            photo: String(employee.photo).trim(),
        })
    })
}

export const getEmployee = async (id) => {
    return await fetch(`${API_URL}${id}`)
}

export const updateEmployee = async (id, updatedEmployee) => {
    return await fetch(`${API_URL}${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: String(updatedEmployee.name).trim(),
            email: String(updatedEmployee.email).trim(),
            phone: String(updatedEmployee.phone).trim(),
            photo: String(updatedEmployee.photo).trim(),
        })
    })
}