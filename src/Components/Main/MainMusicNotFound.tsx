import { useRecoilState } from "recoil";
import { submitKeywordData } from "src/Store/KeywordAtom";
import styled from "styled-components";

const MainMusicNotFoundContainer = styled.div`
  width: 100%;
  height: 500px;
`;

const MainMusicNotFound = () => {
  const [submitKeyword, setSubmitKeyword] = useRecoilState(submitKeywordData);
  return (
    <MainMusicNotFoundContainer>
      '{submitKeyword}'에 대한 검색 결과가 없습니다.
    </MainMusicNotFoundContainer>
  );
};

export default MainMusicNotFound;
