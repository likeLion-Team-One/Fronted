import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../Components/BottomNav.jsx";
import * as P from "../../styles/styleProfile";

const Profile = () => {
  const navigate = useNavigate();
  const GoEdit = () => {
    navigate(`/Profile_edit`);
  };
  return (
    <P.Container>
      <P.Header>
        <P.BackBtn
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          alt="뒤로가기"
        />
        <P.PText>마이</P.PText>
      </P.Header>
      <P.ProfileBox>
        <img
          src={`${process.env.PUBLIC_URL}/image/Profile.svg`}
          alt="Profile"
        ></img>
        <P.LogIn>
          <P.LogIn_please>
            김솜솜 <P.BlackText>님</P.BlackText>
          </P.LogIn_please>
          <P.BenefitText>나의 혜택</P.BenefitText>
        </P.LogIn>
      </P.ProfileBox>
      <P.Edit onClick={GoEdit}>프로필 수정</P.Edit>
      <P.Stories>
        활동 내역
        <P.StoriesBox>
          <P.StoryRow>
            <P.Story>내 그룹</P.Story>
            <P.Story>찜</P.Story>
          </P.StoryRow>
          <P.StoryRow>
            <P.Story>스크랩</P.Story>
          </P.StoryRow>
        </P.StoriesBox>
      </P.Stories>
      <BottomNav idx={4}></BottomNav>
    </P.Container>
  );
};
export default Profile;
