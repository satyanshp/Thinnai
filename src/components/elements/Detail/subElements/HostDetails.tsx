import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { S3_BASE } from "../../../../utils/consts";
import Rating from "../../Common/Rating";

const HostDetails = ({ property }: any) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Box paddingRight={{ md: "5rem", sm: "0rem" }}>
      <Box display="flex" justifyContent="space-between">
        <Box className="aboutPlace__header">Hosted By</Box>
        <Box>
          <Button
            variant="contained"
            style={{
              background: "#E9E5FF",
              color: "#000000",
              textTransform: "none",
              boxShadow: "none",
              display: "flex",
              gap: "0.625rem",
            }}
          >
            <ChatIcon sx={{ color: "#8F7EF3" }} />
            <Box
              fontSize={{ sm: "1.1rem", xs: "0.85rem" }}
              lineHeight="1.8em"
              sx={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Send a msg
            </Box>
          </Button>
        </Box>
      </Box>
      <Box height={{ md: 50, sm: 40, xs: 40 }} />
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          width="50%"
          gap={2.5}
          alignItems={{ sm: "flex-start", xs: "center" }}
          flexGrow="1"
        >
          <Box
            display="flex"
            width={{ xl: "12%", md: "12%", sm: "15%", xs: "18%" }}
            alignItems={{ xs: "center" }}
            sx={{ aspectRatio: "1", borderRadius: "50%" }}
          >
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "50%",
              }}
              src={
                property.userData?.user.profileImage
                  ? S3_BASE + property.userData?.user.profileImage
                  : property.userData?.user.avatar
              }
              alt=""
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            marginTop={{ xl: 3, sm: 1, xs: 0 }}
          >
            <Box display="flex" alignItems="center">
              <Box
                fontSize={{ xl: "1.2rem", sm: "1.2rem", xs: "0.8rem" }}
                lineHeight="1.4em"
                sx={{
                  fontWeight: "600",
                  color: "#383838",
                }}
              >
                {property.userData?.user.firstName}
              </Box>
              <Box display="flex" alignItems="center" ml="5px">
                <CheckCircleIcon
                  sx={{ fontSize: "0.938rem", color: "#24BA0E" }}
                />
              </Box>
            </Box>
            <Box
              fontSize={{ xl: "1rem", xs: "1rem" }}
              sx={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "0.3rem",
                lineHeight: "22px",
                color: "#383838",
              }}
            >
              {`${property.userData?.guestsHosted} guests hosted`}
            </Box>
          </Box>
        </Box>
        <Box
          fontSize={{
            xl: "0.9rem",
            md: "0.9rem",
            sm: "0.85rem",
            xs: "0.6rem",
          }}
          lineHeight="1.5em"
          sx={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "27px",
            color: "#595959",
          }}
        >
          {property.userData?.acceptanceRate && (
            <Box height={{ xs: "18px" }}>
              Acceptance Rate : {`${property.userData?.acceptanceRate}%`}
            </Box>
          )}
          {property.userData?.responseTime && (
            <Box height={{ xs: "18px" }}>
              Response Time : &lt;{`${property.userData?.responseTime}hr`}
            </Box>
          )}
          {property.userData?.cancellationRate && (
            <Box height={{ xs: "18px" }}>
              Cancellation Rate : {`${property.userData?.cancellationRate}%`}
            </Box>
          )}
        </Box>
      </Box>
      <Box height={20} />
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "1.05rem",
            lineHeight: "33px",
            color: "#383838",
          }}
        >
          <Box>{`${property.userData?.user.firstName} Ratings`}</Box>
          <Box fontSize="0.9rem" fontWeight="400" color="#8F8F8F">
            View Reviews
          </Box>
        </Box>
        <Box height={20} />
        <Box>
          <Rating
            data={property.userData?.ratings}
            height={{ sm: 35, xs: 31.5 }}
          />
        </Box>
      </Box>
      <Box height={{ sm: 50, xs: 20 }} />
      <Box className="aboutPlace__p">
        {isReadMore
          ? [property.userData?.aboutYourself].slice(0, 150)
          : property.userData?.aboutYourself}
        &nbsp;
      </Box>
    </Box>
  );
};

export default HostDetails;
