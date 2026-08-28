import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Weight from '../../assets/Weightcaliberation.jpg';
import camera from '../../assets/camera.jpg';
import network from '../../assets/network.jpg';

const Service = () => {
  const originalServices = [
    {
      title: 'Weight Calibration',
      description:
        'Precision calibration and rigorous verification protocols for industrial and commercial weighing equipment, ensuring compliance, traceability, and exact measurements.',
      image: Weight,
    },
    {
      title: 'Camera Solutions',
      description:
        'Complete CCTV deployment, intelligent monitoring integration, and secure surveillance architectures designed for comprehensive facility-wide oversight.',
      image: camera,
    },
    {
      title: 'Network Setup',
      description:
        'Reliable network infrastructure built from the ground up. We engineer high-speed, secure, and scalable network architectures tailored for modern enterprise needs.',
      image: network,
    },
  ];

  const services = [
    ...originalServices,
    ...originalServices,
    ...originalServices,
  ];

  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const updateCardFocus = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter =
      containerRect.left + containerRect.width / 2;

    cardRefs.current.forEach((cardEl) => {
      if (!cardEl) return;

      const cardRect = cardEl.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      const distanceFromCenter = Math.abs(
        containerCenter - cardCenter
      );

      const maxDistance = containerRect.width / 2;

      let progress = distanceFromCenter / maxDistance;
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = 1.08 - progress * 0.16;
      const opacity = 1 - progress * 0.55;

      cardEl.style.transform = `scale(${Math.max(
        scale,
        0.92
      )})`;

      cardEl.style.opacity = `${Math.max(opacity, 0.45)}`;

      cardEl.style.zIndex = Math.round(
        (1 - progress) * 10
      );
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth =
      container.scrollWidth / 3;

    container.scrollLeft = singleSetWidth;

    let animationFrameId;

    const scrollSpeed = 0.6;

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;

        if (
          container.scrollLeft >=
          singleSetWidth * 2
        ) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }

        updateCardFocus();
      }

      animationFrameId =
        requestAnimationFrame(autoScroll);
    };

    animationFrameId =
      requestAnimationFrame(autoScroll);

    return () =>
      cancelAnimationFrame(animationFrameId);
  }, [isHovered, updateCardFocus]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const scrollAmount =
      container.clientWidth > 900
        ? 340
        : container.clientWidth * 0.8;

    const singleSetWidth =
      container.scrollWidth / 3;

    container.scrollBy({
      left:
        direction === 'left'
          ? -scrollAmount
          : scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(() => {
      if (
        container.scrollLeft >=
        singleSetWidth * 2
      ) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
      }

      updateCardFocus();
    }, 300);
  };

  return (
    <Box
      id="services"
      component="section"
      sx={{
        pt: {
          xs: 4,
          sm: 6,
          md: 8,
        },

        pb: {
          xs: 4,
          sm: 6,
          md: 8,
        },

        backgroundColor: '#ffffff',

        fontFamily:
          '"Barlow", sans-serif',

        overflow: 'hidden',

        width: '100%',
        maxWidth: '100vw',

        position: 'relative',

        boxSizing: 'border-box',

        '& *': {
          fontFamily:
            '"Barlow", sans-serif !important',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          px: {
            xs: 3,
            sm: 5,
            md: 8,
          },
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '850px',
            mx: 'auto',
            mb: {
              xs: 4,
              sm: 5,
              md: 6,
            },

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
<Box
  component="span"
  sx={{
    display: "inline-block",

      fontFamily: '"Barlow", sans-serif',
      fontSize: {
        xs: "0.9rem",
        md: "1rem",
      },  

    fontWeight: 700,

    letterSpacing: "0.8px",

    color: "#06182D",

    textTransform: "uppercase",

    backgroundColor: "#00CFC1",

    px: {
      xs: 2,
      sm: 2.5,
      md: 3,
    },

    py: {
      xs: 0.7,
      sm: 0.8,
      md: 2,
    },

    borderRadius: "999px",

    mb: {
      xs: 1.8,
      sm: 2,
    },

    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#00b8ac",
      transform: "translateY(-2px)",
      boxShadow:
        "0 6px 18px rgba(0, 207, 193, 0.25)",
    },
  }}
>
  Our Capabilities
</Box>

          <Typography
            component="h2"
            sx={{
              fontFamily:
                '"Barlow Condensed", sans-serif !important',

              fontWeight: 600,

              color: '#111827',

              fontSize: {
                xs: '1.8rem',
                sm: '2.35rem',
                md: '3rem',
              },

              letterSpacing: {
                xs: '0.01em',
                sm: '0.015em',
                md: '0.02em',
              },

              lineHeight: {
                xs: 1.15,
                sm: 1.1,
                md: 1.05,
              },

              mb: {
                xs: 1.5,
                sm: 1.8,
                md: 2,
              },

              textTransform: 'uppercase',

              maxWidth: {
                xs: '100%',
                sm: '650px',
                md: '800px',
              },

              mx: 'auto',

              px: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            Technical Services Built for Practical Operations
          </Typography>
          <Typography
            sx={{
              fontFamily:
                '"Barlow", sans-serif !important',

              color: '#4b5563',

              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem',
              },

              lineHeight: 1.45,

              maxWidth: '620px',

              mx: 'auto',

              letterSpacing: {
                xs: '0.01em',
                sm: '0.015em',
                md: '0.02em',
              },

              px: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            We focus on practical, robust solutions that keep
            your systems running smoothly.
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',

            width: '100%',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <IconButton
            onClick={() => handleScroll('left')}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },

              position: 'absolute',

              left: {
                md: 8,
                lg: 24,
              },

              zIndex: 10,

              backgroundColor: '#ffffff',

              border:
                '1px solid #e5e7eb',

              boxShadow:
                '0 4px 12px rgba(0,0,0,0.06)',

              '&:hover': {
                backgroundColor: '#f9fafb',
                borderColor: '#00CFC1',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Box
            ref={scrollRef}
            onScroll={updateCardFocus}
            sx={{
              display: 'flex',

              gap: {
                xs: '16px',
                sm: '28px',
                md: '36px',
              },

              overflowX: 'auto',

              scrollBehavior: 'auto',

              scrollbarWidth: 'none',

              '&::-webkit-scrollbar': {
                display: 'none',
              },

              py: {
                xs: 2,
                md: 4,
              },

              px: {
                xs: 'calc(50vw - 115px)',
                sm: 'calc(50vw - 140px)',
                md: 'calc(50vw - 170px)',
              },

              width: '100%',

              alignItems: 'center',

              WebkitOverflowScrolling: 'touch',
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                ref={(el) =>
                  (cardRefs.current[index] = el)
                }
                sx={{
                  flex: '0 0 auto',

                  width: {
                    xs: '230px',
                    sm: '280px',
                    md: '340px',
                  },

                  transition:
                    'transform 0.2s ease-out, opacity 0.2s ease-out',

                  willChange:
                    'transform, opacity',
                }}
              >
<Card
  elevation={0}
  sx={{
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",

    backgroundColor: "#0A192F",

    border: "1px solid rgba(0,207,193,0.25)",
    borderRadius: "16px",

    overflow: "hidden",

    boxShadow:
      "0 12px 35px rgba(10,25,47,0.18)",

    transition:
      "box-shadow 0.35s ease, border-color 0.35s ease",

    "&:hover": {
      borderColor: "rgba(0,207,193,0.65)",

      boxShadow:
        "0 20px 45px rgba(10,25,47,0.28)",
    },
  }}
>
  <Box
    sx={{
      position: "relative",

      height: {
        xs: 180,
        sm: 210,
        md: 235,
      },

      width: "100%",

      overflow: "hidden",

      flexShrink: 0,
    }}
  >
    <CardMedia
      component="img"
      image={service.image}
      alt={service.title}
      sx={{
        width: "100%",
        height: "100%",

        objectFit: "cover",

        transition:
          "transform 0.6s ease",

        ".MuiCard-root:hover &": {
          transform: "scale(1.06)",
        },
      }}
    />
    <Box
      sx={{
        position: "absolute",

        inset: 0,

        background:
          "linear-gradient(180deg, rgba(10,25,47,0.05) 25%, rgba(10,25,47,0.9) 100%)",
      }}
    />
    <Box
      sx={{
        position: "absolute",

        left: {
          xs: 16,
          sm: 18,
          md: 20,
        },

        bottom: {
          xs: 16,
          sm: 18,
          md: 20,
        },

        display: "inline-flex",

        alignItems: "center",

        gap: 1,

        px: {
          xs: 1.5,
          sm: 1.8,
          md: 2,
        },

        py: {
          xs: 0.7,
          sm: 0.8,
          md: 0.9,
        },

        borderRadius: "999px",

        backgroundColor:
          "rgba(10,25,47,0.88)",

        border:
          "1px solid rgba(0,207,193,0.55)",

        backdropFilter: "blur(6px)",
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,

          borderRadius: "50%",

          backgroundColor: "#00CFC1",

          boxShadow:
            "0 0 8px rgba(0,207,193,0.7)",
        }}
      />

      <Typography
        component="h3"
        sx={{
          fontFamily:
            '"Barlow Condensed", sans-serif !important',

          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.2rem",
          },

          fontWeight: 600,

          color: "#FFFFFF",

          letterSpacing: "0.05em",

          lineHeight: 1,

          textTransform: "uppercase",
        }}
      >
        {service.title}
      </Typography>
    </Box>
  </Box>

  <CardContent
    sx={{
      flex: 1,

      display: "flex",

      flexDirection: "column",

      px: {
        xs: 2,
        sm: 2.5,
        md: 3,
      },

      pt: {
        xs: 2,
        sm: 2.3,
        md: 2.5,
      },

      pb: {
        xs: 2,
        sm: 2.3,
        md: 2.5,
      },

      textAlign: "left",

      "&:last-child": {
        pb: {
          xs: 2,
          sm: 2.3,
          md: 2.5,
        },
      },
    }}
  >
    <Typography
      sx={{
        fontFamily:
          '"Barlow", sans-serif !important',

        fontSize: {
          xs: "0.84rem",
          sm: "0.9rem",
          md: "1rem",
        },

        lineHeight: 1.5,

        color:
          "rgba(255,255,255,0.78)",

        flexGrow: 1,

        letterSpacing: "0.01em",
      }}
    >
      {service.description}
    </Typography>
    <Button
      href="#contact"
      endIcon={
        <ArrowForwardIcon
          sx={{
            fontSize:
              "18px !important",

            transition:
              "transform 0.3s ease",
          }}
        />
      }
      sx={{
        alignSelf: "flex-start",

        mt: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        minWidth: 0,

        px: {
          xs: 2,
          sm: 2.3,
          md: 2.5,
        },

        py: {
          xs: 0.8,
          sm: 0.9,
          md: 1,
        },

        borderRadius: "999px",

        backgroundColor: "#00CFC1",

        color: "#06182D",

        fontFamily:
          '"Barlow", sans-serif !important',

        fontSize: {
          xs: "0.78rem",
          sm: "0.85rem",
          md: "0.9rem",
        },

        fontWeight: 700,

        letterSpacing: "0.05em",

        textTransform: "uppercase",

        transition:
          "all 0.3s ease",

        "&:hover": {
          backgroundColor: "#00CFC1",

          transform:
            "translateY(-2px)",

          boxShadow:
            "0 6px 18px rgba(0,207,193,0.25)",

          "& .MuiButton-endIcon": {
            transform:
              "translateX(4px)",
          },
        },
      }}
    >
      Get in touch
    </Button>
  </CardContent>
</Card>
              </Box>
            ))}
          </Box>
          <IconButton
            onClick={() => handleScroll('right')}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },

              position: 'absolute',

              right: {
                md: 8,
                lg: 24,
              },

              zIndex: 10,

              backgroundColor: '#ffffff',

              border:
                '1px solid #e5e7eb',

              boxShadow:
                '0 4px 12px rgba(0,0,0,0.06)',

              '&:hover': {
                backgroundColor: '#f9fafb',
                borderColor: '#00CFC1',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
