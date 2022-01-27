import AppInfo from '../app-info/app-info';
import './app.css';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employeеs-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App(){
    const data = [
        {name: 'Yurii', salary: 1500},
        {name: 'Peter', salary: 1000},
        {name: 'Stepan', salary: 750}
    ];

    return (
        <div className="app">
           <AppInfo/>
           <div className='search-panel'>
               <SeachPanel/>
               <AppFilter/>
               
           </div>
           <EmployeesList data={data}/>
           <EmployeesAddForm/>
        </div>
    );
}

export default App;