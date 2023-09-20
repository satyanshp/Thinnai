import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "../HostLanding/SectionTitle";

const Testimonial = () => {
  return (
    <Box>
      <Box>
        <Box
          marginX={{
            xl: "4.375rem",
            md: "4.375rem",
            sm: "2.5rem",
            xs: "0.938rem",
          }}
          marginTop={{
            xl: "12.563rem",
            md: "12.563rem",
            sm: "5.063rem",
            xs: "5.063rem",
          }}
          marginBottom={{
            xl: "7.188rem",
            md: "7.188rem",
            sm: "6.25rem",
            xs: "6.25rem",
          }}
        >
          <SectionTitle
            subTitle="Testimonial"
            title="What our lovely client say about us"
          />
        </Box>
        {/* Testimonial Desktop  */}
        <Box
          display={{
            xl: "block",
            md: "block",
            sm: "none",
            xs: "none",
          }}
        >
          <Box
            display="flex"
            flexDirection={{
              xl: "row",
              md: "row",
              sm: "column",
              xs: "column",
            }}
          >
            <Box
              width={{
                xl: "40%",
                md: "40%",
                sm: "100%",
                xs: "100%",
              }}
              height="400px"
              paddingBottom={12}
              sx={{
                boxShadow: "8px 4px 16px rgba(0, 0, 0, 0.08)",
                backgroundImage:
                  "url('/assets/images/host_landing/testimonial-bg.svg')",
                position: "relative",
              }}
            >
              <Box position="absolute" bottom="-95px" right="0">
                <img
                  height="300px"
                  src="/assets/images/host_landing/client-1.svg"
                  alt=""
                />
              </Box>
            </Box>
            <Box
              width={{
                xl: "60%",
                md: "60%",
                sm: "100%",
                xs: "100%",
              }}
              bgcolor="#F4CF97"
              mt={10}
              paddingX={{
                xl: "2.75rem",
                md: "2.75rem",
                sm: "1.5rem",
                xs: "1.5rem",
              }}
            >
              <Typography
                pt="6.25rem"
                fontSize="1.75rem"
                fontWeight={600}
                fontFamily="Inter"
                mb="1.313rem"
              >
                Alina gosh
              </Typography>
              <Typography
                color="rgba(0, 0, 0, 0.5)"
                fontSize="1rem"
                fontWeight={400}
                fontFamily="Inter"
                mb="1.813rem"
              >
                Exercising the imagination, experimenting with talents, being
                creative; these things, to me, are truly the windows to your
                soul. This is where you take out all your hostilities and
                frustrations. It's better than kicking the puppy dog around and
                all that so. Let's make a happy little mountain now. Isn't it
                great to do something you can't fail at? Let's give him a friend
                too. Everybody needs a friend.
              </Typography>
              <Typography
                pb={10}
                fontSize="1.25rem"
                fontWeight={500}
                fontFamily="Inter"
              >
                Hosted : 1500+ Happy Guests
              </Typography>

              <Box
                display={{
                  xl: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                }}
              >
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    sx={{
                      borderRadius: "40px",
                    }}
                  >
                    <img src="/assets/images/host_landing/next.svg" alt="" />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Testimonial Mobile Responsive */}
        <Box
          display={{
            xl: "none",
            md: "none",
            sm: "block",
            xs: "block",
          }}
        >
          <Box>
            <Box
              height="400px"
              zIndex={100}
              paddingBottom={12}
              sx={{
                boxShadow: "8px 4px 16px rgba(0, 0, 0, 0.08)",
                backgroundImage:
                  "url('/assets/images/host_landing/testimonial-bg.svg')",
                position: "relative",
              }}
            ></Box>
            <Box zIndex={1000} bgcolor="#F4CF97" mt={-40} position="relative">
              <Box
                position="absolute"
                top="-3.125rem"
                right={{
                  sm: "45%",
                  xs: "30%",
                }}
              >
                <img
                  style={{
                    zIndex: "100000",
                  }}
                  height="110px"
                  width="142px"
                  src="/assets/images/host_landing/client-1.svg"
                  alt=""
                />
              </Box>
              <Box
                display={{
                  xl: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  marginRight={{
                    sm: "6.25rem",
                    xs: "1.5rem",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "40px",
                      width: "23px",
                      height: "22.96px",
                    }}
                  >
                    <img
                      width="100%"
                      src="/assets/images/host_landing/next.svg"
                      alt=""
                    />
                  </Button>
                </Box>
              </Box>
              <Box
                padding={{
                  xl: "2.75rem",
                  md: "2.75rem",
                  sm: "2.5rem",
                  xs: "2.5rem",
                }}
              >
                <Typography
                  pt="6.25rem"
                  fontSize="1.75rem"
                  fontWeight={600}
                  fontFamily="Inter"
                  mb="1.313rem"
                >
                  Alina gosh
                </Typography>
                <Typography
                  color="rgba(0, 0, 0, 0.5)"
                  fontSize="1rem"
                  fontWeight={400}
                  fontFamily="Inter"
                  mb="1.813rem"
                >
                  Exercising the imagination, experimenting with talents, being
                  creative; these things, to me, are truly the windows to your
                  soul. This is where you take out all your hostilities and
                  frustrations. It's better than kicking the puppy dog around
                  and all that so. Let's make a happy little mountain now. Isn't
                  it great to do something you can't fail at? Let's give him a
                  friend too. Everybody needs a friend.
                </Typography>
                <Typography
                  pb={10}
                  fontSize="1.25rem"
                  fontWeight={500}
                  fontFamily="Inter"
                >
                  Hosted : 1500+ Happy Guests
                </Typography>
              </Box>
              <Box
                display={{
                  xl: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                }}
              >
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    sx={{
                      borderRadius: "40px",
                    }}
                  >
                    <img src="/assets/images/host_landing/next.svg" alt="" />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
