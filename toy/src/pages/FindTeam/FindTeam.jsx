import * as F from "../../styles/StyledFindTeam.jsx";
import Profile from "../../pages/Components/Profile.jsx";
import BottomNav from "../Components/BottomNav.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Find = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/home`);
  };

  const goDetail = (person) => {
    console.log("전달되는 데이터:", person);
    navigate(`/detail`, { state: { person } });
  };

  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState("");
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/finds/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserList(response.data.profiles);
        setTotalUser(response.data.totalUsers);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <F.Container>
      <F.Bar>
        <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`} onClick={goHome} />
        <div className="center">팀원 찾기</div>
        <img src={`${process.env.PUBLIC_URL}/image/heart.svg`} style={{ width: "26px" }} />
      </F.Bar>
      <F.LogBox>
        <F.Search>
          <input></input>
          <img src={`${process.env.PUBLIC_URL}/image/search.svg`} alt="search" />
        </F.Search>
        <F.Inform>{totalUser}명의 팀원</F.Inform>
        <F.ProfileWrapper>
          {userList.map((e) => (
            <Profile name={e.name} status={e.job} onClick={() => goDetail(e)} />
          ))}
        </F.ProfileWrapper>
      </F.LogBox>
      <BottomNav idx={1}></BottomNav>
    </F.Container>
  );
};

export default Find;
