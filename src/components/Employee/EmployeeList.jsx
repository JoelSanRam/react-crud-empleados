import React, {useEffect, useState} from "react";
import * as EmployeeServer from './EmployeeServer'
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const listEmployees = async () => {
        try{
            const res = await EmployeeServer.listEmployees();
            const data = await res.json()
            setEmployees(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        listEmployees();
    },[])

    return(
        <div className="text-center"> 
            <div className="row">
                {employees.map((employee) => (
                    <EmployeeItem key={employee.id} employee={employee} listEmployees={listEmployees} />
                ))}
            </div>
        </div>
            
    )
};

export default EmployeeList;