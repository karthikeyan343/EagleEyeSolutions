import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import logo from "../../assets/logo.png";

const primaryFont = '"Barlow Condensed", sans-serif';
const bodyFont = '"Barlow", sans-serif';

const secondaryColor = "#00CFC1";
const navyColor = "#07182D";
const textColor = "#AEBBCD";

const quickLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About Us", "#about"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const services = [
  "Weight Calibration",
  "Camera Solutions",
  "Network Setup",
  "Camera Installation & Setup",
];

const contacts = [
  {
    icon: <PhoneOutlinedIcon />,
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <EmailOutlinedIcon />,
    value: "info@eagleeyesolutions.com",
    href: "mailto:info@eagleeyesolutions.com",
  },
  {
    icon: <LocationOnOutlinedIcon />,
    value: "123 Tech Boulevard, Suite 400, Cityville",
  },
];

const smoothScroll = (e, href) => {
  if (!href.startsWith("#")) return;

  e.preventDefault();

  const target = document.querySelector(href);

  if (!target) return;

  const start = window.scrollY;
  const distance = target.getBoundingClientRect().top;

  const duration = Math.min(
    1500,
    Math.max(850, Math.abs(distance) * 0.55)
  );

  let time = null;

  const ease = (p) =>
    p < 0.5
      ? 4 * p * p * p
      : 1 - Math.pow(-2 * p + 2, 3) / 2;

  const animate = (t) => {
    if (!time) time = t;

    const progress = Math.min(
      (t - time) / duration,
      1
    );

    window.scrollTo(
      0,
      start + distance * ease(progress)
    );

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      window.history.replaceState(
        null,
        "",
        href
      );
    }
  };

  requestAnimationFrame(animate);
};

