import PropTypes from "prop-types";
import { Item, Span, Avatar, Name } from "./FriendListItem.styled";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
     <Item>
        <Span data-action = {isOnline}></Span>
        <Avatar src={avatar} alt="User avatar" width="60" />
        <Name>{name}</Name>
     </Item>
    )
}
export default FriendListItem;

FriendListItem.propTypes = {
    "avatar": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "isOnline": PropTypes.bool.isRequired,
}