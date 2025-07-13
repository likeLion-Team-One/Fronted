import React from "react";
import * as S from "../../styles/Group/styleMy_group_detail";
import { useNavigate } from "react-router-dom";
const MyGroupDetail = () => {
  const navigate = useNavigate();
  const GoProgress = () => {
    navigate(`/progress`);
  };
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/image/halfX.svg`}
          onClick={() => window.history.back()}
        />
        <div className="center">그룹정보</div>
        <img
          src={`${process.env.PUBLIC_URL}/image/heart.svg`}
          style={{ width: "26px" }}
        />
      </S.Bar>

      {/* 프로필 + 좋아요·댓글 */}
      <S.Wrapper>
        <S.GroupProfile src={`${process.env.PUBLIC_URL}/image/groupIcon.svg`} />
      </S.Wrapper>

      {/* 그룹명 */}
      <S.GroupName>제아페 1팀</S.GroupName>

      {/* 메타 정보 */}
      <S.MetaList>
        <S.MetaItem>
          <S.MetaLabel>프로젝트 유형</S.MetaLabel>
          <S.MetaValue>공모전</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaLabel>프로젝트 분야</S.MetaLabel>
          <S.MetaValue>광고</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaLabel>프로젝트 대상</S.MetaLabel>
          <S.MetaValue>대학생(학부)</S.MetaValue>
        </S.MetaItem>
        <S.MetaItem>
          <S.MetaLabel>파트</S.MetaLabel>
          <S.MetaValue>기획, 촬영</S.MetaValue>
        </S.MetaItem>
      </S.MetaList>

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

      {/* 진행률 */}
      <S.ProgressWrapper>
        <S.SectionTitle style={{ margin: "24px 33px" }}>진행률</S.SectionTitle>
        <S.ProgressTop>
          <S.ProgressPercent>48%</S.ProgressPercent>
          <S.State src={`${process.env.PUBLIC_URL}/image/down.svg`} />
        </S.ProgressTop>
        <S.ProgressSection>
          <S.ProgressBar style={{ margin: "0 0 0 33px" }}>
            <S.ProgressFill style={{ width: "48%" }} />
          </S.ProgressBar>
        </S.ProgressSection>
      </S.ProgressWrapper>
      <S.ProgressStage onClick={GoProgress}>입력</S.ProgressStage>
    </S.Container>
  );
};

export default MyGroupDetail;
