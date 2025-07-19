import styled from "styled-components";

/* ===== 컨테이너 & 헤더 ===== */
export const Container = styled.div`
  position: relative;
  width: 393px;
  padding: 20px;
  box-sizing: border-box;
  font-family: SUIT, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-left: 10px;
`;

/* ===== 프로필 그리드 & 배경 ===== */
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center; /* ← 추가: Wrapper 내부를 수평 가운데 정렬 */
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

export const GroupProfile = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 60px);
  grid-template-rows: repeat(2, 60px);
  gap: 0;
  padding: 8px;
  border-radius: 12px;
  margin: 0 auto; /* ← 추가: 그리드 자체를 가운데로 */
  transform: translate(115px, 17px);
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
  font-family: "BM JUA_OTF";
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
  font-size: 15px;
  font-family: SUIT;
  font-weight: 800;
`;
export const MetaValue = styled.span`
  font-size: 13px;
  color: #000;
  font-size: 15px;
  font-family: SUIT;
  font-weight: 400;
`;

/* 섹션 공통 */
export const Section = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
export const Section2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  gap: 16px;
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

/* 프로젝트 카드 */
export const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0 0 2px 2px #f2f2f2;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 353px;
  height: 118px;
`;
export const ProjectImage = styled.div`
  width: 105px;
  height: 105px;
  background: #ddd;
  margin-right: 10px;
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-25px);
`;
export const ProjectText = styled.p`
  font-size: 17px;
  font-weight: 800;
  margin-bottom: 8px;
`;
export const ProjectDetail = styled.p`
  font-size: 12px;
  margin: 0;
`;

/* 팀원 */
export const TeamList = styled.div`
  display: flex;
  gap: 10px;
`;
export const MemberIcon = styled.div`
  width: 74px;
  height: 74px;
  background: #ddd;
  border-radius: 50%;
  transform: translateX(-40px);
`;

/* 소개 박스 */
export const IntroBox = styled.div`
  width: 100%;
  max-width: 296px;
  height: 162px;
  padding: 15px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0 0 2px 2px #f2f2f2;
  border-radius: 10px;
  font-size: 13px;
  margin-bottom: 20px;
`;

/* 진행률 */
export const ProgressWrapper = styled.div`
  width: 327px;
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
export const ProgressPercent = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #2647ff;
  margin-right: 8px;
`;
export const ProgressStage = styled.span`
  width: 50px;
  padding: 2px 4px;
  font-size: 12px;
  text-align: center;
  color: #2647ff;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2647ff;
  outline: none;
  margin-left: 8px;
`;

/* 댓글 */
export const CommentSection = styled.div`
  width: 100%;
`;
export const Comment = styled.div`
  margin-bottom: 20px;
`;
export const CommentAuthor = styled.span`
  font-weight: bold;
  font-size: 13px;
`;
export const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
  margin-left: 10px;
`;
export const CommentText = styled.p`
  font-size: 13px;
  margin-top: 5px;
`;

/* 댓글 입력 */
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 25px;
  overflow: hidden;
`;
export const Input = styled.input`
  flex: 1;
  border: none;
  padding: 10px 15px;
  outline: none;
`;
export const SendButton = styled.button`
  background: none;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  font-size: 18px;
`;
