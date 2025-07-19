import styled from "styled-components";

// 전체 페이지 컨테이너
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

// 검색창
export const SearchBar = styled.div`
  width: 353px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
  margin-bottom: 20px;
  margin-top: 40px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  font-family: "SUIT", sans-serif;
  background: transparent;
`;

// 탭 메뉴
export const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 353px;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  color: ${(props) => (props.active ? "#5061FF" : "#969696")};
  cursor: pointer;
  font-family: "BMJUA";
  font-size: 20px;
  border-bottom: ${(props) => (props.active ? "3px solid #5061ff" : "none")};
  padding-bottom: 5px;
`;

// 그룹 개수와 필터
export const GroupCount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 353px;
  color: #000;
  font-family: "SUIT";
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const FilterIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

// 그룹 리스트
export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
`;

// 그룹 카드
export const GroupCard = styled.div`
  width: 353px;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const GroupThumbnail = styled.img`
  width: 87px;
  height: 87px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

export const GroupInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 87px;
`;

export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5061ff;
  font-family: "BMJUA";
  font-size: 20px;
`;

export const MemberCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #5061ff;
  gap: 4px;

  &::before {
    content: "";
    display: inline-block;
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    width: 15px;
    height: 17px;
  }
`;

export const GroupTags = styled.div`
  font-family: "SUIT";
  font-size: 10px;
  color: #000;
  font-weight: 600;
`;

export const GroupBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 34 px;
`;

export const Comment = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Like = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const RequestButton = styled.div`
  padding: 6px 7px;
  border-radius: 20px;
  border: 1px solid #5061ff;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

// 플로팅 버튼
export const FloatingAdd = styled.div`
  position: absolute;
  right: 20px;
  bottom: 115px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;
`;
export const PlusIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;
// 전체 그룹 컨테이너
export const GroupContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  background: linear-gradient(180deg, rgba(220, 234, 255, 0.3) 0%, #fff 100%);
  flex: 1;
`;
