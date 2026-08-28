import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import cctvImage from "../../assets/cctv-camera1.png";

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
    let pauseTimeout;

    const interval = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];

      if (pause) return;

      if (!deleting) {
        charIndex++;

        setTypedText(currentPhrase.slice(0, charIndex));

        if (charIndex === currentPhrase.length) {
          pause = true;

          pauseTimeout = setTimeout(() => {
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

    return () => {
      clearInterval(interval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  return (
<Box
  id="home"
  sx={{
    position: "relative",
    width: "100%",
    height:'90vh',

    /*
      Navbar fixed/absolute இருப்பதால்
      Hero அதற்கு கீழே start ஆகும்.
    */
    marginTop: {
      xs: "72px",
      md: "82px",
    },

    minHeight: {
      xs: "calc(100vh - 72px)",
      md: "calc(100vh - 96px)",
    },

    overflow: "hidden",

    backgroundImage: `url(${cctvImage})`,
    backgroundRepeat: "no-repeat",

    backgroundSize: {
      xs: "auto 100%",
      sm: "cover",
      md: "cover",
      lg: "cover",
      xl: "cover",
    },

    backgroundPosition: {
      xs: "72% center",
      sm: "75% center",
      md: "78% center",
      lg: "center center",
      xl: "center center",
    },

    backgroundColor: "aliceblue",
  }}
>

      {/* =====================================================
          SOFT OVERLAY
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          zIndex: 1,

          pointerEvents: "none",

          background: {
            xs: `
              linear-gradient(
                180deg,
                rgba(240,248,255,0.90) 0%,
                rgba(240,248,255,0.72) 45%,
                rgba(240,248,255,0.25) 100%
              )
            `,

            md: `
              linear-gradient(
                90deg,
                rgba(240,248,255,0.98) 0%,
                rgba(240,248,255,0.94) 30%,
                rgba(240,248,255,0.72) 48%,
                rgba(240,248,255,0.15) 68%,
                rgba(240,248,255,0.00) 100%
              )
            `,
          },
        }}
      />

      {/* =====================================================
          SUBTLE BOTTOM BLEND
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,

          height: {
            xs: "25%",
            md: "18%",
          },

          zIndex: 1,

          pointerEvents: "none",

          background:
            "linear-gradient(to top, rgba(240,248,255,0.45), transparent)",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          minHeight: {
            xs: "auto",
            md: "calc(100vh - 96px)",
          },

          maxWidth: "1600px",

          mx: "auto",

          px: {
            xs: 3,
            sm: 5,
            md: 7,
            lg: 6,
            xl: 7,
          },

          py: {
            xs: 8,
            sm: 8,
            md: 7,
            lg: 6,
          },

          display: "flex",

          alignItems: "center",

          /*
            IMPORTANT:
            Content only takes left side.
            Camera remains completely independent
            in the background.
          */
          justifyContent: "flex-start",
        }}
      >

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "90%",
              md: "62%",
              lg: "58%",
              xl: "56%",
            },

            maxWidth: "850px",

            display: "flex",

            flexDirection: "column",

            alignItems: "flex-start",

            pt: {
              xs: 2,
              md: 1,
            },
          }}
        >

          {/* =====================================================
              ENTERPRISE BADGE
          ===================================================== */}

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

              backgroundColor: "rgba(240,248,255,0.55)",

              backdropFilter: "blur(3px)",
            }}
          >
            <Box
              sx={{
                width: 10,

                height: 10,

                borderRadius: "50%",

                backgroundColor: "#ff4d57",

                flexShrink: 0,

                animation:
                  "statusBlink 1.2s ease-in-out infinite",

                "@keyframes statusBlink": {
                  "0%, 100%": {
                    opacity: 1,

                    boxShadow:
                      "0 0 8px rgba(255,77,87,0.7)",
                  },

                  "50%": {
                    opacity: 0.3,

                    boxShadow:
                      "0 0 2px rgba(255,77,87,0.2)",
                  },
                },
              }}
            />

            <Typography
              sx={{
                color: "black",

                fontSize: {
                  xs: "0.7rem",
                  sm: "0.8rem",
                  md: "0.9rem",
                  lg: "0.95rem",
                },

                fontWeight: 700,

                letterSpacing: "2px",
              }}
            >
              ENTERPRISE INFRASTRUCTURE
            </Typography>
          </Box>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

<Typography
  component="h1"
  sx={{
    fontFamily: '"Barlow Condensed", sans-serif',
    fontWeight: 500,
    fontSize: {
      xs: "2.5rem",
      sm: "3.2rem",
      md: "3.5rem",
      lg: "3.9rem",
      xl: "4.5rem",
    },
    lineHeight: 0.98,
    letterSpacing: "0px",
    color: "#06182D",
  }}
>
  Reliable Technical Solutions
</Typography>

          {/* =====================================================
              TYPING TEXT
          ===================================================== */}

          <Typography
            component="div"
            sx={{
              fontFamily:
                '"Barlow Condensed", sans-serif',

              color: "#154340",

              fontWeight: 300,

              lineHeight: 1,

              letterSpacing: "-2px",

              fontSize: {
                xs: "2.4rem",
                sm: "3rem",
                md: "3.4rem",
                lg: "3.9rem",
                xl: "4.5rem",
              },

              mt: 0.7,

              display: "flex",

              alignItems: "center",

              minHeight: "1em",

              textShadow:
                "0 1px 8px rgba(240,248,255,0.4)",
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

                animation:
                  "cursorBlink 0.8s step-end infinite",

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

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <Typography
            sx={{
              fontFamily: '"Barlow", sans-serif',

              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "18px",
                lg: "19px",
              },

              fontWeight: 400,

              lineHeight: 1.55,

              color: "black",

              mt: 3,

              maxWidth: {
                xs: "100%",
                md: "720px",
              },

              textShadow:
                "0 1px 7px rgba(240,248,255,0.45)",
            }}
          >
            Expertise in Weight Calibration, Camera
            Solutions, and Network Connection & Setup.
            We build the reliable systems that power
            modern enterprise.
          </Typography>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

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
  {/* =================================================
      GET A QUOTE
  ================================================= */}

  <Button
    variant="contained"
    endIcon={
      <ArrowForwardIcon
        sx={{
          fontSize: "22px !important",
          transition:
            "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
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

      boxShadow:
        "0 8px 25px rgba(0,207,193,0.18)",

      /*
       * Main transition
       */
      transition:
        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), " +
        "box-shadow 0.4s ease, " +
        "background-color 0.3s ease",

      /*
       * Shine layer
       */
      "&::before": {
        content: '""',

        position: "absolute",

        top: 0,
        left: "-120%",

        width: "80%",
        height: "100%",

        background:
          "linear-gradient(" +
          "105deg, " +
          "transparent 0%, " +
          "rgba(255,255,255,0.05) 35%, " +
          "rgba(255,255,255,0.55) 50%, " +
          "rgba(255,255,255,0.05) 65%, " +
          "transparent 100%" +
          ")",

        transform: "skewX(-20deg)",

        transition:
          "left 0.7s cubic-bezier(0.22, 1, 0.36, 1)",

        pointerEvents: "none",
      },

      /*
       * Hover
       */
      "&:hover": {
        backgroundColor: "#00CFC1",

        transform:
          "translateY(-5px) scale(1.02)",

        boxShadow:
          "0 16px 38px rgba(0,207,193,0.32), " +
          "0 0 0 1px rgba(0,207,193,0.15)",

        "&::before": {
          left: "140%",
        },

        "& .MuiButton-endIcon": {
          transform:
            "translateX(7px)",
        },
      },

      /*
       * Click / press
       */
      "&:active": {
        transform:
          "translateY(-1px) scale(0.97)",

        boxShadow:
          "0 6px 15px rgba(0,207,193,0.2)",
      },

      /*
       * Arrow
       */
      "& .MuiButton-endIcon": {
        position: "relative",
        zIndex: 2,

        marginLeft: "10px",

        transition:
          "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      },

      /*
       * Text stays above shine
       */
      "& > *": {
        position: "relative",
        zIndex: 2,
      },
    }}
  >
    Get a Quote
  </Button>

  {/* =================================================
      EXPLORE SERVICES
  ================================================= */}

  <Button
    variant="contained"
    endIcon={
      <ArrowForwardIcon
        sx={{
          fontSize: "22px !important",
          transition:
            "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
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

      boxShadow:
        "0 8px 25px rgba(0,207,193,0.18)",

      /*
       * Main transition
       */
      transition:
        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), " +
        "box-shadow 0.4s ease, " +
        "background-color 0.3s ease",

      /*
       * Shine layer
       */
      "&::before": {
        content: '""',

        position: "absolute",

        top: 0,
        left: "-120%",

        width: "80%",
        height: "100%",

        background:
          "linear-gradient(" +
          "105deg, " +
          "transparent 0%, " +
          "rgba(255,255,255,0.05) 35%, " +
          "rgba(255,255,255,0.55) 50%, " +
          "rgba(255,255,255,0.05) 65%, " +
          "transparent 100%" +
          ")",

        transform: "skewX(-20deg)",

        transition:
          "left 0.7s cubic-bezier(0.22, 1, 0.36, 1)",

        pointerEvents: "none",
      },

      /*
       * Hover
       */
      "&:hover": {
        backgroundColor: "#00CFC1",

        transform:
          "translateY(-5px) scale(1.02)",

        boxShadow:
          "0 16px 38px rgba(0,207,193,0.32), " +
          "0 0 0 1px rgba(0,207,193,0.15)",

        "&::before": {
          left: "140%",
        },

        "& .MuiButton-endIcon": {
          transform:
            "translateX(7px)",
        },
      },

      /*
       * Click / press
       */
      "&:active": {
        transform:
          "translateY(-1px) scale(0.97)",

        boxShadow:
          "0 6px 15px rgba(0,207,193,0.2)",
      },

      /*
       * Arrow
       */
      "& .MuiButton-endIcon": {
        position: "relative",
        zIndex: 2,

        marginLeft: "10px",

        transition:
          "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      },

      /*
       * Text stays above shine
       */
      "& > *": {
        position: "relative",
        zIndex: 2,
      },
    }}
  >
    Explore Services
  </Button>
</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;