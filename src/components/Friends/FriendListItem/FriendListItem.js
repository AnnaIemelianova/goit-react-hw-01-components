import PropTypes from 'prop-types';
import { Avatar, FriendItem, Name, Status } from "./FriendListItem.styled";

export const FriendListItem = ({friend: {avatar, name, isOnline }}) => {
    return (<FriendItem>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="60" height="60"/>
        <Name>{name}</Name>
    </FriendItem>)
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};
