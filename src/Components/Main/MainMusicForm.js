import MusicList from "./MainMusicList";
import styled from "styled-components";

const MainWrap = styled.div`
    width: 100%;
    height: 2000px;
`


const MainNav = styled.nav`
margin-top: 60px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
`

const MainNavSpan = styled.span`
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: 5px solid #b90000;
    position: relative;
    left: 19%;
    margin:28px;
    font-weight: bold;
`

const MainMusicForm = () => {
    


    return (
        <MainWrap>
            <MainNav>
                <MainNavSpan>
                    Music List
                </MainNavSpan>                
            </MainNav>
            <MusicList/>
        </MainWrap>
    );
};

export default MainMusicForm;