import * as F from "../../styles/StyledFindTeam.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StatusBox from "../Components/StatusBox.jsx";
import { ReactComponent as Heart } from "../../image/heart.svg";
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/find`);
  };

  const token = localStorage.getItem("access_token");
  const [person, setPerson] = useState(null);
  const { user_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/finds/${user_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPerson(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [user_id, token]);

  const goAdd = (e) => {
    e.stopPropagation(); // 상위 onClick 방지!
    navigate(`/addgroup`);
  };

  if (!person) {
    return <div>로딩중...</div>;
  }

  if (person) {
    return (
      <F.Container>
        <F.Bar>
          <img src={`${process.env.PUBLIC_URL}/image/halfX.svg`} onClick={goback} />
          <div className="center">팀원 정보</div>
        </F.Bar>
        <F.LogBox>
          <img className="picture" src={`${process.env.PUBLIC_URL}/image/profile.png`} />
          <Heart
            style={{
              zIndex: "10",
              position: "absolute",
              right: "17",
              top: "120",
            }}
          ></Heart>

          <F.ProfileInform>
            <F.ProfileNameBig>{person.name}</F.ProfileNameBig>
            <F.AddBtnSmall style={{ width: "69px" }} onClick={goAdd}>
              그룹 추가
            </F.AddBtnSmall>
            <StatusBox info={person}></StatusBox>
          </F.ProfileInform>
        </F.LogBox>
      </F.Container>
    );
  }
};

export default Detail;
