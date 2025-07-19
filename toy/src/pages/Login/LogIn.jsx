import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as L from "../../styles/styleLogIn";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();

  const GoSignUp = () => {
    navigate(`/SignUp_agree`);
  };

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { username, password } = input;
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLoginBtn = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: input.username,
        password: input.password,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      navigate(`/home`);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMsg("아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.");
      } else {
        setErrorMsg("모든 값을 입력해주세요.");
      }
    }
  };

  return (
    <L.Container>
      <L.Logo src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="logo" width="173.695px" height="79px" aspect-ratio="173.70/79.00"></L.Logo>
      <L.Text>아이디</L.Text>
      <L.Box id="IDBox" name="username" value={username} onChange={onChange} hasError={Boolean(errorMsg)}></L.Box>
      <L.Text>비밀번호</L.Text>
      <L.Box type="password" id="PWBox" name="password" value={password} onChange={onChange} hasError={Boolean(errorMsg)}></L.Box>
      {errorMsg && <L.errorMsg>{errorMsg}</L.errorMsg>}
      <L.Btn id="SIBtn" onClick={handleLoginBtn}>
        로그인
      </L.Btn>
      <L.SignUpBtn id="SUBtn" onClick={GoSignUp}>
        회원가입
      </L.SignUpBtn>
    </L.Container>
  );
};

export default LogIn;
