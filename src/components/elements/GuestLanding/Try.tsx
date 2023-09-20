import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routing/routes";

const Try = () => {
  const navigate = useNavigate();
  const tryArray = [
    {
      img: "/assets/images/page/emptySpace2.svg",
      text: "Good Income Source",
    },
    {
      img: "/assets/images/page/emptySpace4.svg",
      text: "Meet Interesting People",
    },
    {
      img: "/assets/images/page/emptySpace1.svg",
      text: "Add joy to your life",
    },
  ];
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="center"
        textAlign="center"
        fontWeight="600"
        fontSize={{ md: "2.25rem", xs: "2.25rem" }}
        lineHeight="64px"
        color="#000000"
        className="try__header"
        position="relative"
        marginBottom="3.75rem"
      >
        Try Hosting For A Week
      </Box>
      <Box>
        <Grid
          container
          direction={{ md: "row", xs: "column" }}
          wrap="nowrap"
          margin="auto"
          width="73%"
          height={{ md: "354px", sm: "auto", xs: "auto" }}
          gap={2}
          position="relative"
          zIndex="1"
        >
          {tryArray.map((item, index) => (
            <Grid
              item
              display="flex"
              flexDirection="column"
              width="100%"
              height="354px"
              justifyContent="flex-end"
              alignItems="center"
              md={4}
              sx={{
                background: "#FFFCF8",
                border: "1px dashed #F4CF97",
                boxShadow: "0px 4px 20px rgba(205, 205, 205, 0.25)",
                backdropFilter: "blur(10px)",
                borderRadius: "30px",
              }}
              position="relative"
              component={motion.div}
              initial={{ translateY: "-1.25rem", opacity: "0" }}
              whileInView={{ translateY: "0px", opacity: "1" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                x: { duration: 0.5 },
              }}
            >
              <Box
                width="100%"
                height="354px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                style={{ position: "absolute" }}
              >
                <img
                  className="emptySpace__img__avtar2"
                  style={{
                    paddingLeft: index === 2 ? "1.563rem" : "0px",
                    width: "75%",
                    height: "50%",
                    maxHeight: "60%",
                  }}
                  src={item.img}
                  alt=""
                />
                <Box
                  className="emptySpace-steps"
                  position="relative"
                  top="22px"
                >
                  {item.text}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          position="relative"
          top={{
            xl: "-180px",
            md: "-180px",
            sm: "-150px",
            xs: "-150px",
          }}
          zIndex="0"
          minHeight="336px"
          justifyContent="center"
          alignItems="end"
          textAlign="center"
        >
          <Box display="flex" justifyContent="center" marginBottom="2.5rem">
            <Button
              variant="contained"
              sx={{
                background: "#1A191E",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "1.25rem",
                lineHeight: "24px",
                textTransform: "capitalize",
                margin: "auto",
                padding: "0.813rem 3.75rem",
                textAlign: "center",
              }}
              onClick={() => navigate(ROUTES.HOST_LANDING)}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Try;
