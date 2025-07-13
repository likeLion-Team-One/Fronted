import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdChatbubbles, IoIosBookmark } from "react-icons/io";
import * as S from "../../styles/Project/styleProject_detail";

const ProjectDetail = () => {
  // 예시 데이터
  const project = {
    image: `${process.env.PUBLIC_URL}/image/PJImg.png`,
    title: "2025 국가유산 재난안전 공모전",
    meta: [
      { label: "프로젝트 유형", value: "공모전" },
      { label: "프로젝트 분야", value: "광고·홍보" },
      { label: "프로젝트 대상", value: "국민 누구나" },
      { label: "주최", value: "국가유산청" },
      { label: "공모기간", value: "2024.11.25~12.31" },
      { label: "사이트", value: "페이지 바로가기" },
    ],

    comments: [
      {
        author: "이동덕",
        date: "2025.03.02",
        text: "혹시 해당 공모전 언제까지 진행하는지 알 수 있을까요?",
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
        <div className="center">프로젝트 상세</div>
      </S.Bar>

      <S.ImageBox>
        <S.Image
          src={`${process.env.PUBLIC_URL}/image/PJImg.svg`}
          alt="프로젝트"
        />
        <S.IconRow>
          <S.CommentImg src={`${process.env.PUBLIC_URL}/image/comment.svg`} />
          <S.IconCount>1</S.IconCount>
          <S.ScrapImg src={`${process.env.PUBLIC_URL}/image/scrap_blue.svg`} />
          <S.IconCount>9</S.IconCount>
        </S.IconRow>
      </S.ImageBox>

      {/* 프로젝트 제목 */}
      <S.ProjectTitle>
        2025 국가유산
        <br />
        재난안전 공모전
      </S.ProjectTitle>

      {/* 메타 정보 */}
      <S.MetaList>
        {project.meta.map((item) => (
          <S.MetaItem key={item.label}>
            <S.MetaLabel>{item.label}</S.MetaLabel>
            <S.MetaValue>{item.value}</S.MetaValue>
          </S.MetaItem>
        ))}
      </S.MetaList>

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

      <S.InputWrapper>
        <S.Input />
        <S.SendButton>➤</S.SendButton>
      </S.InputWrapper>
    </S.Container>
  );
};

export default ProjectDetail;
