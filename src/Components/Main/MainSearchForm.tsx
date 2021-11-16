import { useRecoilState } from "recoil";
import useSearch from "src/Hooks/Search/useSearch";
import { keywordData } from "src/Store/KeywordAtom";
import styled from "styled-components";

const SearchInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SearchInputWrap = styled.div`
  width: 1170px;
  margin: 0px auto;
  display: flex;
`;

const SearchInput = styled.input`
  width: 240px;
  height: 40px;
  border: 1px solid var(--main-border-color);
  box-sizing: border-box;
  outline: none;
  margin: auto 0px;
  margin-left: auto;
`;

const SearchSubmitInput = styled.button`
  width: 50px;
  height: 40px;
  background: none;
  border: 1px solid var(--main-border-color);
  margin: auto 0px;
  cursor: pointer;
`;

const MainSearchForm: React.FC = () => {
  const [keyword, setKeyword] = useRecoilState(keywordData);
  const { onChangeKeyword, onSubmit } = useSearch();

  return (
    <SearchInputContainer>
      <SearchInputWrap>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          type="search"
          value={keyword}
          onChange={onChangeKeyword}
        />
        <SearchSubmitInput onClick={onSubmit}>검색</SearchSubmitInput>
      </SearchInputWrap>
    </SearchInputContainer>
  );
};

export default MainSearchForm;
