import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h1 className="p-10 m-2 text-center">
      This site is made with ❤ by {user.name}
    </h1>
  );
};

export default Footer;
