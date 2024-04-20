import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as EmployeeServer from './EmployeeServer'

const EmployeeItem = ({ employee, listEmployees }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Está seguro de eliminar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Si"
    })
      if (result.isConfirmed) {
        await EmployeeServer.deleteEmployers(id);
        listEmployees()
        Swal.fire({
          title: "Eliminado",
          icon: "success"
        });
      }
  }
  return (
    
      
        <div className="col col-md-3 mb-4">
          <div className="card">
            <img src={employee.photo} className="card-img-top" alt="..." width="300" height="300"/>
              <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <p className="card-text"> {employee.email} </p>
                <div className="row">
                  <div className="d-flex justify-content-evenly">
                    <button onClick={() => navigate(`/update/employeesForm/${employee.id}`)} className="btn btn-primary">Editar</button>
                    <button onClick={() => employee.id && handleDelete(employee.id)} className="btn btn-danger">Eliminar</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
};

export default EmployeeItem