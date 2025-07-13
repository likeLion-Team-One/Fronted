// src/styles/Project/styleProject_detail.js
import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: "SUIT", sans-serif;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const BackBtn = styled.img`
  position: absolute;
  left: 20px;
  height: 23px;
  flex-shrink: 0;
  width: 15;
  height: 27;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;

export const Image = styled.img`
  width: 128.196px;
  height: 181px;
  margin-bottom: 12px;
  margin-left: 120px;
`;
export const ImageBox = styled.div`
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
export const ImageWrap = styled.div`
  margin-left: 237px;
  display: flex;
  flex-direction: row;
  gap: 12px; /* 이미지와 아이콘 간 간격 */
  width: 100%;
`;
export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center; /* ✅ 이미지 옆에서 수직 가운데 정렬 */
  margin-bottom: 12px;
`;

export const IconCount = styled.div`
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentImg = styled.img`
  width: 18px;
  height: 18px;
  color: #5061ff;
`;
export const ScrapImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const ProjectTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: #5061ff;
  font-family: "BMJUA";
  margin-bottom: 20px;
`;

export const MetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 24px;
`;

export const MetaItem = styled.div`
  display: flex;
  justify-content: column;
  align-items: flex-start;
  gap: 10px;
`;

export const MetaLabel = styled.span`
  font-size: 15px;
  color: #000;
  font-family: SUIT;
  font-weight: 800;
  width: 120px;
  flex-shrink: 0;
`;

export const MetaValue = styled.span`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  flex: 1;
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
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 8px 16px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  outline: none;
`;

export const SendButton = styled.button`
  background: none;
  border: none;
  color: #5061ff;
  font-size: 18px;
  cursor: pointer;
`;
