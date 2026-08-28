import {Box,Container,Grid,Typography,Card,CardContent} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HighQualityIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const aboutStandards = [
  {
    icon: <VerifiedIcon />,
    title: "Reliability",
    description:
      "Dependable solutions you can count on, engineered for maximum uptime.",
  },
  {
    icon: <EngineeringIcon />,
    title: "Technical Expertise",
    description:
      "Knowledgeable and experienced technicians ensuring best-in-class execution.",
  },
  {
    icon: <HighQualityIcon />,
    title: "Quality & Precision",
    description:
      "Meticulous attention to detail and rigorous standards in every project.",
  },
  {
    icon: <SupportAgentIcon />,
    title: "Customer Support",
    description:
      "Dedicated, ongoing assistance and maintenance when you need it most.",
  },
];

const AboutUs = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        pt: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        pb: {
          xs: 5,
          sm: 6,
          md: 8,
        },
        backgroundColor: "#f8fafc",
        fontFamily: '"Barlow", sans-serif',
        overflow: "hidden",
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box",

        "& *": {
          fontFamily: '"Barlow", sans-serif !important',
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 3,
            sm: 5,
            md: 6,
            lg: 4,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: {
              xs: 4,
              sm: 5,
              md: 6,
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",

                fontFamily:
                  '"Barlow", sans-serif !important',

                fontSize: {
                  xs: "0.85rem",
                  sm: "0.95rem",
                  md: "1.2rem",
                },

              fontWeight: 700,

              letterSpacing: "0.8px",

              color: "#06182D",

              textTransform: "uppercase",

              backgroundColor: "#00CFC1",

              px: {
                xs: 2.2,
                sm: 2.8,
                md: 3,
              },

              py: {
                xs: 0.8,
                sm: 0.9,
                md: 2,
              },

              borderRadius: "30px",

              mb: {
                xs: 2,
                sm: 2.2,
                md: 2.5,
              },
            }}
          >
            Our Standards
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily:
                '"Barlow Condensed", sans-serif !important',

              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.2rem",
              },

              fontWeight: 600,

              lineHeight: 1.05,

              letterSpacing: "0.01em",

              textTransform: "uppercase",

              color: "#0A192F",

              mb: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            }}
          >
            About{" "}
            <Box
              component="span"
              sx={{
                color: "#00CFC1",
                fontStyle: "italic",
                mr:2,
              }}
            >
              Eagle Eye
            </Box>
            Solutions
          </Typography>

          <Typography
            sx={{
              width: "100%",

              maxWidth: "1050px",

              mx: "auto",

              fontFamily:
                '"Barlow", sans-serif !important',

              color: "#4b5563",

              fontSize: {
                xs: "0.95rem",
                sm: "1.05rem",
                md: "1.15rem",
              },

              fontWeight: 400,

              lineHeight: 1.65,

              letterSpacing: "0.01em",

              textAlign: "center",
            }}
          >
            Eagle Eye Solutions provides specialized technical
            services for modern businesses, delivering reliable
            and practical solutions designed around real-world
            operational requirements. Our expertise spans
            industrial weight calibration, advanced camera
            monitoring, secure networking infrastructure, and
            technical system setup. We combine technical
            knowledge, precision, and dependable support to help
            businesses build systems that perform consistently
            and efficiently.
          </Typography>
        </Box>
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
    },
    gap: {
      xs: 2,
      sm: 2.5,
      md: 3,
    },
    width: "100%",
  }}
>
  {aboutStandards.map((item, index) => (
    <Card
      key={index}
      elevation={0}
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "auto",
          sm: "190px",
          md: "200px",
        },

        display: "flex",
        overflow: "hidden",

        backgroundColor: "#0A192F",

        border:
          "1px solid rgba(0,207,193,0.25)",

        borderRadius: "14px",

        boxSizing: "border-box",

        boxShadow:
          "0 10px 30px rgba(10,25,47,0.12)",

        transition:
          "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-120%",
          width: "70%",
          height: "100%",

          background:
            "linear-gradient(105deg, transparent, rgba(0,207,193,0.10), transparent)",

          transform: "skewX(-20deg)",

          transition: "left 0.7s ease",

          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",

          top: 0,
          right: 0,

          width: "55px",
          height: "55px",

          borderTop:
            "2px solid rgba(0,207,193,0.55)",

          borderRight:
            "2px solid rgba(0,207,193,0.55)",

          borderTopRightRadius: "14px",

          pointerEvents: "none",
        },

        "&:hover": {
          transform: "translateY(-6px)",

          borderColor:
            "rgba(0,207,193,0.7)",

          boxShadow:
            "0 18px 40px rgba(0,207,193,0.14)",

          "&::before": {
            left: "140%",
          },

          "& .standard-icon": {
            transform:
              "scale(1.08) rotate(4deg)",

            boxShadow:
              "0 0 20px rgba(0,207,193,0.18)",
          },

          "& .standard-number": {
            opacity: 0.12,

            transform:
              "translateY(-4px)",
          },
        },
      }}
    >
      <Typography
        className="standard-number"
        sx={{
          position: "absolute",

          right: {
            xs: 12,
            sm: 16,
            md: 18,
          },

          bottom: {
            xs: -12,
            sm: -15,
            md: -18,
          },

          fontFamily:
            '"Barlow Condensed", sans-serif !important',

          fontSize: {
            xs: "5rem",
            sm: "6rem",
            md: "7rem",
          },

          fontWeight: 700,

          lineHeight: 1,

          color: "#00CFC1",

          opacity: 0.055,

          transition:
            "opacity 0.35s ease, transform 0.35s ease",

          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </Typography>

      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,

          width: "100%",
          height: "100%",

          boxSizing: "border-box",

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",

          p: {
            xs: 2.5,
            sm: 3,
            md: 3.2,
          },

          "&:last-child": {
            pb: {
              xs: 2.5,
              sm: 3,
              md: 3.2,
            },
          },
        }}
      >
        {/* ICON */}

        <Box
          className="standard-icon"
          sx={{
            width: {
              xs: 42,
              sm: 46,
              md: 48,
            },

            height: {
              xs: 42,
              sm: 46,
              md: 48,
            },

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            borderRadius: "10px",

            backgroundColor:
              "rgba(0,207,193,0.09)",

            border:
              "1px solid rgba(0,207,193,0.3)",

            color: "#00CFC1",

            mb: {
              xs: 1.5,
              md: 1.8,
            },

            transition:
              "transform 0.35s ease, box-shadow 0.35s ease",

            "& svg": {
              fontSize: {
                xs: 22,
                sm: 24,
                md: 26,
              },
            },
          }}
        >
          {item.icon}
        </Box>
        <Typography
          component="h3"
          sx={{
            fontFamily:
              '"Barlow Condensed", sans-serif !important',

            fontSize: {
              xs: "1.2rem",
              sm: "1.3rem",
              md: "1.45rem",
            },

            fontWeight: 600,

            color: "#FFFFFF",

            letterSpacing: "0.02em",

            lineHeight: 1.15,

            mb: {
              xs: 0.8,
              md: 1,
            },
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontFamily:
              '"Barlow", sans-serif !important',

            fontSize: {
              xs: "0.86rem",
              sm: "0.92rem",
              md: "0.98rem",
            },

            fontWeight: 400,

            lineHeight: 1.5,

            color:
              "rgba(255,255,255,0.74)",

            letterSpacing: "0.01em",

            maxWidth: "95%",
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
