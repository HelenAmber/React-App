import AppInfo from '../app-info/app-info';
import './app.css';
import SeachPanel from '../search-panel/search-panel';

function App(){
    return (
        <div className="app">
           <AppInfo/>
           <div className='search-panel'>
               <SeachPanel/>
           </div>
        </div>
    );
}

export default App;