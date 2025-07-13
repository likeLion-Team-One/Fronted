import styled from "styled-components";

/* 전체 컨테이너 */
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
/* 프로필 래퍼 */
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
  background: #eef3ff;
  width: 100%;
  height: 80px;
  border-radius: 12px;
`;

/* 그룹 프로필 이미지들 */
export const GroupProfile = styled.img`
  width: 122px;
  height: 122px;
  margin-left: 137px;
`;
export const IconWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px; /* 아이콘 간 간격 */
  justify-content: flex-end;
  align-items: center;
`;
export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center;
  margin-bottom: 12px;
`;
export const CommentImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 18px;
  height: 18px;
  color: #5061ff;
`;
export const ScrapImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 18px;
  height: 18px;
`;
export const IconCount = styled.div`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

/* 그룹명 */
export const GroupName = styled.h2`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
`;

export const PJBox = styled.div`
  width: 353px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 7px;
  padding: 7px 10px;
`;
export const PJTitle = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const PJDetail = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PJImg = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 10px;
`;
/* 팀원 섹션 */
export const Section3 = styled.div`
  width: 353px;
  margin-bottom: 24px;
`;
export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const SectionText = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;
export const TeamList = styled.span`
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
`;

export const InfoBox = styled.div`
  width: 296px;
  height: 162px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  padding: 10px 13px;
  margin-left: 20px;
  margin-bottom: 42px;
`;
export const CommentSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const CommentCount = styled.div`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Comment = styled.div`
  margin-bottom: 12px;
`;
export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  margin-bottom: 4px;
`;
export const CommentAuthor = styled.span`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 8px;
`;

export const CommentDate = styled.span`
  color: #000;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentText = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 4px;
`;

export const InputWrapper = styled.div`
  width: 393px;
  height: 80px;
  flex-shrink: 0;
  background: rgba(80, 97, 255, 0.05);
  box-shadow: 0px 0px 2px 2px #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Input = styled.input`
  width: 310px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;

  outline: none;
`;

export const SendButton = styled.button`
  background: #fff;
  border: 1px solid #5061ff;
  border-radius: 30px;
  cursor: pointer;
  width: 37px;
  height: 37px;
  flex-shrink: 0;
`;
