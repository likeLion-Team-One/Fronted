import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Group/styleProgress";

const ProjectDetail = () => {
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={() => window.history.back()}
        />
        <div className="center">프로젝트 상세</div>
      </S.Bar>
      <S.Text>직접 입력</S.Text>
      <S.Input>
        <input
          type="number"
          min="0"
          max="100"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "10px", // camelCase
            padding: "0 35px 0 15px", // 오른쪽에 % 아이콘 공간 확보
            fontSize: "15px",
            fontFamily: "SUIT",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <S.Percent>%</S.Percent>
      </S.Input>
      <S.Limit>* 0부터 100까지의 숫자</S.Limit>
    </S.Container>
  );
};

export default ProjectDetail;
