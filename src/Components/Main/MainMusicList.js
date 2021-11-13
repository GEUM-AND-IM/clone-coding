import axios from "axios";
import { MusicList } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { musicsData } from "src/Store/MusicsAtom";
import styled from "styled-components";
import RefreshImg from "../../asset/img/refresh.png";
import { useEffect } from "react";

const MainMusicRefreshBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 0px;
  background: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

const MainMusicRefreshImg = styled.img`
  width: 100%;
`;

const MainMusicList = () => {
  const [musicData, setMusicData] = useRecoilState(musicsData);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { List } = state;
  const MusicListAPI = async () => {
    const url =
      "https://ws.audioscrobbler.com/2.0/?method=track.search&track=한요한&api_key=1f7d927933cb93a6498028d59d238139&format=json";
    try {
      const response = await axios.get(url);
      const {
        data: {
          results: {
            trackmatches: { track },
          },
        },
      } = response;
      setMusicData(track);
      dispatch(MusicList(response)); //리덕스로 걸러주려고 했지만 지금은 못함
    } catch (error) {
      const data = error.response;
      return data;
    }
  };

  useEffect(() => {
    MusicListAPI();
  }, []);

  return (
    <div>
      <MainMusicRefreshBtn onClick={MusicListAPI}>
        <MainMusicRefreshImg src={RefreshImg} />
      </MainMusicRefreshBtn>
    </div>
  );
};

export default MainMusicList;
