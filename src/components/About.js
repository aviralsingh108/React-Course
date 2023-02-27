import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is about us page</p>
      <Outlet />
      {/* <Profile name={"avifunc"} />
      <ProfileClass name={"avi"} age={10} /> */}
      <UserContext.Consumer>
        {({ user }) => {
          return (
            <h2>
              {user.name}
              {user.email}
            </h2>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default About;
