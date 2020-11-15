import React from 'react';
import SearchBar from './SearchBar';
import axios from '../Api/youtubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state={videoList:[], selectedVideo:null};
    componentDidMount(){
        this.SearchTermReceived('buildings');
    }
    SearchTermReceived= async (term) => {
       const response=await axios.get( "/search",{
            params:{
                q:term,
           }
        });
        console.log(response);
        this.setState(
            {
                videoList:response.data.items,
                selectedVideo:response.data.items[0]
            
            });
    };
    onVideoSelect=(video)=>{
       this.setState({selectedVideo:video})
    }
    render() {
        return (
            <div className="ui container" style={{margin:'30px'}}>
                <SearchBar onSubmit={this.SearchTermReceived}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                           <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="six wide column">
                           <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videoList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;