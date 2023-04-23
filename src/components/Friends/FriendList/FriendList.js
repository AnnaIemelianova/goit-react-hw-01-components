import { FriendListItem } from "../FriendListItem/FriendListItem";
import { List } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return <List>
        {friends.map(friend => (
            <FriendListItem friend={friend} />
        ))}
    </List>;
}
