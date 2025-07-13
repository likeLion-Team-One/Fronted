import styled from "styled-components";

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
export const CloseButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 18px;
  margin: 0;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  color: #000;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 12px 0 5px;
`;

export const Input = styled.input`
  width: 353px;
  height: 55px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
`;

// 기존 Input과 구분 위해 이름 변경
export const SearchInput = styled.input`
  width: 353px;
  height: 55px;
  padding: 0 40px 0 12px; // 오른쪽 여백 확보
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 353px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 12px;
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

// 텍스트 에어리어
export const Textarea = styled.textarea`
  width: 353px;
  height: 170px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #5773ff;
  background: #fff;
  font-size: 14px;
  resize: none;
  box-sizing: border-box;
`;

// 팀원 리스트
export const TeamList = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
`;

// 멤버 추가 버튼
export const AddMember = styled.div`
  min-width: 100px;
  height: 100px;
  border: 1px solid #5061ff;
  border-radius: 50%;
  color: #5061ff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;

  gap: 4px;
`;

// 멤버 아이템
export const Member = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const MemberCircle = styled.img`
  width: 100px;
  height: 100px;
`;

// 제출 버튼
export const SubmitButton = styled.button`
  width: 353px;
  height: 55px;
  margin: 24px 0 0;
  background: #5773ff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 30px;
`;

export const PlusImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const Addtext = styled.div`
  color: #969696;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
