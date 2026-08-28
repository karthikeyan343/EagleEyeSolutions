import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";

import heroImage from "../../assets/hero-bg.png";

const Hero = () => {
const [typedText, setTypedText] = useState("");

useEffect(() => {
  const phrases = [
    "For Your Business.",
    "For Your Industry.",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let pause = false;

  const interval = setInterval(() => {
    const currentPhrase = phrases[phraseIndex];

    if (pause) {
      return;
    }

    if (!deleting) {
      charIndex++;

      setTypedText(currentPhrase.slice(0, charIndex));

      if (charIndex === currentPhrase.length) {
        pause = true;

        setTimeout(() => {
          pause = false;
          deleting = true;
        }, 1800);
      }
    } else {
      charIndex--;

      setTypedText(currentPhrase.slice(0, charIndex));

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
  }, 80);

  return () => clearInterval(interval);
}, []);

  return (
<Box
  id='home'
  sx={{
    minHeight: "100vh",
    marginTop: "-84px",
    paddingTop: "84px",
    position: "relative",
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <Box
        sx={{
          height: "100%",
          maxWidth: "1400px",
          mx: "auto",
          px: {
            xs: 3,
            sm: 5,
            md: 7,
            lg: 9,
          },
           py: {
            xs: 10,
            sm: 5,
            md: 7,
            lg: 10,
          },

          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "65%",
              lg: "62%",
            },
            mt: {
              xs: -2,
              md: -1,
            },
          }}
        >
<Box
  sx={{
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid #00CFC1",
    borderRadius: "30px",
    px: {
      xs: 2,
      md: 2.5,
    },
    py: 0.8,
    mb: {
      xs: 2.5,
      md: 3,
    },
    gap: 1.2,
  }}
>
<Box
  sx={{
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#ff4d57",
    flexShrink: 0,

    animation: "statusBlink 1.2s ease-in-out infinite",

    "@keyframes statusBlink": {
      "0%, 100%": {
        opacity: 1,
        boxShadow: "0 0 8px rgba(255, 77, 87, 0.7)",
      },
      "50%": {
        opacity: 0.3,
        boxShadow: "0 0 2px rgba(255, 77, 87, 0.2)",
      },
    },
  }}
/>

  <Typography
    sx={{
      color: "#00CFC1",
      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        md: "0.98rem",
      },
      fontWeight: 700,
      letterSpacing: "2px",
    }}
  >
    ENTERPRISE INFRASTRUCTURE
  </Typography>
</Box>

          {/* Main heading */}
          <Typography
            component="h1"
            sx={{
            fontFamily: '"Barlow Condensed", sans-serif',
              color: "#fff",
              fontWeight: 500,
              lineHeight: 0.98,
               letterSpacing: "0.5px",
              fontSize: {
                xs: "2.8rem",
                sm: "3.8rem",
                md: "3.4rem",
                lg: "4.2rem",
                xl: "5.8rem",
              },
              maxWidth: "950px",
            }}
          >
            Reliable Technical Solutions
          </Typography>
<Typography
  component="div"
  sx={{
    fontFamily: '"Barlow Condensed", sans-serif',
    color: "#00CFC1",
    fontWeight: 300,
    lineHeight: 1,
    
    letterSpacing: "-2px",
    fontSize: {
      xs: "2.4rem",
      sm: "3.2rem",
      md: "3.8rem",
      lg: "3.6rem",
      xl: "4.8rem",
    },
    mt: 0.5,
    display: "flex",
    alignItems: "center",
    minHeight: "1em",
  }}
>
  {typedText}

  <Box
    component="span"
    sx={{
      display: "inline-block",
      width: "3px",
      height: "0.8em",
      backgroundColor: "#00CFC1",
      ml: "6px",
      animation: "cursorBlink 0.8s step-end infinite",

      "@keyframes cursorBlink": {
        "0%, 100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0,
        },
      },
    }}
  />
</Typography>
          <Typography
  sx={{
    fontFamily: '"Barlow", sans-serif',
    fontSize: {
      xs: "15px",
      sm: "17px",
      md: "20px",
    },
    fontWeight: 400,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.82)",
    mt:3
  }}
          >
            Expertise in Weight Calibration, Camera Solutions, and Network
            Connection & Setup. We build the reliable systems that power
            modern enterprise.
          </Typography>
<Box
  sx={{
    display: "flex",
    gap: 2,
    mt: {
      xs: 3,
      md: 3.5,
    },
    flexWrap: "wrap",
  }}
>
  <Button
    variant="contained"
    endIcon={
      <ArrowForwardIcon
        sx={{
          fontSize: "22px !important",
          transition: "transform 0.35s ease",
        }}
      />
    }
    sx={{
      position: "relative",
      overflow: "hidden",

      minWidth: {
        xs: 190,
        md: 215,
      },

      height: {
        xs: 52,
        md: 58,
      },

      px: {
        xs: 3,
        md: 3.5,
      },

      borderRadius: "4px",

      backgroundColor: "#00CFC1",
      color: "#06182D",

      fontFamily: '"Barlow", sans-serif',
      fontSize: {
        xs: "0.9rem",
        md: "1rem",
      },

      fontWeight: 700,
      letterSpacing: "0.8px",
      textTransform: "uppercase",

      boxShadow: "0 0 0 rgba(0,207,193,0)",

      transition:
        "transform 0.3s ease, box-shadow 0.3s ease",
      "&::before": {
        content: '""',
        position: "absolute",

        top: 0,
        left: "-120%",

        width: "80%",
        height: "100%",

        background:
          "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.35), transparent 80%)",

        transform: "skewX(-20deg)",

        transition: "left 0.65s ease",

        pointerEvents: "none",
      },

      "&::after": {
        content: '""',
        position: "absolute",

        right: 0,
        bottom: 0,

        width: "18px",
        height: "18px",

        borderRight: "2px solid rgba(6,24,45,0.45)",
        borderBottom: "2px solid rgba(6,24,45,0.45)",

        pointerEvents: "none",
      },

      "&:hover": {
        backgroundColor: "#00CFC1",

        transform: "translateY(-3px)",

        boxShadow:
          "0 8px 30px rgba(0,207,193,0.28)",

        "&::before": {
          left: "130%",
        },

        "& .MuiButton-endIcon": {
          transform: "translateX(5px)",
        },
      },
    }}
  >
    Get a Quote
  </Button>
  <Button
    variant="outlined"
    endIcon={
      <ArrowForwardIcon
        sx={{
          fontSize: "22px !important",
          transition: "transform 0.35s ease",
        }}
      />
    }
    sx={{
      position: "relative",
      overflow: "hidden",

      minWidth: {
        xs: 190,
        md: 230,
      },

      height: {
        xs: 52,
        md: 58,
      },

      px: {
        xs: 3,
        md: 3.5,
      },

      borderRadius: "4px",

      color: "#FFFFFF",

      border: "1px solid rgba(0,207,193,0.8)",

      backgroundColor: "rgba(3,20,40,0.28)",

      backdropFilter: "blur(4px)",

      fontFamily: '"Barlow", sans-serif',

      fontSize: {
        xs: "0.9rem",
        md: "1rem",
      },

      fontWeight: 700,

      letterSpacing: "0.8px",

      textTransform: "uppercase",

      transition:
        "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      "&::before": {
        content: '""',
        position: "absolute",

        top: 0,
        left: "-120%",

        width: "80%",
        height: "100%",

        background:
          "linear-gradient(110deg, transparent 20%, rgba(0,207,193,0.18), transparent 80%)",

        transform: "skewX(-20deg)",

        transition: "left 0.65s ease",

        pointerEvents: "none",
      },
      "&::after": {
        content: '""',
        position: "absolute",

        right: 0,
        bottom: 0,

        width: "18px",
        height: "18px",

        borderRight: "2px solid #00CFC1",
        borderBottom: "2px solid #00CFC1",

        pointerEvents: "none",
      },

      "&:hover": {
        borderColor: "#00CFC1",

        backgroundColor:
          "rgba(0,207,193,0.09)",

        transform: "translateY(-3px)",

        boxShadow:
          "0 8px 25px rgba(0,207,193,0.12)",

        "&::before": {
          left: "130%",
        },

        "& .MuiButton-endIcon": {
          transform: "translateX(5px)",
        },
      },
    }}
  >
    Explore Services
  </Button>
</Box>
        </Box>
      </Box>
<Box
  sx={{
    position: "absolute",
    top: {
      xs: "20%",
      md: "30%",
    },
    right: {
      xs: "5%",
      md: "14%",
    },
    display: {
      xs: "none",
      md: "flex",
    },
    alignItems: "center",
    gap: 1.5,
    border: "1px solid rgba(0,207,193,0.45)",
    borderRadius: "30px",
    px: 2.5,
    py: 1.2,
    backgroundColor: "rgba(3,20,40,0.55)",

    animation: "cctvFloat 5s ease-in-out infinite",

    "@keyframes cctvFloat": {
      "0%, 100%": {
        transform: "translate(0, 0) rotate(0deg)",
      },
      "25%": {
        transform: "translate(18px, -12px) rotate(2deg)",
      },
      "50%": {
        transform: "translate(8px, -25px) rotate(0deg)",
      },
      "75%": {
        transform: "translate(-12px, -10px) rotate(-2deg)",
      },
    },
  }}
>
  <Box
    sx={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "#ff4d57",
      animation: "statusBlink 1.2s ease-in-out infinite",

      "@keyframes statusBlink": {
        "0%, 100%": {
          opacity: 1,
          boxShadow: "0 0 8px rgba(255,77,87,0.7)",
        },
        "50%": {
          opacity: 0.3,
          boxShadow: "0 0 2px rgba(255,77,87,0.2)",
        },
      },
    }}
  />

  <VideocamOutlinedIcon
    sx={{
      color: "#00CFC1",
      fontSize: 24,
    }}
  />

  <Typography
    sx={{
      color: "#fff",
      fontWeight: 700,
      fontSize: "1rem",
    }}
  >
    CCTV: REC
  </Typography>
