import AppInfo from '../app-info/app-info';
import './app.css';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employeеs-list/employees-list';

function App(){
    return (
        <div className="app">
           <AppInfo/>
           <div className='search-panel'>
               <SeachPanel/>
               <AppFilter/>
               
           </div>
           <EmployeesList/>
        </div>
    );
}

export default App;