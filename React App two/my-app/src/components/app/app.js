import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [
        {name: 'Vitalii L.', salary: '800', increase: false, id: 1}, 
        {name: 'Anastasya G.', salary: '3000', increase: true, id: 2}, 
        {name: 'Konstantin T.', salary: '5000', increase: false, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // eslint-disable-next-line
      // const index = data.findIndex(elem => elem.id === id);
      
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];
               
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        
          <EmployersList 
            data={this.state.data}
            onDelete={this.deleteItem}/>
          <EmployersAddForm/>
      </div>
    );
  }
}

export default App;