import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import userAvatar from '../../../../assets/userAvatar.svg'
export default function UserAvatar() {
    const user = useSelector((state) => state.user);
    return (
        <div className="user-avt">
      <CardImg className="user-avt__card__img" top width="100%" src={userAvatar} alt="Card image cap" />
    </div>
    );
}
