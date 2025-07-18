import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "../../styles/StyledScrap.jsx";
import * as SU from "../../styles/styleSignUp";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  // 오류메시지 상태 저장
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [userNameErrorMsg, setUserNameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [passwordCheckErrorMsg, setPasswordCheckErrorMsg] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isUserName, setIsUserName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState("");

  const goBack = () => {
    navigate(`/SignUp_agree`);
  };

  // 각 변수 저장
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    phone: "",
    email: "",
  });

  const { name, username, password, phone, email } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSignupBtn = () => {
    console.log("아이디: ", username);

    try {
      axios
        .post("http://127.0.0.1:8000/user/", {
          name: inputs.name,
          username: inputs.username,
          password: inputs.password,
          phone: inputs.phone,
          email: inputs.email,
        })
        .then(() => {
          navigate(`/SignUp_complete/`, { state: { name } });
        });
    } catch (error) {
      console.error("Error Signup", error);
    }
  };

  const onChangeName = (e) => {
    const value = e.target.value;
    setInputs({ ...inputs, name: value });
    if (value.length < 2 || value.length > 20) {
      setNameErrorMsg("* 2글자 이상 작성해 주세요. / * 글자 수가 20자를 초과하였습니다.");
      setIsName(false);
    } else {
      setIsName(true);
      setNameErrorMsg("");
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputs({ ...inputs, password: passwordCurrent });

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordErrorMsg("* 비밀번호 양식이 틀립니다.");
      setIsPassword(false);
    } else {
      setIsPassword(true);
      setPasswordErrorMsg("");
    }
  };

  const onChangePasswordCheck = (e) => {
    const passwordCheckCurrent = e.target.value;
    setPasswordCheck(passwordCheckCurrent);

    if (password === passwordCheck) {
      setIsPasswordCheck(true);
      setPasswordCheckErrorMsg("");
    } else {
      setPasswordCheckErrorMsg("* 비밀번호가 올바르지 않습니다.");
      setIsPasswordCheck(false);
    }
  };

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
        STEP 02
        <br />
        회원정보 입력하기
      </SU.Step>
      <SU.SUContainer>
        <SU.InputWrapper>
          <SU.Text>
            이름 <span style={{ color: "#E01B1B" }}>*</span>
          </SU.Text>
          <SU.Input>
            <input name="name" value={name} placeholder="실명" onChange={onChangeName}></input>
          </SU.Input>
          <SU.Detail>* 2자 이상, 20자 이하</SU.Detail>
          {nameErrorMsg && <span className={`message ${isName ? "success" : "error"}`}>{nameErrorMsg}</span>}
        </SU.InputWrapper>

        <SU.InputWrapper>
          <SU.Text>
            아이디 <span style={{ color: "#E01B1B" }}>*</span>
          </SU.Text>
          <SU.Input>
            <input id="username" name="username" value={username} onChange={onChange}></input>
            <button id="checkId" name="checkId">
              중복 확인
            </button>
          </SU.Input>
        </SU.InputWrapper>

        <SU.InputWrapper>
          <SU.Text>
            비밀번호 <span style={{ color: "#E01B1B" }}>*</span>
          </SU.Text>
          <SU.Input>
            <input id="password" name="password" type="password" value={password} onChange={onChangePassword}></input>
          </SU.Input>
          <SU.Detail>* 영문, 숫자, 특수문자 포함 8자 이상</SU.Detail>
          {passwordErrorMsg && <span className={`message ${isPassword ? "success" : "error"}`}>{passwordErrorMsg}</span>}
        </SU.InputWrapper>

        <SU.InputWrapper>
          <SU.Text>
            비밀번호 확인 <span style={{ color: "#E01B1B" }}>*</span>
          </SU.Text>
          <SU.Input>
            <input id="passwordCheck" name="passwordCheck" type="password" value={passwordCheck} onChange={onChangePasswordCheck}></input>
          </SU.Input>
          {passwordCheckErrorMsg && <span className={`message ${isPasswordCheck ? "success" : "error"}`}>{passwordCheckErrorMsg}</span>}
        </SU.InputWrapper>

        <SU.InputWrapper>
          <SU.Text>전화번호</SU.Text>
          <SU.Input>
            <input id="phone" name="phone" value={phone} onChange={onChange}></input>
          </SU.Input>
        </SU.InputWrapper>

        <SU.InputWrapper>
          <SU.Text>메일 주소</SU.Text>
          <SU.Input>
            <input id="email" name="email" value={email} onChange={onChange}></input>
          </SU.Input>
        </SU.InputWrapper>

        <SU.Marketing_Agree>마케팅 정보 수신 동의</SU.Marketing_Agree>
        <SU.AgreeOption>
          <SU.AgreeBtn /> 동의
        </SU.AgreeOption>
      </SU.SUContainer>
      <SU.NextBtn onClick={handleSignupBtn}>다음</SU.NextBtn>
    </SU.Container>
  );
};

export default SignUp;
