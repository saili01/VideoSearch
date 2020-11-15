import axios from 'axios';
const KEY='AIzaSyCNoCOfBiVep0qYLP9_F6d2P782n95TSAs';
export default axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            key:KEY,
            part:"snippet",
            maxResults:5,
            type:'video',
          

        }
        
    }
    )

