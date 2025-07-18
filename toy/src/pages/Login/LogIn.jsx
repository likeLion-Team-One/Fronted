import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as L from "../../styles/styleLogIn";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();

  const GoSignUp = () => {
    navigate(`/SignUp_agree`);
  };

  // const GoHome = () => {
  //   navigate(`/home`);
  // };

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { username, password } = input;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginBtn = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/token/", {
        username: input.username,
        password: input.password,
      });
      navigate(`/home`);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMsg("아이디 또는 비밀번호가 올바르지 않습니다.");
      } else {
        setErrorMsg("모든 값을 입력해주세요.");
      }
    }
  };

  return (
    <L.Container>
      <L.Logo src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="logo" width="173.695px" height="79px" aspect-ratio="173.70/79.00"></L.Logo>
      <L.Text>아이디</L.Text>
      <L.Box id="IDBox" name="username" value={username} onChange={onChange}></L.Box>
      <L.Text>비밀번호</L.Text>
      <L.Box type="password" id="PWBox" name="password" value={password} onChange={onChange}></L.Box>
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
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
