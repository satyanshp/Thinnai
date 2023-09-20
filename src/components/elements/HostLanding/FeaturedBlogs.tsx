import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "../HostLanding/SectionTitle";

const FeaturedBlogs = () => {
  return (
    <Box
      marginX={{
        xl: "4.375rem",
        md: "4.375rem",
        sm: "2.5rem",
        xs: "15px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          marginTop={{
            xl: "10.25rem",
            md: "10.25rem",
            sm: "2.063rem",
            xs: "2.063rem",
          }}
          marginBottom={{
            xl: "7.188rem",
            md: "7.188rem",
            sm: "5.563rem",
            xs: "5.563rem",
          }}
        >
          <SectionTitle
            subTitle="Featured"
            title="Featured Blogs and article"
          />
        </Box>
        <Box
          display={{
            xl: "block",
            md: "block",
            sm: "block",
            xs: "none",
          }}
        >
          <Button
            sx={{
              fontSize: "1.25rem",
              fontWeight: "500",
              lineHeight: "162%",
              color: "#000000",
              marginTop: "5rem",
              textTransform: "none",
            }}
          >
            See all
          </Button>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box
          gridColumn={{
            xl: "span 5",
            md: "span 5",
            sm: "span 12",
            xs: "span 12",
          }}
          height={{
            xl: "377.06px",
            md: "377.06px",
            sm: "340px",
            xs: "340px",
          }}
          sx={{
            backgroundImage: "url(/assets/images/host_landing/blog-1.png)",
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundSize: "cover",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box marginTop="1.313rem" marginRight="1.75rem">
            <Typography
              fontWeight={500}
              fontSize="1.25rem"
              fontFamily="Montserrat"
              lineHeight="1.2em"
              color="rgba(255, 255, 255, 0.5)"
              textAlign="right"
            >
              Blogs
            </Typography>
          </Box>
          <Box
            position="absolute"
            left={0}
            bottom={8}
            sx={{
              background:
                "linear-gradient(164.87deg, rgba(26, 25, 30, 0.6) 1%, rgba(0, 0, 0, 0) 109.07%)",
              width: "100%",
              height: "140px",
              backdropFilter: "blur(5px)",
            }}
          >
            <Box paddingX="1.5rem" paddingTop={2} color="white">
              <Typography
                fontWeight={600}
                fontSize="1.25rem"
                fontFamily="Inter"
              >
                Follow the lay{" "}
              </Typography>
              <Typography
                fontWeight={300}
                fontSize="0.875rem"
                fontFamily="Inter"
              >
                It's better than kicking the puppy dog around and all that so.
                Let's make a happy little mountain now.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn={{
            xl: "span 7",
            md: "span 7",
            sm: "span 12",
            xs: "span 12",
          }}
          height={{
            xl: "377.06px",
            md: "377.06px",
            sm: "340px",
            xs: "340px",
          }}
          sx={{
            backgroundImage: "url(/assets/images/host_landing/blog-2.png)",
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundSize: "cover",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box marginTop="1.313rem" marginRight="1.75rem">
            <Typography
              fontWeight={500}
              fontSize="1.25rem"
              fontFamily="Montserrat"
              lineHeight="1.2em"
              color="rgba(255, 255, 255, 0.5)"
              textAlign="right"
            >
              Blogs
            </Typography>
          </Box>
          <Box
            position="absolute"
            left={0}
            bottom={8}
            sx={{
              background: "#1A191E99",
              width: "100%",
              height: "140px",
              backdropFilter: "blur(5px)",
            }}
          >
            <Box paddingX="1.25rem" paddingTop={2} color="white">
              <Typography
                fontWeight={600}
                fontSize="1.25rem"
                fontFamily="Inter"
              >
                Follow the lay{" "}
              </Typography>
              <Typography
                fontWeight={300}
                fontSize="0.875rem"
                fontFamily="Inter"
              >
                It's better than kicking the puppy dog around and all that so.
                Let's make a happy little mountain now.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn={{
            xl: "span 7",
            md: "span 7",
            sm: "span 12",
            xs: "span 12",
          }}
          height={{
            xl: "377.06px",
            md: "377.06px",
            sm: "340px",
            xs: "340px",
          }}
          sx={{
            backgroundImage: "url(/assets/images/host_landing/article-1.png)",
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundSize: "cover",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box marginTop="1.313rem" marginRight="1.75rem">
            <Typography
              fontWeight={500}
              fontSize="1.25rem"
              fontFamily="Montserrat"
              lineHeight="1.2em"
              color="rgba(255, 255, 255, 0.5)"
              textAlign="right"
            >
              Article
            </Typography>
          </Box>
          <Box
            position="absolute"
            left={0}
            bottom={8}
            sx={{
              background: "#1A191E99",
              width: "100%",
              height: "140px",
              backdropFilter: "blur(5px)",
            }}
          >
            <Box paddingX="1.25rem" paddingTop={2} color="white">
              <Typography
                fontWeight={600}
                fontSize="1.25rem"
                fontFamily="Inter"
              >
                Follow the lay{" "}
              </Typography>
              <Typography
                fontWeight={300}
                fontSize="0.875rem"
                fontFamily="Inter"
              >
                It's better than kicking the puppy dog around and all that so.
                Let's make a happy little mountain now.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn={{
            xl: "span 5",
            md: "span 5",
            sm: "span 12",
            xs: "span 12",
          }}
          height={{
            xl: "377.06px",
            md: "377.06px",
            sm: "340px",
            xs: "340px",
          }}
          sx={{
            backgroundImage: "url(/assets/images/host_landing/article-2.png)",
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundSize: "cover",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box marginTop="1.313rem" marginRight="1.75rem">
            <Typography
              fontWeight={500}
              fontSize="1.25rem"
              fontFamily="Montserrat"
              lineHeight="1.2em"
              color="rgba(255, 255, 255, 0.5)"
              textAlign="right"
            >
              Article
            </Typography>
          </Box>
          <Box
            position="absolute"
            left={0}
            bottom={8}
            sx={{
              background: "#1A191E99",
              width: "100%",
              height: "140px",
              backdropFilter: "blur(5px)",
            }}
          >
            <Box paddingX="1.25rem" paddingTop={2} color="white">
              <Typography
                fontWeight={600}
                fontSize="1.25rem"
                fontFamily="Inter"
              >
                Follow the lay{" "}
              </Typography>
              <Typography
                fontWeight={300}
                fontSize="0.875rem"
                fontFamily="Inter"
              >
                It's better than kicking the puppy dog around and all that so.
                Let's make a happy little mountain now.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedBlogs;
