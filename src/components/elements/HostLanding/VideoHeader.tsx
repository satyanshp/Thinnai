import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/routing/routes';

const useStyles: any = makeStyles({
  topBanner: {
    background:
      "linear-gradient(146.48deg, rgba(26, 25, 30, 0.6) 0%, rgba(0, 0, 0, 0) 97.84%)",
    display: "flex",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

interface VideoProp {
  textLoop: string[];
  Nav: () => JSX.Element;
  Host?: Boolean;
  text:string;
  loopPrefix?:string;
}

const VideoHeader = ({ textLoop, Nav, Host = false, text, loopPrefix }: VideoProp) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box
      height={{
        xl: "100vh",
        md: "100vh",
        sm: "60vh",
        xs: "50vh",
      }}
      position="relative"
      overflow="hidden !important"
      className={classes.topBanner}
    >
      <Box width="100%">
        <video
          style={{
            filter: "brightness(0.7)",
            position: "absolute",
            top: 0,
            left: 0,
            minWidth: "100%",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          loop
          playsInline
          onCanPlay={(e) => (e.currentTarget.muted = true)}
          autoPlay
          muted
          className="video"
        >
          <source src={Host?"/assets/videos/host_landing.mp4":"/assets/videos/this_is_thinnai.mp4"} type="video/mp4" />
        </video>
      </Box>
      <Box
        position="absolute"
        height="100%"
        width="100%"
        sx={{
          boxShadow: "none",
          top: "0",
          left: "0",
        }}
      >
        <Nav />
        <Box
          className="open__text"
          color="white"
          width={{ md: "90%", sm: "95%", xs: "100%" }}
          margin={{
            xl: "40vh 6.25rem",
            md: "40vh 3.75rem",
            sm: "7.5rem auto",
            xs: "4.688rem auto",
          }}
        >
          <Box textAlign="center">
            <Box
              fontStyle="normal"
              fontWeight="500"
              fontSize={{ md: "2.375rem", sm: "2.188rem", xs: "1.5rem" }}
              lineHeight={{ sm: "55px", xs: "38px" }}
            >
              {/* Open Doors to Thinnai */}
              {text}
            </Box>
            <Box
              fontStyle="normal"
              fontWeight="700"
              display={'flex'}
              justifyContent={{ xs: 'center', md: 'center' }}
              fontSize={{ md: "3.7rem", sm: "2.188rem", xs: "1.5rem" }}
              lineHeight={{ sm: "55px", xs: "38px" }}
              marginTop="0.75rem"
              textAlign={{ xs: "center", md: "center" }}
              minWidth={{ md: "420px", sm: "350px", xs: "250px" }}
            >
                {loopPrefix&&<>{loopPrefix} <Box width={'0.5rem'} /></>}
              <Typewriter
                options={{
                  strings: textLoop,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Box>
          </Box>
          <Box height={{ sm: 10, xs: 0, md: 18 }} />
          <Box
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ md: "1.563rem", sm: "1.5rem", xs: "1.688rem" }}
            lineHeight={{ sm: "34px", xs: "27px" }}
            sx={{ textAlign: "center" }}
            display="none"
          >
            The Thinnai Experience is here.
          </Box>
          <Box height={{ sm: 22, xs: 40, md: 28 }} />
          {Host ? (
            <Box
              display="flex"
              component={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <a
                style={{
                  textDecoration: "none",
                  margin: "0 auto",
                }}
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd62sxWJH4394_4RcIUa0XFWcL9AFvKwa6TXdL04IdtsRVwzw/viewform"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  sx={{
                    margin: "0 auto",
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1.313rem",
                    lineHeight: "45px",
                    color: "#FFFFFF",
                    background: "#D8A356",
                    padding: "5px 3.75rem",
                    borderRadius: "15px",
                    "&:hover": {
                      background: "#D8A355",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "1.125rem",
                    },
                  }}
                  // onClick={onClick}
                >
                  JOIN NOW
                </Button>
              </a>
            </Box>
          ) : (
            <Box
              display="flex"
              component={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <Button
                variant="contained"
                sx={{
                  margin: "0 auto",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "1.313rem",
                  lineHeight: "45px",
                  color: "#FFFFFF",
                  background: "#D8A356",
                  padding: { xs: "5px 2rem", md: "5px 3.75rem" },
                  borderRadius: "15px",
                  "&:hover": {
                    background: "#D8A355",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "1.125rem",
                  },
                }}
                onClick={(e) => navigate(ROUTES.EXPLORE)}
              >
                BOOK NOW
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoHeader;
