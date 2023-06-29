import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import Sitename from "scenes/sitename";
import { useSelector } from "react-redux";
import Leftcontainer from "Leftcontainer/Leftcontainer";
import Userpost from "scenes/MainPost/Userpost";
import Postscontainer from "scenes/MainPost/Postscontainer";
import Friendlistcomponent from "scenes/MainPost/Friendlistcomponent";

const Homepage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Sitename />
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <Leftcontainer userId={_id} picturePath={picturePath} />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <Userpost picturePath={picturePath} />
          <Postscontainer userId={_id} />
        </Box>

        {isNonMobileScreens && (
          <Box flexBasis="26% ">
            <Box m="2rem 0" />
            <Friendlistcomponent userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Homepage;
