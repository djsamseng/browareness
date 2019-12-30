import Header from "./header";
import {Button} from "reactstrap";

const style = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};

const buttonStyle = {
    backgroundColor: "red"
};

const Layout = props => {
    return (
        <div style={style}>
            <Header />
            {props.children}
            <Button color="danger">Danger!</Button>
        </div>
    );
};

export default Layout;