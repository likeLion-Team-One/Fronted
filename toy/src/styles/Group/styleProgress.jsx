import styled from "styled-components";

/* ===== 컨테이너 & 헤더 ===== */
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 50px;
  width: 100%;
  .center {
    flex: 1; // 남은 공간을 모두 차지
    text-align: center;
    font-family: "HakgyoansimPuzzleTTF-Black";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding-left: 50px; /* 필요시 조정 */
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 39px;
  margin-bottom: 5px;
  display: flex;
  align-items: flex-start;
`;
export const Input = styled.div`
  width: 353px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  position: relative;
`;

export const Percent = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Limit = styled.div`
  width: 100%;
  padding-left: 40px;
  text-align: left;
  color: #969696;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5px;
`;
