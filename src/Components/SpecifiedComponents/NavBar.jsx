import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import logoBrand from "../../assets/LogoBrand.png";

const NavBar = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      // Floating navbar only after Hero is completely crossed
      setIsFloating(heroBottom <= 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
     { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const navbarHeight = 80;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <Box
      sx={{
        /*
         * =========================================
         * FIXED NAVBAR
         * =========================================
         *
         * This removes the white gap because the
         * navbar no longer takes space in the page.
         */
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,

        zIndex: 1100,

        /*
         * When floating, create white space
         * around the navbar.
         */
        px: {
          xs: 0,
          sm: isFloating ? 1.5 : 0,
          md: isFloating ? 3 : 0,
          lg: isFloating ? 6 : 0,
        },

        pt: {
          xs: 0,
          sm: isFloating ? 1 : 0,
          md: isFloating ? 1.5 : 0,
        },

        transition: "all 0.45s ease",

        pointerEvents: "none",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          pointerEvents: "auto",

          /*
           * =========================================
           * ALWAYS NAVY
           * =========================================
           *
           * No transparency.
           */
          backgroundColor: "#07182D",

          /*
           * =========================================
           * FLOATING EFFECT
           * =========================================
           */
          border: isFloating
            ? "1px solid rgba(0, 207, 186, 0.65)"
            : "1px solid #00CFBA",

          borderRadius: isFloating
            ? "16px"
            : "0px",

          boxShadow: isFloating
            ? "0 12px 35px rgba(7, 24, 45, 0.28)"
            : "none",

          backdropFilter: isFloating
            ? "blur(12px)"
            : "none",

          WebkitBackdropFilter: isFloating
            ? "blur(12px)"
            : "none",

          transition:
            "background-color 0.45s ease, " +
            "border 0.45s ease, " +
            "border-radius 0.45s ease, " +
            "box-shadow 0.45s ease",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "80px !important",

            px: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
            },

            display: "flex",
            alignItems: "center",
          }}
        >
          {/* =====================================
              LOGO
              ===================================== */}

          <Box
            component="a"
            href="#home"
            onClick={(e) =>
              handleNavClick(e, "#home")
            }
            sx={{
              display: "flex",
              alignItems: "center",

              textDecoration: "none",

              color: "#fff",

              flexShrink: 0,

              mr: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Box
              component="img"
              src={logoBrand}
              alt="Eagle Eye Solutions"
              sx={{
                width: {
                  xs: 42,
                  sm: 50,
                  md: 68,
                },

                height: {
                  xs: 42,
                  sm: 50,
                  md: 60,
                },

                objectFit: "cover",

                display: "block",

                mx: {
                  xs: 1.5,
                  sm: 2,
                  md: 0,
                },

                transform: "scale(1.15)",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily:
                      '"Barlow Condensed", sans-serif',

                    fontSize: {
                      xs: "23px",
                      sm: "27px",
                      md: "28px",
                    },

                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  EAGLE
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    fontFamily:
                      '"Barlow Condensed", sans-serif',

                    fontSize: {
                      xs: "23px",
                      sm: "27px",
                      md: "28px",
                    },

                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "1px",
                    color: "#00CFBA",
                    ml: "8px",
                  }}
                >
                  EYE
                </Typography>
              </Box>

              <Typography
                component="span"
                sx={{
                  fontFamily:
                    '"Barlow Condensed", sans-serif',

                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "19px",
                  },

                  fontWeight: 400,
                  lineHeight: 1,

                  letterSpacing: {
                    xs: "4px",
                    sm: "5px",
                    md: "5.2px",
                  },

                  color: "#FFFFFF",

                  mt: "5px",
                }}
              >
                SOLUTIONS
              </Typography>
            </Box>
          </Box>

          {/* =====================================
              DESKTOP NAVIGATION
              ===================================== */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              gap: {
                md: 3,
                lg: 4,
              },

              ml: "auto",

              mr: {
                md: 4,
                lg: 6,
              },
            }}
          >
            {navItems.map((item, index) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                onClick={(e) =>
                  handleNavClick(e, item.href)
                }
                sx={{
                  position: "relative",

                  textDecoration: "none",

                  fontFamily:
                    '"Barlow", sans-serif',

                  color:
                    index === 0
                      ? "#FFFFFF"
                      : "rgba(255,255,255,0.75)",

                  fontSize: {
                    md: "19px",
                    lg: "22px",
                  },

                  fontWeight: 600,

                  py: 2,

                  transition:
                    "color 0.25s ease",

                  "&:hover": {
                    color: "#FFFFFF",
                  },

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: 0,

                    bottom: 7,

                    width:
                      index === 0
                        ? "100%"
                        : "0%",

                    height: "2px",

                    backgroundColor:
                      "#00CFBA",

                    transition:
                      "width 0.25s ease",
                  },

                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* =====================================
              GET A QUOTE
              ===================================== */}

          <Button
            component="a"
            href="#contact"
            onClick={(e) =>
              handleNavClick(e, "#contact")
            }
            variant="contained"
            disableElevation
            sx={{
              display: {
                xs: "none",
                sm: "inline-flex",
              },

              ml: {
                sm: 2,
                md: 0,
              },

              minWidth: {
                sm: 130,
                md: 140,
              },

              height: {
                sm: 44,
                md: 45,
              },

              px: {
                sm: 2,
                md: 3,
              },

              borderRadius: "22px",

              backgroundColor: "#00CFBA",

              color: "#07182D",

              fontSize: {
                sm: "15px",
                md: "17px",
              },

              fontWeight: 700,

              textTransform: "none",

              transition:
                "all 0.25s ease",

              "&:hover": {
                backgroundColor: "#12D8C5",

                transform:
                  "translateY(-2px)",

                boxShadow:
                  "0 8px 24px rgba(0, 207, 186, 0.22)",
              },
            }}
          >
            Get a Quote
          </Button>

          {/* =====================================
              MOBILE MENU
              ===================================== */}

          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              color: "#FFFFFF",

              ml: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",

                flexDirection: "column",

                gap: "5px",
              }}
            >
              <Box
                sx={{
                  width: 23,
                  height: 2,
                  backgroundColor: "#FFFFFF",
                }}
              />

              <Box
                sx={{
                  width: 23,
                  height: 2,
                  backgroundColor: "#FFFFFF",
                }}
              />

              <Box
                sx={{
                  width: 23,
                  height: 2,
                  backgroundColor: "#FFFFFF",
                }}
              />
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;