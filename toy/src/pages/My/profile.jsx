import React from "react";
import * as M from "../../styles/StyledMenu.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNav from "../Components/BottomNav.jsx";
import * as P from "../../styles/styleProfile";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const GoEdit = () => {
    navigate(`/Profile_edit`);
  };

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <P.Container>
      <M.Bar>
        <M.DeleteBtn onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`} />
        </M.DeleteBtn>
        <M.Title>마이</M.Title>
        <div style={{ width: "20px" }}></div>
      </M.Bar>
      <P.ProfileBox>
        <img src={`${process.env.PUBLIC_URL}/image/Profile.svg`} alt="Profile"></img>
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
