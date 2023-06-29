import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Sitename() {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      backgroundColor={theme.palette.background.alt}
      textAlign="center"
    >
      <Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        // sx={{
        //     "&:hover": {
        //       color: primaryLight,
        //       cursor: "pointer",
        //     },
        //   }}
      >
        ATSOCIAL
      </Typography>
    </Box>
  );
}
