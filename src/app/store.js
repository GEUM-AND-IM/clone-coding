import { createStore } from "redux";

const MUSICLIST = "music-list";

export const MusicList = (musiclist) => {
  return {
    type: MUSICLIST,
    list: musiclist,
  };
};



const initialState = {
  List:[]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MUSICLIST:
      return {
        ...state,
         List: action.list.map((item) => {
             return{
                 name: item.track.name,
                 url: item.track.url
             }
         })
      };
      default:
          return state;
    }
};

export const store = createStore(reducer);

export default store;
