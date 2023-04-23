import PropTypes from 'prop-types';
import { Container } from "./Container.styled";


export const ContainerMain = ({ children }) => {
    return <Container>{children}</Container>;
}

ContainerMain.propTypes = {
    children: PropTypes.node,
}