import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout";
import LoginButton from "./login";
import { Fragment } from "react";
function User() {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <div className="auth">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </Fragment>
  );
}

export default User;
