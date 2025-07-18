import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 850px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  flex-shrink: 0;
`;
export const SUText = styled.div`
  width: 125px;
  height: 36px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "HakgyoansimPuzzleTTF-Black";

  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StatusBar = styled.div`
  width: 353px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
  margin: 16px 0 8px;
`;
export const Status = styled.div`
  width: 240px;
  height: 13px;
  border-radius: 10px;
  background: #5061ff;
`;
export const Step = styled.div`
  width: 242px;
  height: 52px;
  flex-shrink: 0;
  color: #5061ff;
  text-align: center;
  font-family: "BMJUA";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Text = styled.div`
  width: 140px;
  height: 21px;
  flex-shrink: 0;
  color: #000;
  font-family: "SUIT-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const SUContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const Input = styled.div`
  width: 304px;
  height: 41px;
  flex-shrink: 0;
  border-bottom: 1px solid #5061ff;

  input {
    width: 230px;
    height: 35px;
    color: #969696;
    text-align: left;
    font-family: "SUIT-Regular";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
  }

  button {
    color: #5061ff;
    text-align: center;
    font-family: "SUIT-Regular";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: white;
  }
`;
export const Marketing_Agree = styled.div`
  width: 140px;
  height: 21px;
  flex-shrink: 0;
  color: #000;
  font-family: "SUIT-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 41px;
`;
export const AgreeOption = styled.div`
  height: 20px;
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 13px;
  margin-bottom: 26px;
`;
export const AgreeBtn = styled.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 0.5px solid #5773ff;
  background: #5061ff;
`;

export const NextBtn = styled.div`
  width: 393px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center; /* ← 여기가 수직 정렬 */
  background: #5061ff;
  color: #fff;
  font-family: "SUIT-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Detail = styled.div`
  margin: 0 auto;
  color: #969696;
  font-family: "SUIT-Regular";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputWrapper = styled.div`
  margin: 5px 0px;
`;
