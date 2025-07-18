import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as SU from "../../styles/styleSignUp_complete";
import * as S from "../../styles/StyledScrap.jsx";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/SignUp`);
  };

  const GoLogin = () => {
    navigate(`/Login`);
  };

  const location = useLocation();
  const name = location.state?.name;

  return (
    <SU.Container>
      <S.Bar>
        <S.Back onClick={goBack}>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`}></img>
        </S.Back>
        <div className="center">회원가입</div>
      </S.Bar>
      <SU.StatusBar>
        <SU.Status></SU.Status>
      </SU.StatusBar>
      <SU.Step>
        STEP 03
        <br />
        회원가입 완료
      </SU.Step>
      <SU.Congrat>
        <SU.Confetti src={`${process.env.PUBLIC_URL}/image/image16.svg`} />
        <SU.C_Name>
          {name}
          <span style={{ fontSize: "25px", color: "#000" }}>님,</span>
        </SU.C_Name>
        <SU.C_Text>가입을 축하드립니다!</SU.C_Text>
      </SU.Congrat>
      <SU.NextBtn onClick={GoLogin}>로그인 하러 가기</SU.NextBtn>
    </SU.Container>
  );
};
export default SignUp;
