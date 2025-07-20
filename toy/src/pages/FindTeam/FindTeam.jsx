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

  const goDetail = (user_id) => {
    console.log("전달되는 데이터:", user_id);
    navigate(`/detail/${user_id}`);
  };

  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState("");
  const token = localStorage.getItem("access_token");

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

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
        console.log(response.data.profiles);
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
        {chunkArray(userList, 2).map((group, idx) => (
          <F.ProfileWrapper key={idx}>
            {group.map((e, i) => (
              <Profile key={e.id || e.name || i} name={e.name} status={e.job} user_id={e.id} onClick={() => goDetail(e.id)} />
            ))}
          </F.ProfileWrapper>
        ))}
      </F.LogBox>
      <BottomNav idx={1}></BottomNav>
    </F.Container>
  );
};

export default Find;
