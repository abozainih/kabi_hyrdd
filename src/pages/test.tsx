import CreateForm from "@/components/dashboard/createForm";
import {Row,Col} from "antd"

const Test = () => {
    return ( 
        <Row>
            <Col span={8}>
                <CreateForm/>
            </Col>
        </Row>
     );
}
 
export default Test;