// will contain the profile of signed in user
import React from "react";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import Profilepic from "components/Profilepic";
import Flexcomponents from "components/Flexcomponents";
import Leftcontainerwrapper from "components/Leftcontainerwrapper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Leftcontainer = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

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

  if (!user) {
    return null;
  }

  const { firstName, lastName, location, friends } = user;

  return (
    <Leftcontainerwrapper>
      <Flexcomponents
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <Flexcomponents gap="1rem">
          <Profilepic image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </Flexcomponents>
        <ManageAccountsOutlined />
      </Flexcomponents>

      <Divider />
      {/*  *********************************************************** */}

      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
      </Box>
      <Divider />
      {/* ************************************************************** */}

      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          profiles
        </Typography>

        <Flexcomponents gap="1rem" mb="0.5rem">
          <Flexcomponents gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
            </Box>
          </Flexcomponents>
          <EditOutlined sx={{ color: main }} />
        </Flexcomponents>

        <Flexcomponents gap="1rem">
          <Flexcomponents gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                linkedin
              </Typography>
            </Box>
          </Flexcomponents>
          <EditOutlined sx={{ color: main }} />
        </Flexcomponents>
      </Box>
    </Leftcontainerwrapper>
  );
};

export default Leftcontainer;
