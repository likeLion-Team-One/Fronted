import React, { useState } from "react";
import * as S from "../../styles/Group/styleCreate_group";

const GroupCreate = () => {
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={() => window.history.back()}
        />
        <div className="center">프로젝트 상세</div>
      </S.Bar>

      <S.Form>
        <S.Label>그룹명</S.Label>
        <S.Input />

        <S.Label>프로젝트</S.Label>
        <S.SearchWrapper>
          <S.SearchInput placeholder="프로젝트명 검색" />
          <S.SearchIcon src={`${process.env.PUBLIC_URL}/image/search.svg`} />
        </S.SearchWrapper>

        <S.Label>파트</S.Label>
        <S.Input />

        <S.Label>세부설명</S.Label>
        <S.Textarea />

        <S.Label>팀원</S.Label>
        <S.TeamList>
          <S.AddMember>
            <S.PlusImg
              src={`${process.env.PUBLIC_URL}/image/plusIcon.svg`}
            ></S.PlusImg>
            <S.Addtext>4/10</S.Addtext>
          </S.AddMember>

          <S.Member>
            <S.MemberCircle
              src={`${process.env.PUBLIC_URL}/image/addMember.svg`}
            />
            <S.MemberCircle
              src={`${process.env.PUBLIC_URL}/image/addMember.svg`}
            />
            <S.MemberCircle
              src={`${process.env.PUBLIC_URL}/image/addMember.svg`}
            />
          </S.Member>
        </S.TeamList>
      </S.Form>

      <S.SubmitButton>그룹 생성</S.SubmitButton>
    </S.Container>
  );
};

export default GroupCreate;
