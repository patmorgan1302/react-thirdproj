import React from 'react'; 
import Searchbar from './Searchbar';
import axios from 'axios';

class App extends React.Component{
    onSearchSubmit(term) {
        axios.get('https://www.potterapi.com/v1/sortingHat', {
            params: { query: term },
            HEADERS: {
                Authorization: 
                    'Client ID QqJFZDKFkxpi1Zu9Y64OCfuJdSxmKVaEEZZt8-FXXY'
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit} />
            </div>
            )
    }
}

export default App;