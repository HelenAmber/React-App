import './employees-list.css';
import EmployeesListItem from '../employeеs-list-item/employees-list-item'

const EmployeesList = ({data, onDelete, onToggleProp, changeSalary}) => {

    const elements = data.map(item => {  
        const {id, ...itemProps} = item;

        return (
        <EmployeesListItem 
               key={id}
               {...itemProps}
               onDelete = {() => onDelete(id)}
               onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
               changeSalary ={(e) => changeSalary(id, e.target.value)}
               />
        )
    })
        return (
            <ul className="app-list list group">
            {elements}
            </ul>
        )
}
export default EmployeesList;