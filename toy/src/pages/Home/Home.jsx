import * as H from "../../styles/StyledHome.jsx";
import Card from "../Components/ToyCard.jsx";
import Group from "../Components/GroupBox.jsx";
import BottomNav from "../Components/BottomNav.jsx";
import * as C from "../../styles/StyledCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goMenu = () => {
    navigate(`/menu`);
  };
  const goSearch = () => {
    navigate(`/search`);
  };
  const goScrap = () => {
    navigate(`/scrap`);
  };
  return (
    <H.Container>
      <H.Bar>
        <H.Plus onClick={goMenu}>
          <img src={`${process.env.PUBLIC_URL}/image/plus.svg`} />
        </H.Plus>
        <H.Logo>
          <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="logo" width="92px" />
        </H.Logo>
        <H.Scrap onClick={goScrap}>
          <img src={`${process.env.PUBLIC_URL}/image/scrap.svg`} />
        </H.Scrap>
      </H.Bar>
      <H.Search onClick={goSearch}>
        <img src={`${process.env.PUBLIC_URL}/image/search.svg`} alt="search" />
      </H.Search>
      <H.Scroll>
        <H.Text>진행중인 프로젝트</H.Text>
        <Card header="토이 프로젝트" image={`${process.env.PUBLIC_URL}/image/fire.png`} bgColor="#5061ff" borderColor="#5061FF" shadowColor="#5061FF;" hdColor="#fff" people="4" progress={99}></Card>
        <H.Text>최근 완료된 프로젝트</H.Text>
        <Card header="해커톤 대회" image={`${process.env.PUBLIC_URL}/image/congratulation.png`} bgColor="#fff" borderColor="#5061FF" shadowColor="#5061FF" hdColor="#5061FF" people="6"></Card>
        <H.Text>추천 그룹</H.Text>
        <H.rowScroll>
          <Group
            title="모바일 앱 서비스 개발"
            content="토이 프로젝트
UX/UI 디자이너 1명 구합니다."
          ></Group>
          <Group
            title="제아페 팀원 구인"
            content="제일기획 아이디어 페스티벌
팀원 2명 더 구합니다!!"
          ></Group>
          <Group
            title="해커톤 디자이너 1명"
            content="SW 융합 해커톤 대회
UI 디자이너 한 명 모집중"
          ></Group>
        </H.rowScroll>
        <C.Scroll>
          <img src={`${process.env.PUBLIC_URL}/image/circle.svg`} alt="logo" width="30px" style={{ top: 0, right: 0 }} />
          <img src={`${process.env.PUBLIC_URL}/image/right.svg`} alt="logo" width="18px" style={{ top: 8, right: 6 }} />
        </C.Scroll>
      </H.Scroll>
      <BottomNav idx={2}></BottomNav>
    </H.Container>
  );
};

export default Home;
