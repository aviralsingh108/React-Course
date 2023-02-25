import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is about us page</p>
      <Outlet />
      <Profile name={"avifunc"} />
      <ProfileClass name={"avi"} age={10} />
    </div>
  );
};

export default About;
