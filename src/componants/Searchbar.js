import React from 'react';

class Search extends React.Component{
    state = {
        searchValue: " "
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.searchValue);
    };

    render(){
    return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text"
                        placeholder="this is the worst man"
                        value={this.state.searchValue}
                        onChange={e => this.setState({ searchValue: e.target.value})}
                    />
                </div>
            </form>
        </div>
    )
}}

export default Search;

