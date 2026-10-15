// 화면 확인용 가짜 데이터. Supabase를 연결하면 이 파일 대신 실제 데이터를 쓴다.

// 초대장: 제목·일시·장소·본문
export type Invitation = {
  id: string; // 추측하기 어려운 고유 ID (UUID)
  title: string;
  date: string; // 일시 (ISO 형식 문자열)
  place: string; // 주소를 글자로만 표시
  body: string;
};

// 참석 응답: 이름·참석 여부·동반 인원
export type InvitationResponse = {
  id: string;
  invitationId: string;
  name: string;
  status: "yes" | "no"; // yes=참석, no=불참 (AttendanceBadge와 같은 값)
  companions: number; // 본인을 뺀 동반 인원. 불참이면 0
};

export const mockInvitation: Invitation = {
  id: "3f8b2c1e-7a4d-4e9b-9c2a-5d6e8f1a2b3c",
  title: "지수의 서른 번째 생일 파티",
  date: "2026-11-21T18:30:00+09:00",
  place: "서울특별시 마포구 와우산로 94, 2층",
  body: "한 해 동안 고마웠던 분들을 모시고 조촐한 저녁 자리를 마련했어요.\n편하게 오셔서 함께 즐겨주세요!",
};

export const mockResponses: InvitationResponse[] = [
  {
    id: "a1c4e6f8-2b3d-4f5a-8c9e-1d2f3a4b5c6d",
    invitationId: mockInvitation.id,
    name: "김민준",
    status: "yes",
    companions: 2, // 동반 인원이 있는 참석
  },
  {
    id: "b2d5f7a9-3c4e-4a6b-9d0f-2e3a4b5c6d7e",
    invitationId: mockInvitation.id,
    name: "이서연",
    status: "yes",
    companions: 0, // 혼자 참석
  },
  {
    id: "c3e6a8b0-4d5f-4b7c-8e1a-3f4b5c6d7e8f",
    invitationId: mockInvitation.id,
    name: "박지호",
    status: "no",
    companions: 0, // 불참
  },
];
