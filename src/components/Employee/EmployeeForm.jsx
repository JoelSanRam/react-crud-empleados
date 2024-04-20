import React, { useEffect, useState } from "react";
import * as EmployeeServer from './EmployeeServer'
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeeForm = () => {
    const navigate = useNavigate()
    const params = useParams()
    const initialState = { id: 0, name: '', email: "", phone: "", photo: "" }
    const [employee, setEmployee] = useState(initialState) 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res
            if(!params.id){
                res = await EmployeeServer.registerEmployee(employee);
                const data = await res.json();
                if(data.message === 'Success'){
                    Swal.fire("Registro completado");
                    setEmployee(initialState)
                }
            }
            else{
              res = await EmployeeServer.updateEmployee(params.id, employee)
              Swal.fire("Registro actualizado");
            }
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (event) => {
        setEmployee({...employee, [event.target.name]: event.target.value})
    }
    const getEmployee = async (id) => {
        try {
            let res;
            res = await EmployeeServer.getEmployee(id)
            const data = await res.json()
            const {name, email, phone, photo} = data;
            setEmployee({name, email, phone, photo})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(params.id){
            getEmployee(params.id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center" >Empleados</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="name" minLength="2" maxLength="50"
                    autoFocus required value={employee.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" minLength="10" maxLength="100"
                    required value={employee.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" name="phone"
                    required value={employee.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">URL de imagen</label>
                    <input type="text" className="form-control" name="photo"
                    required value={employee.photo} onChange={handleChange} />
                </div>
                <div className="d-grid gap-2">
                    {params.id ? (
                        <button type="submit" className="btn btn-dark btn-block">Actualizar</button>
                    ) : (
                        <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm