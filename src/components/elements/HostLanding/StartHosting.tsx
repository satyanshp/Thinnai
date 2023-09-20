import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import SectionTitle from "../HostLanding/SectionTitle";

const StartHosting = () => {
  const breakPoint = useMediaQuery("(max-width:600px)");
  const mdBreakPoint = useMediaQuery("(max-width:900px)");

  return (
    <Box>
      <Box>
        <Box
          margin={{
            xl: "0px 4.375rem",
            md: "0px 4.375rem",
            sm: "0px 2.5rem",
            xs: "0px 0.938rem",
          }}
          pt={{
            xl: "7.25rem",
            md: "7.25rem",
            sm: "3.25rem",
            xs: "3.25rem",
          }}
          mb={{
            xl: "4rem",
            md: "4rem",
            sm: "2.563rem",
            xs: "2.563rem",
          }}
        >
          <SectionTitle subTitle="Start hosting" title="How to be our host" />
        </Box>
        <Box>
          {/* Set up an empty space */}
          <Box
            sx={{
              background: mdBreakPoint
                ? "url('/assets/images/host_landing/start-mobile-hosting-bg.svg')"
                : "url('/assets/images/host_landing/start-hosting-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 100px",
            }}
          >
            <Box
              marginX={{
                xl: "4.375rem",
                md: "4.375rem",
                sm: "2.5rem",
                xs: "0.938rem",
              }}
              display="flex"
              flexDirection={{
                xl: "row",
                md: "row",
                sm: "column",
                xs: "column",
              }}
              justifyContent="space-between"
              alignItems="center"
              gap={10}
              marginBottom={{
                xl: "4.313rem",
                md: "9.375rem",
                sm: "5.25rem",
                xs: "5.25rem",
              }}
            >
              <Box
                order={{
                  xl: "1",
                  md: "1",
                  sm: "2",
                  xs: "2",
                }}
                display="flex"
                alignItems="flex-start"
                gap={{
                  xl: "0.438rem",
                  md: "0.438rem",
                }}
                marginTop={{
                  xl: "0px",
                  md: "0px",
                  sm: "3.125rem",
                  xs: "3.125rem",
                }}
              >
                <Box
                  marginRight={{
                    md: "0.438rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      marginTop: "0.75rem",
                      width: breakPoint ? "24px" : "",
                    }}
                    src="/assets/images/host_landing/one-hosting.svg"
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    letterSpacing="0.015em"
                    fontWeight={600}
                    fontFamily="Montserrat"
                    fontSize={{
                      xl: "2.25rem",
                      md: "2.25rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    }}
                  >
                    Find a Empty Corner
                  </Typography>
                  <Typography
                    fontSize={{
                      xl: "1rem",
                      md: "1rem",
                      sm: "0.875rem",
                      xs: "0.875rem",
                    }}
                    fontFamily="Montserrat"
                    color="rgba(0, 0, 0, 0.5)"
                  >
                    Create a comfortable seating by placing a Dining Table and
                    chairs in any Empty yet secluded space in your home or
                    commercial establishment.
                  </Typography>
                </Box>
              </Box>
              <Box
                order={{
                  xl: "2",
                  md: "2",
                  sm: "1",
                  xs: "1",
                }}
                width={mdBreakPoint ? "90%" : "auto"}
              >
                <img
                  style={{
                    width: mdBreakPoint ? "100%" : "",
                    borderRadius: "20px",
                  }}
                  src="/assets/images/host_landing/setup-1.png"
                  alt=""
                />
              </Box>
            </Box>
            {/* Register Yourself */}
            <Box
              marginX={{
                xl: "4.375rem",
                md: "4.375rem",
                sm: "2.5rem",
                xs: "0.938rem",
              }}
              display="flex"
              flexDirection={{
                xl: "row",
                md: "row",
                sm: "column",
                xs: "column",
              }}
              justifyContent="space-between"
              alignItems="center"
              gap={10}
              marginBottom={{
                xl: "4.313rem",
                md: "9.375rem",
                sm: "5.25rem",
                xs: "5.25rem",
              }}
            >
              <Box width={mdBreakPoint ? "90%" : "auto"}>
                <img
                  style={{
                    width: mdBreakPoint ? "100%" : "",
                    borderRadius: "20px",
                  }}
                  src="/assets/images/host_landing/setup-2.png"
                  alt=""
                />
              </Box>
              <Box
                display="flex"
                alignItems="flex-start"
                gap={{
                  xl: "0.438rem",
                  md: "0.438rem",
                }}
                marginTop={{
                  xl: "0px",
                  md: "0px",
                  sm: "3.125rem",
                  xs: "3.125rem",
                }}
              >
                <Box
                  marginRight={{
                    md: "0.438rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      marginTop: "0.75rem",
                      width: breakPoint ? "24px" : "",
                    }}
                    src="/assets/images/host_landing/two-hosting.svg"
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    letterSpacing="0.015em"
                    fontWeight={600}
                    fontFamily="Montserrat"
                    fontSize={{
                      xl: "2.25rem",
                      md: "2.25rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    }}
                  >
                    Beautify it
                  </Typography>
                  <Typography
                    fontSize={{
                      xl: "1rem",
                      md: "1rem",
                      sm: "0.875rem",
                      xs: "0.875rem",
                    }}
                    fontFamily="Montserrat"
                    color="rgba(0, 0, 0, 0.5)"
                  >
                    Decorate the space to create a unique and beautiful Dining
                    Ambience. For example: Lights, art, candles, wall hangings,
                    plants etc. Let your creativity flow.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Starting hosting Guests */}
          <Box
            sx={{
              background: mdBreakPoint
                ? "url('/assets/images/host_landing/start-mobile-hosting-bg.svg')"
                : "url('/assets/images/host_landing/start-hosting-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 100px",
            }}
          >
            <Box
              marginX={{
                xl: "4.375rem",
                md: "4.375rem",
                sm: "2.5rem",
                xs: "0.938rem",
              }}
              display="flex"
              flexDirection={{
                xl: "row",
                md: "row",
                sm: "column",
                xs: "column",
              }}
              justifyContent="space-between"
              alignItems="center"
              gap={10}
              marginBottom={{
                xl: "4.313rem",
                md: "9.375rem",
                sm: "5.25rem",
                xs: "5.25rem",
              }}
            >
              <Box
                order={{
                  xl: "1",
                  md: "1",
                  sm: "2",
                  xs: "2",
                }}
                display="flex"
                alignItems="flex-start"
                gap={{
                  xl: "0.438rem",
                  md: "0.438rem",
                }}
                marginTop={{
                  xl: "0px",
                  md: "0px",
                  sm: "3.125rem",
                  xs: "3.125rem",
                }}
              >
                <Box
                  marginRight={{
                    md: "0.438rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      marginTop: "0.75rem",
                      width: breakPoint ? "24px" : "",
                    }}
                    src="/assets/images/host_landing/three-hosting.svg"
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    letterSpacing="0.015em"
                    fontWeight={600}
                    fontFamily="Montserrat"
                    fontSize={{
                      xl: "2.25rem",
                      md: "2.25rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    }}
                  >
                    Register as a Host
                  </Typography>
                  <Typography
                    fontSize={{
                      xl: "1rem",
                      md: "1rem",
                      sm: "0.875rem",
                      xs: "0.875rem",
                    }}
                    fontFamily="Montserrat"
                    color="rgba(0, 0, 0, 0.5)"
                  >
                    Download our Mobile App for Hosts from your Appstore/
                    Playstore, tell us about your space and yourself and get
                    registered as a Host.
                  </Typography>
                </Box>
              </Box>
              <Box
                order={{
                  xl: "2",
                  md: "2",
                  sm: "1",
                  xs: "1",
                }}
                width={mdBreakPoint ? "90%" : "auto"}
              >
                <img
                  style={{
                    width: mdBreakPoint ? "100%" : "",
                    borderRadius: "20px",
                  }}
                  src="/assets/images/host_landing/setup-3.png"
                  alt=""
                />
              </Box>
            </Box>
            {/* Make memories of a lifetime */}
            <Box
              margin={{
                xl: "0px 4.375rem",
                md: "0px 4.375rem",
                sm: "0px 2.5rem",
                xs: "0px 0.938rem",
              }}
              display="flex"
              flexDirection={{
                xl: "row",
                md: "row",
                sm: "column",
                xs: "column",
              }}
              justifyContent="space-between"
              alignItems="center"
              gap={10}
              marginBottom={{
                xl: "4.313rem",
                md: "9.375rem",
                sm: "5.25rem",
                xs: "5.25rem",
              }}
            >
              <Box width={mdBreakPoint ? "90%" : "auto"}>
                <img
                  style={{
                    borderRadius: "20px",
                    width: mdBreakPoint ? "100%" : "",
                  }}
                  src="/assets/images/host_landing/setup-4.png"
                  alt=""
                />
              </Box>
              <Box
                display="flex"
                alignItems="flex-start"
                gap={{
                  xl: "0.438rem",
                  md: "0.438rem",
                }}
                marginTop={{
                  xl: "0px",
                  md: "0px",
                  sm: "3.125rem",
                  xs: "3.125rem",
                }}
              >
                <Box
                  marginRight={{
                    md: "0.438rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      marginTop: "0.75rem",
                      width: breakPoint ? "24px" : "",
                    }}
                    src="/assets/images/host_landing/four-hosting.svg"
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    letterSpacing="0.015em"
                    fontWeight={600}
                    fontFamily="Montserrat"
                    fontSize={{
                      xl: "2.25rem",
                      md: "2.25rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    }}
                  >
                    Get paid for making memories
                  </Typography>
                  <Typography
                    fontSize={{
                      xl: "1rem",
                      md: "1rem",
                      sm: "0.875rem",
                      xs: "0.875rem",
                    }}
                    fontFamily="Montserrat"
                    color="rgba(0, 0, 0, 0.5)"
                  >
                    Start Hosting Guests from Thinnai to experience the joy of
                    effortless hosting, Good Income and meeting New people.
                    Let’s get you started today!
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StartHosting;
