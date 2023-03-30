import {Button, Typography, Row, Col} from "antd"
import styles from "@/styles/Navbar.module.scss"
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Row justify={"space-between"}>
                <Col>
                    <Typography.Text strong className={styles.title}>HYRDD</Typography.Text>
                </Col>
                <Col>
                    <Button>
                        <Typography.Text strong>العربية</Typography.Text>
                    </Button>
                </Col>
            </Row>
        </nav>
     );
}
 
export default Navbar;