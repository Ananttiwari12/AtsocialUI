import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import Friendlistcomponent from "scenes/MainPost/Friendlistcomponent";
import Userpost from "scenes/MainPost/Userpost";
import Postcontainer from "scenes/MainPost/Postcontainer";
import Leftcontainer from "Leftcontainer/Leftcontainer";
// import env from "react-dotenv";
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/users/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <Leftcontainer userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          {userId === _id && <Friendlistcomponent userId={userId} />}
        </Box>

        <Box m="2rem 0" />
        <Box flexBasis={isNonMobileScreens ? "50%" : undefined}>
          {userId === _id && (
            <Box mb={isNonMobileScreens ? "4rem" : "0rem"}>
              <Userpost picturePath={user.picturePath} />
            </Box>
          )}
          <Box mt={isNonMobileScreens ? "-2rem" : "0rem"}>
            <Postcontainer userId={userId} isProfile />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
