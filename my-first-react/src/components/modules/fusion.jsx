import Button from "./Button";
import ExportData from "./ExportData";
import FirstComponent from "./FirstComponent";
import Table from "./table";
import TestText from "./TestText";
import { WhatIsJsx, WhatIsReact } from "./WhatIsJsx";
import Image from "./Image";

const Fusion = () => {
    return (
        <>
            <FirstComponent />
            <WhatIsReact />
            <WhatIsJsx />
            <Button />
            <TestText />
            <Table />
            <ExportData />
            <Image />
        </>

    );
}

export default Fusion;