import React from "react";
import "./userAvatar.css"

function UserAvatar({ userName }) {
  return (
    <div>
      {userName ? (
        <div className="avatar-logged-in" title={userName}>
          {userName[0]}
        </div>
      ) : (
        <div className="avatar-logged-out"></div>
      )}
    </div>
  );
}
export default UserAvatar;
