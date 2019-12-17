import React from 'react';


class SearchBar extends React.Component{
    state = {
        term: '',
    }

    onFromSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term)
        
    }
    render(){
        return(
            <div className='ui form segment'>
                <form onSubmit={this.onFromSubmit} action="" className='ui form'>
                    <div className='field'>
                        <label>Search Your Images</label>
                        <input type="text"
                        value={this.state.term}
                         onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar