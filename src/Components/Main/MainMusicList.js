import axios from 'axios'
import {useState} from "react";
//import { musiclist } from "src/app/store";
//import { useDispatch } from "react-redux";



const MainMusicList = () => {
    
    const [data, setData] = useState(null);
        const MusicListAPI = async()=>{
            const url =  'https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=1f7d927933cb93a6498028d59d238139&format=json';    
            try{
              const response = await axios.get(url);  
              setData(response.data);  
            }catch(e){
              console.log(e);
            }
          }
    
    return (
        <div>
            <button onClick={MusicListAPI}>불러오기</button>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    );
};

export default MainMusicList;