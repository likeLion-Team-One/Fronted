import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 393px;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const PText = styled.div`
  width: 125px;
  height: 36px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Hakgyoansim Puzzle OTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const EditIcon = styled.img`
  position: absolute;
  right: 33px; /* ⭐️ 오른쪽에서 33px */
  width: 20px; /* 필요하다면 크기 고정 */
  height: 20px;
  cursor: pointer;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 393px;
  height: auto;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Search = styled.div`
  width: 353px;
  height: 36px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 9px;
  margin-top: 22px;
  margin-bottom: 18px;
`;

export const CategoryBox = styled.div`
  width: 313;
  max-width: 393px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 20px;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Category = styled.div`
  width: fit-content;
  padding: 3px 12px;
  height: 32px;
  border-radius: 30px;
  border: 1px solid #5061ff;
  background: ${(props) => (props.$active ? "#5061FF" : "#fff")};
  color: ${(props) => (props.$active ? "#fff" : "#000")};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    background: #5061ff;
    color: #fff;
  }
`;

export const Text = styled.text`
  color: #000;
  text-align: left;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 15px;
  align-self: flex-start; /* 부모 flex 기준 왼쪽으로 붙음 */
  margin-left: 26px; /* 왼쪽에서 26px */
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: row; /* 오타 수정 */

  align-items: center;
  width: 353px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 2px #f2f2f2;

  margin-bottom: 15px;
`;

export const PJImg = styled.img`
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  margin-left: 10px;
  margin-right: 7px;
`;

export const PJ = styled.div`
  width: 200px;
  height: 118px;
`;

export const PJName = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15.5px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const PJDetail = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const PJContent = styled.div`
  display: flex; /* 핵심: 가로 배치 */
  flex-direction: column; /* 텍스트 + 아이콘 나란히 */
  justify-content: space-between; /* 양쪽 끝 정렬 */
  align-items: start; /* 세로 가운데 */
  width: 100%;
  padding: 10px; /* 필요하면 여백 */
`;

export const IconWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px; /* 아이콘 간 간격 */
  justify-content: flex-end;
  align-items: center;
`;
