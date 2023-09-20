import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const WhyHosting = () => {
  const mdBreakPoint = useMediaQuery("(max-width:900px)");
  const data = [
    {
      title: "Good income",
      desc: "We all maintain our home as beautiful and clean as possible, but We never get the appreciation or make money out of it. Thinnai is here to turn the tables with just a Table.",
      img: "/assets/images/host_landing/passive-girl.svg",
      number: "/assets/images/host_landing/passive-1.svg",
      id: 1,
    },
    {
      title: "Meet unique people",
      desc: "In our monotonous Life, we don’t have energy or time to socialise as we like to. Upon Hosting with Thinnai, you get to meet Unique set of people for a short duration who would spend a quality time at the space you have created.",
      img: "/assets/images/host_landing/passive-girl-2.svg",
      number: "/assets/images/host_landing/passive-2.svg",
      id: 2,
    },
    {
      title: "Effortless hosting",
      desc: "We are known for traditionally hosting lunch and Dinners, but today’s modern lifestyle requires Modern Hosting. With Thinnai, you will now have to provide only the Dining space as the Guests will order their favourite food through delivery Apps.",
      img: "/assets/images/host_landing/passive-girl-3.svg",
      number: "/assets/images/host_landing/passive-3.svg",
      id: 3,
    },
  ];
  return (
    <Box>
      <Box
        margin={{
          xl: "0px 4.375rem",
          md: "0px 4.375rem",
          sm: "0px 2.5rem",
          xs: "0px 0.938rem",
        }}
      >
        <Typography
          mt={{
            xl: "5rem",
            md: "5rem",
            sm: "2.813rem",
            xs: "2.813rem",
          }}
          fontFamily="Montserrat"
          lineHeight={{
            xl: "29px",
            md: "29px",
            sm: "20px",
            xs: "20px",
          }}
          fontSize={{
            xl: "1.5rem",
            md: "1.5rem",
            sm: "1rem",
            xs: "1rem",
          }}
          fontWeight="400"
          color="rgba(0, 0, 0, 0.5)"
          pt="7.25rem"
        >
          Benefits
        </Typography>
        <Typography
          fontFamily="Montserrat"
          lineHeight={{
            xl: "52px",
            md: "52px",
            sm: "29px",
            xs: "29px",
          }}
          fontSize={{
            xl: "2.688rem",
            md: "2.688rem",
            sm: "1.5rem",
            xs: "1.5rem",
          }}
          fontWeight={600}
          color="black"
          mb={{
            xl: "4rem",
            md: "4rem",
            sm: "1.75rem",
            xs: "1.75rem",
          }}
        >
          Why hosting
        </Typography>
      </Box>
      <Box>
        <Box
          display="flex"
          sx={{
            overflowX: "auto",
          }}
          flexDirection={{
            xl: "row",
            md: "row",
            sm: "column",
            xs: "column",
          }}
          gap={{
            xl: "1.5rem",
            md: "1.5rem",
            sm: "2rem",
            xs: "2rem",
          }}
          margin={{
            xl: "0px 4.375rem",
            md: "0px 4.375rem",
            sm: "0px 2.5rem",
            xs: "0px 0.938rem",
          }}
        >
          {data.map((card) => (
            <Box
              marginBottom={{
                xl: "0px",
                md: "0px",
                sm: "2rem",
                xs: "2rem",
              }}
              key={card.id}
              bgcolor="#FFFFFF"
              zIndex="1050"
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
              borderRadius="8px"
              paddingX="1.5rem"
              display="flex"
              flexDirection={{
                xl: "column",
                md: "column",
                sm: "row",
                xs: "column",
              }}
              gap={{
                xl: "0px",
                md: "0px",
                sm: "0px",
                xs: "0px",
              }}
            >
              <Box
                display="flex"
                justifyContent={{
                  xl: "space-between",
                  md: "space-between",
                  sm: "flex-start",
                  xs: "center",
                }}
                alignItems={{
                  xl: "center",
                  md: "center",
                  sm: "flex-start",
                  xs: "center",
                }}
              >
                <Box
                  height={{
                    xl: "281.3px",
                    md: "281.3px",
                    sm: "59px",
                    xs: "auto",
                  }}
                  width={{
                    md: "4vw",
                    sm: "36px",
                    xs: "auto",
                  }}
                  marginRight={{
                    xl: "0px",
                    md: "0px",
                    sm: "1.938rem",
                    xs: "0px",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      marginTop: mdBreakPoint ? "3.125rem" : "0",
                      height: "100%",
                      width: "100%",
                    }}
                    src={card.number}
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    style={{
                      display: mdBreakPoint ? "none" : "block",
                      width: "15vw",
                      height: "30vh",
                      transform:
                        card.title === "Good income"
                          ? "scale(1.5)"
                          : "scale(1)",
                    }}
                    src={card.img}
                    alt=""
                  />
                </Box>
              </Box>
              <Box
                pb={{
                  xl: "6.25rem",
                  md: "3.125rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                }}
              >
                <Typography
                  mt="2.563rem"
                  mb="1rem"
                  fontSize="1.5rem"
                  fontWeight="600"
                  fontFamily="Montserrat"
                  textAlign={{
                    xl: "left",
                    md: "left",
                    sm: "left",
                    xs: "center",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  textAlign={{
                    xl: "left",
                    md: "left",
                    sm: "left",
                    xs: "center",
                  }}
                  fontSize="1rem"
                  fontFamily="Montserrat"
                  color="rgba(0, 0, 0, 0.5)"
                >
                  {card.desc}
                </Typography>
                <Box
                  display="flex"
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                  }}
                  paddingTop={{ xs: "2rem", sm: "2rem", md: 0 }}
                >
                  <img
                    style={{
                      display: mdBreakPoint ? "block" : "none",
                      width: mdBreakPoint ? "" : "50%",
                    }}
                    src={card.img}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box width={"100%"} height="240px" bgcolor="#F4CF97" mt="-7.5rem"></Box>
      </Box>
    </Box>
  );
};

export default WhyHosting;
