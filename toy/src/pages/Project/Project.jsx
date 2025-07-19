import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../../styles/Project/styleProject";
import BottomNav from "../Components/BottomNav.jsx";
const Project = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const categories = ["전체", "조별과제", "공모전/대회", "대외활동", "기타"];

  const GoSignUp = () => {
    navigate(`/SignUp_complete`);
  };

  return (
    <P.Container>
      <P.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={() => window.history.back()}
        />
        <div className="center">프로젝트</div>
        <img
          src={`${process.env.PUBLIC_URL}/image/heart.svg`}
          style={{ width: "26px" }}
        />
      </P.Bar>

      <P.ProjectContainer>
        <P.Search>
          <img
            src={`${process.env.PUBLIC_URL}/image/search.svg`}
            width="18px"
            height="18px"
            alt="search"
          />
        </P.Search>

        <P.CategoryBox>
          {categories.map((item) => (
            <P.Category
              key={item}
              $active={selectedCategory === item}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </P.Category>
          ))}
        </P.CategoryBox>

        <P.Text>3개의 게시물</P.Text>

        <P.ProjectBox onClick={() => navigate(`/Project_detail`)}>
          <P.PJImg
            src={`${process.env.PUBLIC_URL}/image/PJImg_small.svg`}
          ></P.PJImg>

          <P.PJContent>
            <P.PJName>[공모전] | 2025 Design De∙∙∙</P.PJName>
            <P.PJDetail>
              2025년 DesignDen 대학생 로고 디자인 공모전을 진행합니다!
            </P.PJDetail>

            <P.IconWrap>
              <img
                src={`${process.env.PUBLIC_URL}/image/comment.svg`}
                alt="comment"
                width="17px"
                height="22px"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/scrap_blue.svg`}
                alt="like"
                width="18px"
                height="18px"
              />
            </P.IconWrap>
          </P.PJContent>
        </P.ProjectBox>
        <P.ProjectBox onClick={() => navigate(`/Project_detail`)}>
          <P.PJImg
            src={`${process.env.PUBLIC_URL}/image/PJImg_small.svg`}
          ></P.PJImg>

          <P.PJContent>
            <P.PJName>[공모전] | 2025 국가유산 재∙∙∙</P.PJName>
            <P.PJDetail>
              2025년 국가유산 재난안전 공모전을 진행합니다.
            </P.PJDetail>
            <P.IconWrap>
              <img
                src={`${process.env.PUBLIC_URL}/image/comment.svg`}
                alt="comment"
                width="17px"
                height="22px"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/scrap_blue.svg`}
                alt="like"
                width="18px"
                height="18px"
              />
            </P.IconWrap>
          </P.PJContent>
        </P.ProjectBox>
      </P.ProjectContainer>
      <BottomNav idx={0}></BottomNav>
    </P.Container>
  );
};

export default Project;
