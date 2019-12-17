import React from 'react';
import Unspash from '../api/Unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {

    state={
        images: [],
    }

    // onSearchSubmit = async (term) => {
        
    //    const response = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: {
    //             query: term
    //         },
    //         headers: {
    //             'Authorization': 
    //             'Client-ID 93f3792c92a3ca159b7385071b936f68399d691db69bdfb566f37b33671d1d09'
    //         }
    //     });
    //     console.log('this',  response.data.results)
    //     this.setState({images: response.data.results})

    // }

    onSearchSubmit = (term) => {
        
        Unspash.get('/search/photos',{
             params: {
                 query: term
             },
             
         }).then(response => {
             if(response){
                this.setState({
                    images: response.data.results
                })
             }
         })
 
     }

    render(){
        
        return( 
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App