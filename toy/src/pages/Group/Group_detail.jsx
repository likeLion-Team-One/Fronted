import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "../../styles/Group/styleGroup_detail";

const MyGroupDetail = () => {
  const project = {
    comments: [
      {
        author: "김멋사",
        date: "2025.03.02",
        text: "인원 수에 제한이 있을까요..?",
      },
    ],
  };
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={() => window.history.back()}
        />
        <div className="center">그룹 정보</div>
      </S.Bar>

      {/* 프로필 + 좋아요·댓글 */}
      <S.Wrapper>
        <S.GroupProfile src={`${process.env.PUBLIC_URL}/image/groupIcon.svg`} />
        <S.IconRow>
          <S.CommentImg src={`${process.env.PUBLIC_URL}/image/comment.svg`} />
          <S.IconCount>1</S.IconCount>
          <S.ScrapImg src={`${process.env.PUBLIC_URL}/image/scrap_blue.svg`} />
          <S.IconCount>9</S.IconCount>
        </S.IconRow>
      </S.Wrapper>

      {/* 그룹명 */}
      <S.GroupName>제아페 1팀</S.GroupName>

      <S.Section3>
        <S.SectionTitle>프로젝트</S.SectionTitle>
        <S.PJBox>
          <S.PJImg src={`${process.env.PUBLIC_URL}/image/GroupPJImg.svg`} />
          <div>
            <S.PJTitle>[공모전] | 제46회 제일기획 ∙∙∙</S.PJTitle>
            <S.PJDetail>
              2025년 3월, 제 46회 제일기획 아이디어 페스티벌 공모작을
              모집합니다!
            </S.PJDetail>
          </div>
        </S.PJBox>
      </S.Section3>
      <S.Section3
        style={{ display: "flex", alignItems: "center", gap: "16px" }}
      >
        <S.SectionTitle>파트</S.SectionTitle>
        <S.SectionText>기획, 촬영</S.SectionText>
      </S.Section3>
      {/* 팀원 */}
      <S.Section3>
        <S.SectionTitle>팀원</S.SectionTitle>
        <S.TeamList>
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
          <S.MemberIcon />
        </S.TeamList>
      </S.Section3>
      <S.InfoBox>
        안녕하세요, 제일기획 아이디어 페스티벌
        <br /> 삼성카드 부문을 준비하고 있는 1팀입니다.
      </S.InfoBox>
      {/* 댓글 섹션 */}
      <S.CommentSection>
        <S.CommentCount>댓글 1 {project.commentCount}</S.CommentCount>
        <hr style={{ color: "#D9D9D9" }} />
        {project.comments.map((c, i) => (
          <S.Comment key={i}>
            <S.CommentHeader>
              <S.CommentAuthor>{c.author}</S.CommentAuthor>
              <S.CommentDate>{c.date}</S.CommentDate>
            </S.CommentHeader>
            <S.CommentText>{c.text}</S.CommentText>
          </S.Comment>
        ))}
      </S.CommentSection>

      {/* 입력창 */}
      <S.InputWrapper>
        <S.Input />
        <S.SendButton>
          <img src={`${process.env.PUBLIC_URL}/image/up.svg`} />
        </S.SendButton>
      </S.InputWrapper>
    </S.Container>
  );
};

export default MyGroupDetail;
