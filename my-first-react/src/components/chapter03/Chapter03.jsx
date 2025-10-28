const Chapter03 = () => {

    let count = 0;

    const onClickButton = () {
        count += 1;
        console.log(count);
    };

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