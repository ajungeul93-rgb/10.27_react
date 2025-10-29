import { useState } from "react";

const Chapter03 = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    console.log(count);
    setCount((prevCount) => prevCount + 1);
  };

  /*
      버튼을 클릭했을 때 setter를 이용해서 state를 변경했더니
      수치가 바뀌고 화면이 변경됨!

      컴포넌트가 재렌더링 되었기 때문에
      함수형 컴포넌트는 State(상태)가 변경될 때마다 처음부터 다시 수행됨.
      React는 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 반영.
  */

  return (
    <>
      <h1>완전 중요한 친구</h1>
      <br />
      <h3>{count}</h3>
      <button onClick={onClickButton}>나 클릭하면 숫자 증가함</button>
    </>
  );
};

export default Chapter03;
