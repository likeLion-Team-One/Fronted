import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  flex-shrink: 0;
`;
export const Logo = styled.img`
  margin: 170px 0px 50px 0px;
`;

export const Box = styled.input`
  width: 353px;
  height: 55px;
  margin-top: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? "#E01B1B" : "#5061ff")};
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
`;
export const Text = styled.div`
  color: #000;
  font-family: "SUIT-Regular";
  font-size: 15px;
  font-weight: 700;
  margin-top: 24px;
  align-self: flex-start;
  margin-left: 20px;
`;
export const Btn = styled.button`
  width: 353px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5061ff;
  color: #fff;

  margin-top: 41px;
  border: none;
  font-family: "SUIT-Regular";
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
`;
export const SignUpBtn = styled(Btn)`
  margin-top: 14px;
  background: #fff;
  color: #5061ff;
  border: 1px solid #5061ff;
`;

export const errorMsg = styled.div`
  font-family: "SUIT-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #e01b1b;
  width: 353px;
  text-align: left;
  padding: 10px 20px;
`;
