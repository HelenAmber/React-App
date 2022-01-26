import AppInfo from '../app-info/app-info';
import './app.css';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'

function App(){
    return (
        <div className="app">
           <AppInfo/>
           <div className='search-panel'>
               <SeachPanel/>
               <AppFilter/>
           </div>
        </div>
    );
}

export default App;