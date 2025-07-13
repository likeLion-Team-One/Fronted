import React from "react";
import { useNavigate } from "react-router-dom";
import * as G from "../../styles/Group/styleGroup";
import BottomNav from "../Components/BottomNav.jsx";
const Group = () => {
  const navigate = useNavigate();
  const GoMyGroup = () => {
    navigate(`/Group`);
  };
  const GoGroupDetail = () => {
    navigate(`/my_group_detail`);
  };
  const CreateGroup = () => {
    navigate(`/create_group`);
  };
  return (
    <G.Container>
      <G.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={() => window.history.back()}
        />
        <div className="center">그룹</div>
        <img
          src={`${process.env.PUBLIC_URL}/image/heart.svg`}
          style={{ width: "26px" }}
        />
      </G.Bar>

      <G.GroupContainer>
        <G.SearchBar>
          <G.SearchInput />
          <img
            src={`${process.env.PUBLIC_URL}/image/search.svg`}
            alt="lens"
            width="18px"
            height="18px"
          ></img>
        </G.SearchBar>
        <G.TabMenu>
          <G.Tab onClick={GoMyGroup}>탐색</G.Tab>
          <G.Tab active>내 그룹</G.Tab>
        </G.TabMenu>

        <G.GroupCount>
          6개의 그룹
          <G.FilterIcon
            src={`${process.env.PUBLIC_URL}/image/filter.svg`}
            alt="filter"
          ></G.FilterIcon>
        </G.GroupCount>

        <G.GroupList>
          <G.GroupCard onClick={GoGroupDetail}>
            <G.GroupThumbnail
              src={`${process.env.PUBLIC_URL}/image/groupIcon.svg`}
            />
            <G.GroupInfo>
              <G.GroupTitle>
                제아페 1팀
                <G.MemberCount
                  src={`${process.env.PUBLIC_URL}/image/people_blue.svg`}
                >
                  2/4
                </G.MemberCount>
              </G.GroupTitle>
              <G.GroupTags>#공모전 #광고</G.GroupTags>
              <G.GroupBottom>
                <G.Comment
                  src={`${process.env.PUBLIC_URL}/image/comment.svg`}
                />
                <G.Like
                  src={`${process.env.PUBLIC_URL}/image/scrap_blue.svg`}
                />
                <G.RequestButton>팀원 요청</G.RequestButton>
              </G.GroupBottom>
            </G.GroupInfo>
          </G.GroupCard>
          <G.GroupCard onClick={GoGroupDetail}>
            <G.GroupThumbnail
              src={`${process.env.PUBLIC_URL}/image/groupIcon.svg`}
            />
            <G.GroupInfo>
              <G.GroupTitle>
                해커톤 대회 5인 팀
                <G.MemberCount
                  src={`${process.env.PUBLIC_URL}/image/people_blue.svg`}
                >
                  1/5
                </G.MemberCount>
              </G.GroupTitle>
              <G.GroupTags>#해커톤 #SW #개발</G.GroupTags>
              <G.GroupBottom>
                <G.Comment
                  src={`${process.env.PUBLIC_URL}/image/comment.svg`}
                />
                <G.Like
                  src={`${process.env.PUBLIC_URL}/image/scrap_blue.svg`}
                />
                <G.RequestButton>팀원 요청</G.RequestButton>
              </G.GroupBottom>
            </G.GroupInfo>
          </G.GroupCard>
        </G.GroupList>
        <G.FloatingAdd onClick={CreateGroup}>
          <G.PlusIcon
            src={`${process.env.PUBLIC_URL}/image/plusIcon.svg`}
            alt="추가"
          />
        </G.FloatingAdd>
      </G.GroupContainer>
      <BottomNav idx={3}></BottomNav>
    </G.Container>
  );
};
export default Group;
