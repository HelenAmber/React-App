import './employees-list.css';
import EmployeesListItem from '../employeеs-list-item/employees-list-item'

const EmployeesList = () => {
    return (
        <ul className="app-list list group">
           <EmployeesListItem name = "Yurii" salary = {1500}/>
           <EmployeesListItem name = "Peter" salary = {1000}/>
           <EmployeesListItem name = "Stepan" salary = {750}/>
        </ul>
    )
}
export default EmployeesList;