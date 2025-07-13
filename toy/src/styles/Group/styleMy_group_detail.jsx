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

/* ===== 프로필 그리드 & 배경 ===== */
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  heigth: 100px;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
  border-radius: 12px;
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 393px;
  height: 85px;
  background: rgba(80, 97, 255, 0.05);
  z-index: 0;
`;

export const GroupProfile = styled.img`
  width: 122px;
  height: 122px;
  margin-left: 137px;
`;

export const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  background: #ddd;
  border-radius: 50%;
`;

/* 댓글·좋아요 아이콘 */
export const IconWrapper = styled.div`
  position: absolute;
  /* 그리드 높이의 절반 지점에 수직 중앙 정렬 */
  top: 50%;
  left: calc(136px + 8px);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  color: #5061ff;
  font-size: 15px;
  font-family: "BM JUA_OTF";
`;

export const IconComment = styled.img`
  width: 18px;
  height: 18px;
`;

export const Like = styled.img`
  width: 18px;
  height: 18px;
`;

/* 그룹명 */
export const GroupName = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

/* 메타 정보 리스트 */
export const MetaList = styled.div`
  width: 100%;
  margin-bottom: 30px;
  transform: translateX(80px);
  margin-top: 30px;
`;
export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 20px;
`;
export const MetaLabel = styled.span`
  display: inline-block;
  width: 100px;

  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const MetaValue = styled.span`
  font-size: 15px;
  color: #000;
  font-family: SUIT;
  font-weight: 400;
`;

export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  gap: 16px;
  transform: translateX(80px);
`;

export const SectionTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 8px;
  margin-left: 2px;
  font-family: SUIT;
  font-weight: 800;
`;
export const SectionContent = styled.p`
  font-size: 15px;
`;

/* 팀원 */
export const TeamList = styled.div`
  display: flex;
  gap: 10px;
`;
export const MemberIcon = styled.div`
  width: 74px;
  height: 74px;
  background-image: url(${process.env.PUBLIC_URL}/image/Profile.svg);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  transform: translateX(-40px);
`;

/* 진행률 */
export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 33px;
  margin-bottom: -6px;
`;
export const ProgressSection = styled.div`
  width: 327px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProgressBar = styled.div`
  position: relative;
  flex: 1;
  height: 13px;
  background: #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 8px;
`;
export const ProgressFill = styled.div`
  height: 100%;

  border-radius: 20px;
  background: #ff6272;
  box-shadow: 0px 0px 4px 0px #fff;
`;
export const ProgressTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  margin: 0 0 8px 160px;
`;

export const ProgressPercent = styled.div`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
`;

export const State = styled.img`
  width: 10px;
  height: auto;
  margin-bottom: 5px; /* 미세 조정 필요시 이 값을 조절 */
`;

export const ProgressStage = styled.div`
  width: 100%;
  margin-right: 90px;
  text-align: right;
  color: #2647ff;
  background: transparent;
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
`;
