import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../../styles/styleProfile_edit";
import * as SU from "../../styles/styleSignUp";
import axios from "axios";

const Profile_edit = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("선택하세요");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedLocation(option);
    setIsOpen(false);
  };

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const onChangeAge = (e) => {
    const value = e.target.value;
    setAge(value);
  };

  const onChangeJob = (e) => {
    const value = e.target.value;
    setJob(value);
  };

  const onChangeEducation = (e) => {
    const value = e.target.value;
    setEducation(value);
  };

  const onChangeMajor = (e) => {
    const value = e.target.value;
    setMajor(value);
  };

  const onChangeDetail = (e) => {
    const value = e.target.value;
    setDetail(value);
  };

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
    { code: "gangwon", name: "강원특별자치도" },
    { code: "chungbuk", name: "충청북도" },
    { code: "chungnam", name: "충청남도" },
    { code: "jeonbuk", name: "전북특별자치도" },
    { code: "jeonnam", name: "전라남도" },
    { code: "gyeongbuk", name: "경상북도" },
    { code: "gyeongnam", name: "경상남도" },
    { code: "jeju", name: "제주특별자치도" },
  ];

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [job, setJob] = useState("");
  const [education, setEducation] = useState("");
  const [major, setMajor] = useState("");
  const [detail, setDetail] = useState("");

  const token = localStorage.getItem("access_token");

  const handleSignupBtn = () => {
    if (!name || !selected || !age || !region || !job) {
      console.log("필수 항목이 누락되었습니다.");
      return;
    }

    axios
      .post(
        `http://127.0.0.1:8000/profile_update/`,
        {
          name: name,
          age: age ? parseInt(age, 10) : null,
          gender: selected,
          region: region,
          district: district,
          job: job,
          education: education,
          major: major,
          detail: detail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        localStorage.getItem("user_id");
        navigate(`/profile/`);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.log("error", error.response.data);
        }
      });
  };

  return (
    <P.Container>
      <P.Header>
        <P.BackBtn onClick={() => window.history.back()} src={`${process.env.PUBLIC_URL}/image/halfX.svg`} alt="뒤로가기" />
        <P.PText>프로필 수정</P.PText>
      </P.Header>

      <P.ProfileBox>
        <img src={`${process.env.PUBLIC_URL}/image/Profile.svg`} alt="Profile" />
      </P.ProfileBox>

      <P.EditContainer>
        <P.Text>
          이름<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Box name="name" value={name} onChange={onChangeName} />

        <P.Text>
          성별<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Wrapper name="gender" value={gender}>
          <P.GenderOption selected={selected === "male"} onClick={() => setSelected("male")}>
            남성
          </P.GenderOption>
          <P.GenderOption selected={selected === "female"} onClick={() => setSelected("female")}>
            여성
          </P.GenderOption>
        </P.Wrapper>

        <P.Text>
          거주지<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.DropdownWrapper>
          <P.DropdownBox onClick={toggleDropdown}>
            {region ? locations.find((opt) => opt.code === region)?.name : "선택하세요"}
            <P.Arrow isOpen={isOpen}>▼</P.Arrow>
          </P.DropdownBox>

          {isOpen && (
            <P.DropdownOptions>
              {locations.map((opt) => (
                <P.DropdownOption
                  key={opt.code}
                  onClick={() => {
                    setRegion(opt.code); // 코드 저장
                    setIsOpen(false);
                  }}
                >
                  {opt.name}
                </P.DropdownOption>
              ))}
            </P.DropdownOptions>
          )}
        </P.DropdownWrapper>

        <P.Text>
          나이<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Box name="age" value={age} onChange={onChangeAge} />

        <P.Text>
          직업<span style={{ color: "#E01B1B" }}>*</span>
        </P.Text>
        <P.Box name="job" value={job} onChange={onChangeJob} />

        <P.Text>학력</P.Text>
        <P.Box name="education" value={education} onChange={onChangeEducation} />

        <P.Text>전공</P.Text>
        <P.Box name="major" value={major} onChange={onChangeMajor} />

        <P.Text>세부 설명</P.Text>
        <P.TextArea name="detail" value={detail} onChange={onChangeDetail} />

        <SU.NextBtn onClick={handleSignupBtn}>다음</SU.NextBtn>
      </P.EditContainer>
    </P.Container>
  );
};

export default Profile_edit;
