import React from 'react'; 
import ReactDOM from 'react-dom';
// import SortingHat from './API_Requests/Sorting_Hat';
// import Searchbar from './Searchbar';

                // <div className="ui container" style={{ marginTop: '10px'}}>
                //     <Searchbar onSubmit={this.onSearchSubmit} />
                //     Found : { this.state.images.length }
                // </div>
       
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { characters: [] }
    }

    componentDidMount(){
        this.fetchedData();
    }

    fetchedData(){
        fetch('https://www.potterapi.com/v1/characters?key=$2a$10$DGbEmapYD7p3LyvAGF3zke0SKd.xPGOBPJTDsK4pOo82wI3FdcNPC')
            .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                characters : result
            });
            console.log(result)
        })
        .catch(err => console.error(err));
        };

        render(){
            const{characters} = this.state;
                    return(
                    <ul class="bl">
                        {characters.map(character => (
                            <li key={character}>
                            <div class="ui card">
                              <div class="content">{character.name}</div>
                            </div>
                    </li>))}
                </ul>
            )
        }
    }

    // export default App;
    
ReactDOM.render(<App />, document.querySelector('#root'))            

//       onSearchSubmit = async term => {
//         const response = await axios.get('https://api.unsplash.com/photos', {
//             params: { query: term },
//             headers: {
//                 Authorization: 
//                     'Client-ID -QqJFZDKFkxpi1Zu9Y64OCfuJdSxmKVaEEZZt8-FXXY'
//             }
//           });

//           this.setState({ images: response.data.results })

//         //   this.state.images.map
// }