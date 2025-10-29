import 


const Chapter03_2 = () => {
    const [count, setCount] = useState(0);

    const minusButton = () => {
        setCount((count) => count - 1);
    }
    /*
        이 컴포넌트가 첫 렌더링(MOUNT)될 때 무언가 수행을 하고 싶다.

        useEffect Hook사용

        [] => 첫 렌더링 때만 수행하고 싶다.

        [state, state, state] => 각각의 state가 set될 때마다 수행하겠다.

        HOOK사용 시 주의사항
        - HOOK 최상의 블럭에서만 호출해서 사용하는 것을 권장(반복, 조건, 함수 내부에서 호출금지)
        - React의 함수컴포넌트에서만 사용가능(클래스 컴포넌트에서는 사용 불가)
    */
    useEffect(() => {
        alert(count + "번 클릭");
    }, [count]);

    return (
    <>
        <h3>{count}</h3>
        <h3>
            <button onClick={(count) => setCount(count -1)}>감소버튼</button>
        </h3>
    
    
    </>)
}

export default Chapter03_2;
