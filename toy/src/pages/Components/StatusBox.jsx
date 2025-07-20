import * as S from "../../styles/StyledFindTeam";

const ProfileInfo = ({ info }) => {
  let gender = "";

  if (info.gender === "female") {
    gender = "여성";
  } else {
    gender = "남성";
  }

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
          <td class="content">{info?.region}</td>
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
