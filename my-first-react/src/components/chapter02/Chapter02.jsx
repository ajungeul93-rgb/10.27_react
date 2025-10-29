import { styled } from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid lightgray;
  margin: 40px;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const members = [
  { memberId: "admin", memberName: "짱구", email: "jjang9@kh.com" },
  { memberId: "user01", memberName: "철수", email: "ironwater@kh.com" },
  { memberId: "user02", memberName: "유리", email: "glass@kh.com" },
];

const MemberInfo = (props) => {
  return (
    <StyledDiv color={props.member.color}>
      <h3>아이디 : {props.member.memberId}</h3>
      <strong>이름 : {props.member.memberName}</strong>
      <p>이메일 : {props.member.email}</p>
    </StyledDiv>
  );
};

const TestComponent = () => {
  return (
    <>
      프롭스값 + 2 : <div>꽥</div>
    </>
  );
};

const Chapter02 = () => {
  return (
    <>
      {members.length > 0 ? (
        members.map((e) => <MemberInfo member={e} key={e.memberId} />)
      ) : (
        <h1>조회결과가 없습니다.</h1>
      )}
      <pre>
        props사용시 주의할 점!
        <br />
        React의 함수형 컴포넌트는 항상 Pure하게 만들어야함!!
      </pre>
    </>
  );
};

export default Chapter02;
