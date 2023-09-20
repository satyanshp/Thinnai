import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { ROUTES } from "../../../utils/routing/routes";

const GuestNav = () => {
  const isAuthenticated = useSelector<RootState, boolean>(
    (state) => state.guestAuth.isAuthenticated
  );
  const navigate = useNavigate();
  return (
    <AppBar
      position="absolute"
      sx={{
        background: "rgba(0, 0, 0, 0.55)",
        boxShadow: "none",
        top: "0",
        left: "0",
        padding: "0.5rem 6rem",
        "@media (max-width: 600px)": { padding: "0.625rem 1.5rem" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            minHeight: "3.5rem",
          }}
        >
          <Box style={{ flexGrow: "2" }}>
            <img
              style={{
                height: "2.5rem",
              }}
              src="/assets/images/guest-logo.png"
              alt=""
            />
          </Box>
          <Box
            display="flex"
            flexGrow="0.2"
            gap={2.8}
            justifyContent="flex-end"
          >
            <Box
              display={{ sm: "flex", xs: "none" }}
              alignItems="center"
              fontSize="1.125rem"
              fontWeight="400"
              color="#FFFFFF"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(ROUTES.HOST_LANDING)}
            >
              Host Your Space
            </Box>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                "@media (max-width: 600px)": { display: "none" },
              }}
              style={{
                fontFamily: "Montserrat",
                flexGrow: "0.4",
                fontSize: "1.125rem",
                fontWeight: "400",
                background: "transparent",
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
              onClick={() =>
                navigate(!isAuthenticated ? ROUTES.LOGIN : ROUTES.EXPLORE)
              }
            >
              {!isAuthenticated ? "Sign In" : "Book Now"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default GuestNav;
