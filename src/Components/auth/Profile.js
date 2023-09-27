import { Fragment } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {isAuthenticated && (
        <div className="account">
          <div className="user-icon">
            <AiOutlineUser />
          </div>
          <p>Hello, {user.name}</p>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