</Box>

{/* Network Status */}
<Box
  sx={{
    position: "absolute",
    top: "57%",
    right: {
      xs: "5%",
      md: "9%",
    },
    display: {
      xs: "none",
      md: "flex",
    },
    alignItems: "center",
    gap: 1.2,
    border: "1px solid rgba(0,207,193,0.45)",
    borderRadius: "30px",
    px: 2.5,
    py: 1.2,
    backgroundColor: "rgba(3,20,40,0.55)",

    animation: "networkFloat 6s ease-in-out infinite",

    "@keyframes networkFloat": {
      "0%, 100%": {
        transform: "translate(0, 0) rotate(0deg)",
      },
      "25%": {
        transform: "translate(-20px, -8px) rotate(-2deg)",
      },
      "50%": {
        transform: "translate(-10px, 18px) rotate(1deg)",
      },
      "75%": {
        transform: "translate(15px, 10px) rotate(2deg)",
      },
    },
  }}
>
  <LinkOutlinedIcon
    sx={{
      color: "#00CFC1",
      fontSize: 23,
    }}
  />

  <Typography
    sx={{
      color: "#fff",
      fontWeight: 700,
      fontSize: "1rem",
    }}
  >
    LINK: STABLE
  </Typography>
</Box>

<Box
  sx={{
    position: "absolute",
    bottom: "18%",
    right: {
      xs: "5%",
      md: "25%",
    },
    display: {
      xs: "none",
      md: "flex",
    },
    alignItems: "center",
    gap: 1.2,
    border: "1px solid rgba(0,207,193,0.45)",
    borderRadius: "30px",
    px: 2.5,
    py: 1.2,
    backgroundColor: "rgba(3,20,40,0.55)",

    animation: "scaleFloat 7s ease-in-out infinite",

    "@keyframes scaleFloat": {
      "0%, 100%": {
        transform: "translate(0, 0) rotate(0deg)",
      },
      "25%": {
        transform: "translate(12px, -15px) rotate(2deg)",
      },
      "50%": {
        transform: "translate(-8px, -25px) rotate(0deg)",
      },
      "75%": {
        transform: "translate(-18px, -8px) rotate(-2deg)",
      },
    },
  }}
>
  <ScaleOutlinedIcon
    sx={{
      color: "#00CFC1",
      fontSize: 23,
    }}
  />

  <Typography
    sx={{
      color: "#fff",
      fontWeight: 700,
      fontSize: "1rem",
    }}
  >
    0.000 KG
  </Typography>
</Box>
    </Box>
  );
};

export default Hero;