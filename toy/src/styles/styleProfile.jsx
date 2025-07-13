import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 850px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  flex-shrink: 0;
  width: 15px; /* ✅ 수정: width 속성 잘못된 형태로 되어 있었음 */
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

export const Header = styled.div`
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  margin-left: 20px; /* ✅ flex-start 기준으로 정렬 보정 */
  margin-top: 20px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px; /* ✅ 정렬 맞춤 */
  margin-top: 20px;
`;

export const ProfileImg = styled.img`
  width: 115px;
  height: 115px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const LogIn = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 15px; /* 줄 간 간격 */
  margin-left: 21px;
  margin-top: 21px;
`;

export const LogIn_please = styled.div`
  width: 137px;
  height: 23px;
  flex-shrink: 0;
  color: #5061ff;
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BlackText = styled.span`
  color: #000;
`;

export const BenefitText = styled.div`
  margin-top: 4px;
  color: #000;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 400;
`;

export const Edit = styled.div`
  width: 353px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5061ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 24px;
  margin-left: 20px; /* ✅ 왼쪽 정렬 */
`;

export const Stories = styled.div`
  margin-top: 40px;
  width: 353px;
  color: #5061ff;
  font-family: "BM JUA_OTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
`;

export const StoriesBox = styled.div`
  width: 353px; /* ✅ 더 줄임: 305 + padding(24*2) = 시각적 총 353px */
  padding: 16px 0px;
  border-radius: 10px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StoryRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 144px; /* 내 그룹 <-> 찜 간 간격 */
  margin-bottom: 24px;
  margin-left: 16px;
`;

export const Story = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 393px;
  height: 70px;
  color: #969696;
  text-align: center;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const NProject = styled.div`
  display: flex;
  width: 76px;
  height: 13px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

export const NSearch = styled.div`
  display: flex;
  width: 76px;
  height: 13px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

export const NHome = styled.div`
  display: flex;
  width: 76px;
  height: 13px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

export const NGroup = styled.div`
  display: flex;
  width: 76px;
  height: 13px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

export const NMy = styled.div`
  display: flex;
  width: 76px;
  height: 13px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;
