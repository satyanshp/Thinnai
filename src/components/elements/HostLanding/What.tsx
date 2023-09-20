import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const What = () => {
  const breakPoint = useMediaQuery("(max-width:600px)");
  return (
    <Box
      mt={{
        xl: "15.625rem",
        md: "15.625rem",
        sm: "5.625rem",
        xs: "5.625rem",
      }}
      display="flex"
      alignItems="center"
      height={{
        xl: "565px",
        md: "565px",
        sm: "320px",
        xs: "320px",
      }}
      style={{
        backgroundImage: "url('/assets/images/host_landing/CTA.jpg')",
      }}
    >
      <Box
        margin={{
          xl: "0px 4.375rem",
          md: "0px 4.375rem",
          sm: "0px 2.5rem",
          xs: "0px 0.938rem",
        }}
        width={{
          xl: "50%",
          md: "50%",
          sm: "100%",
          xs: "100%",
        }}
      >
        <Typography
          letterSpacing="0.015em"
          fontWeight={700}
          fontFamily="Montserrat"
          color="#FFFFFF"
          mb={{
            xl: "1.313rem",
            md: "1.313rem",
            sm: "0.938rem",
            xs: "0.938rem",
          }}
          lineHeight="1.2em"
          fontSize={{
            xl: "2.25rem",
            md: "2.25rem",
            sm: "1.25rem",
            xs: "1.25rem",
          }}
        >
          WHAT ARE YOU WAITING FOR?
        </Typography>
        <Typography
          fontSize={{
            xl: "1.188rem",
            md: "1.188rem",
            sm: "1rem",
            xs: "1.188rem",
          }}
          lineHeight="1.35em"
          fontFamily="Montserrat"
          color="rgba(255, 255, 255, 0.85)"
          fontWeight={300}
          mb={{
            xl: "2.75rem",
            md: "2.75rem",
            sm: "1.813rem",
            xs: "1.813rem",
          }}
        >
          Now then, let's play. We don't want to set these clouds on fire. You
          don't want to kill all your dark areas they are very important.
        </Typography>
        <Box
          display="flex"
          justifyContent={{
            xl: "flex-start",
            md: "flex-start",
            sm: "center",
            xs: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#EBA847",
              borderRadius: "8px",
              fontSize: breakPoint ? "0.875rem" : "1.563rem",
              textTransform: "none",
              color: "#FFFFFF",
              paddingX: breakPoint ? "1.875rem" : "2.5rem",
              paddingY: "0.625rem",
              boxShadow: "none",
              fontWeight: "500",
              lineHeight: "36.57px",
              "@media (max-width: 600px)": {
                lineHeight: "17.07px",
              },
            }}
          >
            Check Out Spaces
          </Button>
        </Box>
      </Box>
      S
    </Box>
  );
};

export default What;
