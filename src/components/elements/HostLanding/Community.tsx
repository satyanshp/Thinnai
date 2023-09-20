import React from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';

const Community = () => {
    const breakPoint = useMediaQuery('(max-width:600px)');
  return (
    <Box bgcolor="#F4CF97">
      <Box
        margin={{
          xl: "0px 4.375rem",
          md: "0px 4.375rem",
          sm: "0px 2.5rem",
          xs: "0px 0.938rem",
        }}
      >
        <Typography
          fontFamily="Montserrat"
          lineHeight="1.2em"
          fontSize={{
            xl: "1.5rem",
            md: "1.5rem",
            sm: "1rem",
            xs: "1rem",
          }}
          fontWeight="400"
          color="rgba(0, 0, 0, 0.5)"
          pt={{
            xl: "7.25rem",
            md: "7.25rem",
            sm: "1.938rem",
            xs: "1.938rem",
          }}
        >
          Welcome To Thinnai{" "}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          lineHeight="1.2em"
          fontSize={{
            xl: "2.688rem",
            md: "2.688rem",
            sm: "2.5rem",
            xs: "2.5rem",
          }}
          pb={{
            xl: "5.938rem",
            md: "5.938rem",
            sm: "1.438rem",
            xs: "1.438rem",
          }}
          fontWeight={600}
          color="black"
          mb="0.688rem"
        >
          Community
        </Typography>
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <img
              width="100%"
              src="/assets/images/host_landing/community.jpg"
              alt=""
            />
            <Box
              sx={{
                fontSize: "4.563rem",
                paddingY: breakPoint ? "0.938rem" : "1.875rem",
                backdropFilter: "blur(9.5)",
                width: "100%",
                background:
                  "linear-gradient(164.87deg, rgba(26, 25, 30, 0.6) 1%, rgba(0, 0, 0, 0) 109.07%)",
              }}
              position="absolute"
              left={0}
              bottom={{
                xl: "-110px",
                md: "-110px",
                sm: "-110px",
                xs: "-106px",
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin="auto"
                >
                  <Typography
                    paddingLeft={{
                      xl: 3,
                      md: 3,
                      sm: 2,
                      xs: 1,
                    }}
                    fontSize={{
                      xl: "1.5rem",
                      md: "1.5rem",
                      sm: "0.875rem",
                      xs: "0.875rem",
                    }}
                    fontWeight={300}
                    color="white"
                    textAlign="center"
                    fontFamily="Montserrat"
                    width={{
                      md: "100%",
                      sm: "200px",
                      xs: "100px",
                    }}
                    // paddingRight={{
                    // 	xl: 3,
                    // 	md: 3,
                    // 	sm: 2,
                    // 	xs: 1,
                    // }}
                  >
                    Explore more about Thinnai
                  </Typography>
                </Box>
                <Box
                  sx={{
                    overflowX: "auto",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "0.438rem",
                  }}
                >
                  <Box width="300px">
                    <img
                      style={{
                        display: "block",
                        height: breakPoint ? "76px" : "14.5rem",
                      }}
                      width="100%"
                      src="/assets/images/host_landing/community-1.svg"
                      alt=""
                    />
                  </Box>
                  <Box
                    width="300px"
                    marginLeft={{
                      xl: "0",
                      md: "0",
                      sm: "0px",
                      xs: "0.313rem",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        height: breakPoint ? "76px" : "14.5rem",
                      }}
                      width="100%"
                      src="/assets/images/host_landing/community-2.svg"
                      alt=""
                    />
                  </Box>
                  <Box
                    width="300px"
                    display={{
                      xl: "block",
                      md: "block",
                      sm: "none",
                      xs: "none",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        height: breakPoint ? "76px" : "172px",
                      }}
                      width="100%"
                      src="/assets/images/host_landing/community-1.svg"
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
