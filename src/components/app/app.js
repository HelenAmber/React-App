import { Component } from 'react';
import AppInfo from '../app-info/app-info';

import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employeеs-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Yurii', salary: 1500, increase: false, rise: true, id: 1},
                {name: 'Peter', salary: 1000, increase: true, rise: false, id: 2},
                {name: 'Stepan', salary: 750, increase: false, rise: false, id: 3}
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => { 
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        
        const newUser = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id : this.maxId++
        };
        
        this.setState(({data}) => {
          return {
                data: [...data, newUser]               
            }                           
        }) 
    } 

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
           data: data.map(item => {
              if(item.id === id){
                  return {...item, increase: !item.increase }
              }
              return item;
           })
        }))
    }

    onToggleRise = (id) =>{
        console.log(`Rise this ${id}`);
    }

    render() {
        const amountEmployees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
            <AppInfo
               amount = {amountEmployees}
               increased = {increased}/>
            <div className='search-panel'>
                <SeachPanel/>
                <AppFilter/>
                
            </div>
            <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                />
            <EmployeesAddForm
                onAdd ={this.addItem}
                />
            </div>
        );
    }
}

export default App;