export default function Footer() {
  const linkSx = {
    width: "fit-content",

    color: textColor,

    fontFamily: `${bodyFont} !important`,

    fontSize: {
      xs: "0.9rem",
      md: "0.95rem",
    },

    lineHeight: 1.5,

    textDecoration: "none",

    transition:
      "color 0.25s ease, transform 0.25s ease",

    "&:hover": {
      color: secondaryColor,
      transform: "translateX(4px)",
    },
  };

  const headingSx = {
    position: "relative",

    color: "#FFFFFF",

    fontFamily: `${primaryFont} !important`,

    fontWeight: 600,

    fontSize: {
      xs: "1.05rem",
      md: "1.15rem",
    },

    letterSpacing: "0.02em",

    mb: 2,

    width: "fit-content",

    "&::after": {
      content: '""',

      position: "absolute",

      left: 0,

      bottom: -7,

      width: "28px",

      height: "2px",

      backgroundColor: secondaryColor,

      borderRadius: "2px",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",

        bgcolor: navyColor,

        color: "#FFFFFF",

        fontFamily: primaryFont,

        overflow: "hidden",

        "&::before": {
          content: '""',

          position: "absolute",

          inset: 0,

          backgroundImage: `
            linear-gradient(
              rgba(0,207,193,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,207,193,0.025) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "45px 45px",

          pointerEvents: "none",
        },

        /* cyan glow */
        "&::after": {
          content: '""',

          position: "absolute",

          width: "300px",

          height: "300px",

          left: "-180px",

          bottom: "-180px",

          backgroundColor: secondaryColor,

          opacity: 0.035,

          filter: "blur(100px)",

          borderRadius: "50%",

          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",

          zIndex: 1,

          px: {
            xs: 3,
            sm: 4,
            md: 5,
          },

          pt: {
            xs: 5,
            sm: 6,
            md: 7,
          },

          pb: {
            xs: 3,
            sm: 4,
            md: 4.5,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.35fr 0.8fr 1fr 1.2fr",
            },

            gap: {
              xs: 4,
              sm: 5,
              md: 6,
            },
          }}
        >

          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Link
              href="#home"
              onClick={(e) =>
                smoothScroll(e, "#home")
              }
              sx={{
                display: "inline-flex",

                alignItems: "center",

                gap: 1.5,

                color: "#FFFFFF",

                textDecoration: "none",

                mb: 2,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Eagle Eye Solutions"
                sx={{
                  width: {
                    xs: 52,
                    sm: 58,
                    md: 62,
                  },

                  height: {
                    xs: 40,
                    sm: 44,
                    md: 48,
                  },

                  objectFit: "contain",

                  mixBlendMode: "screen",
                }}
              />

              <Typography
                sx={{
                  color: "#FFFFFF",

                  fontFamily:
                    `${primaryFont} !important`,

                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.35rem",
                    md: "1.45rem",
                  },

                  fontWeight: 600,

                  letterSpacing: "0.01em",
                }}
              >
                Eagle Eye{" "}
                <Box
                  component="span"
                  sx={{
                    color: secondaryColor,
                  }}
                >
                  Solutions
                </Box>
              </Typography>
            </Link>

            <Typography
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: 330,
                },

                color: textColor,

                fontFamily:
                  `${bodyFont} !important`,

                fontSize: {
                  xs: "0.9rem",
                  md: "0.95rem",
                },

                lineHeight: 1.65,

                letterSpacing: "0.01em",
              }}
            >
              Providing precision technical services
              for modern enterprises. We deliver reliable
              weighing, camera, and network solutions
              designed for dependable business
              operations.
            </Typography>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                gap: 1,

                mt: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,

                  borderRadius: "50%",

                  backgroundColor: secondaryColor,

                  boxShadow:
                    "0 0 10px rgba(0,207,193,0.7)",

                  animation:
                    "footerPulse 2s ease-in-out infinite",

                  "@keyframes footerPulse": {
                    "0%, 100%": {
                      opacity: 1,
                    },
                    "50%": {
                      opacity: 0.4,
                    },
                  },
                }}
              />

              <Typography
                sx={{
                  color: "#8090A5",

                  fontFamily:
                    `${bodyFont} !important`,

                  fontSize: "0.78rem",

                  letterSpacing: "0.05em",

                  textTransform: "uppercase",
                }}
              >
                Reliable Technical Solutions
              </Typography>
            </Box>
          </Box>
          <Box
            component="nav"
            sx={{
              minWidth: 0,
            }}
          >
            <Typography sx={headingSx}>
              Quick Links
            </Typography>

            <Stack spacing={1}>
              {quickLinks.map(
                ([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={(e) =>
                      smoothScroll(e, href)
                    }
                    sx={linkSx}
                  >
                    {label}
                  </Link>
                )
              )}
            </Stack>
          </Box>
          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography sx={headingSx}>
              Our Services
            </Typography>

            <Stack spacing={1}>
              {services.map((service) => (
                <Link
                  key={service}
                  href="#services"
                  onClick={(e) =>
                    smoothScroll(
                      e,
                      "#services"
                    )
                  }
                  sx={linkSx}
                >
                  {service}
                </Link>
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography sx={headingSx}>
              Contact Us
            </Typography>

            <Stack spacing={1.5}>
              {contacts.map(
                ({ icon, value, href }) => (
                  <Box
                    key={value}
                    component={
                      href ? "a" : "div"
                    }
                    href={href}
                    sx={{
                      display: "flex",

                      alignItems:
                        "flex-start",

                      gap: 1.2,

                      color: textColor,

                      textDecoration:
                        "none",

                      transition:
                        "color 0.25s ease",

                      "&:hover": {
                        color:
                          secondaryColor,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color:
                          secondaryColor,

                        display: "flex",

                        flexShrink: 0,

                        mt: 0.1,

                        "& svg": {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>

                    <Typography
                      sx={{
                        color: "inherit",

                        fontFamily:
                          `${bodyFont} !important`,

                        fontSize: {
                          xs: "0.88rem",
                          md: "0.93rem",
                        },

                        lineHeight: 1.5,

                        wordBreak:
                          "break-word",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                )
              )}
            </Stack>
            <Button
              component="a"
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              endIcon={
                <ArrowForwardRoundedIcon />
              }
              variant="contained"
              sx={{
                mt: 2.5,

                px: {
                  xs: 2,
                  md: 2.5,
                },

                py: 1.1,

                backgroundColor:
                  secondaryColor,

                color: navyColor,

                textTransform: "none",

                fontFamily:
                  `${primaryFont} !important`,

                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },

                fontWeight: 600,

                letterSpacing: "0.02em",

                borderRadius: "7px",

                boxShadow:
                  "0 5px 20px rgba(0,207,193,0.12)",

                transition:
                  "all 0.3s ease",

                "&:hover": {
                  backgroundColor: "#19DEC9",

                  transform:
                    "translateY(-2px)",

                  boxShadow:
                    "0 8px 25px rgba(0,207,193,0.22)",
                },
              }}
            >
              Chat on WhatsApp
            </Button>
          </Box>
        </Box>

        <Divider
          sx={{
            my: {
              xs: 4,
              sm: 4.5,
              md: 5,
            },

            borderColor:
              "rgba(255,255,255,0.09)",
          }}
        />

        <Box
          sx={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              color: "#8F9DB1",

              fontFamily:
                `${bodyFont} !important`,

              fontSize: "0.82rem",

              letterSpacing: "0.01em",

              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            State of Tamil Nadu · Road Safety Mission
          </Typography>

          <Typography
            sx={{
              color: "#8F9DB1",

              fontFamily:
                `${bodyFont} !important`,

              fontSize: "0.82rem",

              textAlign: {
                xs: "center",
                sm: "right",
              },
            }}
          >
            Powered by ES EthicSecur SofTec
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 1.8,

            pt: 1.8,

            borderTop:
              "1px solid rgba(255,255,255,0.06)",

            display: "flex",

            justifyContent:
              "space-between",

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            alignItems: {
              xs: "center",
              sm: "center",
            },

            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: "#69788D",

              fontFamily:
                `${bodyFont} !important`,

              fontSize: "0.76rem",

              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} EthicSecur.
            All rights reserved.
          </Typography>

          <Typography
            sx={{
              color: "#69788D",

              fontFamily:
                `${bodyFont} !important`,

              fontSize: "0.76rem",

              textAlign: "center",
            }}
          >
            Professional technical solutions for
            modern businesses.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
