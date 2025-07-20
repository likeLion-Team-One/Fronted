import * as S from "../../styles/StyledFindTeam";

const ProfileInfo = ({ info }) => {
  let gender = "";

  if (info.gender === "female") {
    gender = "여성";
  } else {
    gender = "남성";
  }

  const locations = [
    { code: "seoul", name: "서울특별시" },
    { code: "busan", name: "부산광역시" },
    { code: "incheon", name: "인천광역시" },
    { code: "daegu", name: "대구광역시" },
    { code: "daejeon", name: "대전광역시" },
    { code: "gwangju", name: "광주광역시" },
    { code: "ulsan", name: "울산광역시" },
    { code: "sejong", name: "세종특별자치시" },
    { code: "gyeonggi", name: "경기도" },
    { code: "chungbuk", name: "충청북도" },
    { code: "chungnam", name: "충청남도" },
    { code: "jeonnam", name: "전라남도" },
    { code: "gyeongbuk", name: "경상북도" },
    { code: "gyeongnam", name: "경상남도" },
    { code: "gangwon", name: "강원특별자치도" },
    { code: "jeonbuk", name: "전북특별자치도" },
    { code: "jeju", name: "제주특별자치도" },
  ];

  const getName = (code) => {
    const loc = locations.find((opt) => opt.code === code);
    return loc ? loc.name : "";
  };

  const KoreanRegion = getName(info.region);

  return (
    <S.StatusTable>
      <table>
        <tr>
          <td class="category">성별</td>
          <td class="content">{gender}</td>
        </tr>
        <tr>
          <td class="category">나이</td>
          <td class="content">{info?.age}</td>
        </tr>
        <tr>
          <td class="category">거주지</td>
          <td class="content">{KoreanRegion}</td>
        </tr>
        <tr>
          <td class="category">직업</td>
          <td class="content">{info?.job}</td>
        </tr>
        <tr>
          <td class="category">학력</td>
          <td class="content">{info?.education}</td>
        </tr>
        <tr>
          <td class="category">전공</td>
          <td class="content">{info?.major}</td>
        </tr>
      </table>
      <S.UserIntro>
        <div>{info?.detail}</div>
      </S.UserIntro>
    </S.StatusTable>
  );
};

export default ProfileInfo;
