import "./Header.css";

const Header = () => {

    return (

        <>
            <table className="tableHeader">
                <thead>
                    <tr>
                        <th colSpan={3}><a href="">1.</a></th>
                        <th><a href="">2.</a></th>
                        <th><a href="">3.</a></th>
                    </tr>
                </thead>


            </table>
        </>

    );

};

export default Header;