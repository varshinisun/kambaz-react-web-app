import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation">
      {!currentUser && (
        <>
          <Link to="/Kambaz/Account/Signin" className={pathname === "/Kambaz/Account/Signin" ? "active" : ""}>
            Signin
          </Link>
          <br/>
          <Link to="/Kambaz/Account/Signup" className={pathname === "/Kambaz/Account/Signup" ? "active" : ""}>
            Signup
          </Link>
          <br/>
        </>
      )}

      {currentUser && (
        <Link to="/Kambaz/Account/Profile" className={pathname === "/Kambaz/Account/Profile" ? "active" : ""}>
          Profile
        </Link>
      )}
    </div>
  );
}
