import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import cctvImage from '../../assets/CCTV-Traffic-Camera.jpg';
import networkingImage from '../../assets/networking.webp';
import weightCalibrationImage from '../../assets/weightcaliberaiton.jpg';

const Service = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const [card3Visible, setCard3Visible] = useState(false);

  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerRef.current) {
          setHeaderVisible(entry.isIntersecting);
        }
        if (entry.target === card1Ref.current) {
          setCard1Visible(entry.isIntersecting);
        }
        if (entry.target === card2Ref.current) {
          setCard2Visible(entry.isIntersecting);
        }
        if (entry.target === card3Ref.current) {
          setCard3Visible(entry.isIntersecting);
        }
      });
    };

    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (card1Ref.current) observer.unobserve(card1Ref.current);
      if (card2Ref.current) observer.unobserve(card2Ref.current);
      if (card3Ref.current) observer.unobserve(card3Ref.current);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 3, sm: 5, md: 8 },
        background: 'linear-gradient(135deg,#06182D 0%,#082F49 38%,#0A5265 68%,#00CFC1 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        '& *': {
          fontFamily: '"Barlow", sans-serif !important',
        },
        // Background decorative glowing elements
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'rgba(0,207,193,.18)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'rgba(7,24,45,.22)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none',
        },
        '@keyframes fadeInDown': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '@keyframes fadeInUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '.animate-fade-down': {
          opacity: 0,
          ...(headerVisible && {
            animation: 'fadeInDown 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
        '.animate-fade-up-1': {
          opacity: 0,
          ...(card1Visible && {
            animation: 'fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
        '.animate-fade-up-2': {
          opacity: 0,
          ...(card2Visible && {
            animation: 'fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
        '.animate-fade-up-3': {
          opacity: 0,
          ...(card3Visible && {
            animation: 'fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Section Header */}
        <Box
          ref={headerRef}
          className="animate-fade-down"
          sx={{
            textAlign: 'center',
            maxWidth: 750,
            mb: { xs: 5, sm: 6, md: 7 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem' },
              color: '#00CFC1',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: '"Barlow Condensed", sans-serif !important',
              fontWeight: 700,
              mb: 1,
            }}
          >
            What We Excel At
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif !important',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Our Core Engineering Services & Solutions
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
            }}
          >
            Delivering precision infrastructure, high-speed connectivity, and rigorous calibration standards to empower modern municipal and industrial systems.
          </Typography>
        </Box>

        {/* Cards Stack with Individual Scroll-triggered Animations */}
        <Stack spacing={4} sx={{ width: '100%', maxWidth: 1050, alignItems: 'center' }}>
          {/* Card 1: CCTV Project */}
          <Box ref={card1Ref} sx={{ width: '100%' }} className="animate-fade-up-1">
            <Card
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                background: 'linear-gradient(145deg,#FFFFFF 0%,#F2FBFA 100%)',
                border: '1px solid rgba(8,47,73,.16)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
                '&:hover': {
                  borderColor: '#00CFC1',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 45px rgba(0,207,193,0.15)',
                },
              }}
            >
              {/* Left Side: Image Card */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '100%', md: '48%' },
                  minHeight: { xs: 280, md: 420 },
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={cctvImage}
                  alt="Eagle Eye Solutions Installation"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    '.MuiCard-root:hover &': {
                      transform: 'scale(1.06)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,24,45,0.05) 25%, rgba(7,24,45,0.85) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 16, sm: 18, md: 24 },
                    left: { xs: 16, sm: 18, md: 24 },
                    right: { xs: 16, sm: 18, md: 24 },
                    zIndex: 1,
                  }}
                >
                  <Typography 
                    component="h3" 
                    fontWeight={600}
                    sx={{ 
                      fontFamily: '"Barlow Condensed", sans-serif !important',
                      fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' }, 
                      lineHeight: 1.1,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      mb: 0.5,
                    }}
                  >
                    Eagle Eye Solutions Deployment
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.9rem', md: '1rem' }, 
                      color: 'rgba(255,255,255,0.85)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      fontFamily: '"Barlow Condensed", sans-serif !important',
                      fontWeight: 600,
                    }}
                  >
                    Namakkal, Tamil Nadu
                  </Typography>
                </Box>
              </Box>

              {/* Right Side: Description Content */}
              <CardContent
                sx={{
                  width: { xs: '100%', md: '52%' },
                  p: { xs: 3, sm: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                {/* Category Label */}
                <Box
                  sx={{
                    alignSelf: 'flex-start',
                    px: 1.5,
                    py: 0.4,
                    borderRadius: '4px',
                    background: 'linear-gradient(135deg,#07182D,#00CFC1)',
                    color: '#FFFFFF',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  SERVICE
                </Box>

                <Typography 
                  component="h4" 
                  fontWeight={600} 
                  sx={{ 
                    fontFamily: '"Barlow Condensed", sans-serif !important',
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.6rem' },
                    color: '#07182D', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    mb: 1.5,
                    lineHeight: 1.2,
                  }}
                >
                  Official Deployment & Installation Partner
                </Typography>

                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.84rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                    color: '#60788A',
                    letterSpacing: '0.01em',
                    mb: 1.5,
                  }}
                >
                  Eagle Eye Solutions is proud to serve as the official deployment and installation partner for the Namakkal ANPR CCTV Project, outfitting key intersections, checkpoints, and high-traffic corridors with state-of-the-art surveillance hardware.
                </Typography>

                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.84rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                    color: '#60788A',
                    letterSpacing: '0.01em',
                    mb: 3,
                  }}
                >
                  Our expert engineering team handles the complete end-to-end integration—combining high-definition optical capture with advanced machine-learning OCR systems to ensure robust vehicle tracking and streamlined traffic control.
                </Typography>

                <Button
                  href="#contact"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        fontSize: '18px !important',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    alignSelf: 'flex-start',
                    minWidth: 0,
                    px: { xs: 2, sm: 2.3, md: 2.5 },
                    py: { xs: 0.8, sm: 0.9, md: 1 },
                    borderRadius: '999px',
                    backgroundColor: '#FFFFFF',
                    color: '#07182D',
                    fontFamily: '"Barlow", sans-serif !important',
                    fontSize: { xs: '0.78rem', sm: '0.85rem', md: '0.9rem' },
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(90deg,#082F49,#00CFC1)',
                      color: '#FFFFFF',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 18px rgba(0,207,193,0.25)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    },
                  }}
                >
                  Get in touch
                </Button>
              </CardContent>
            </Card>
          </Box>

          {/* Card 2: System Networking */}
          <Box ref={card2Ref} sx={{ width: '100%' }} className="animate-fade-up-2">
            <Card
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                background: 'linear-gradient(145deg,#FFFFFF 0%,#F2FBFA 100%)',
                border: '1px solid rgba(8,47,73,.16)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
                '&:hover': {
                  borderColor: '#00CFC1',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 45px rgba(0,207,193,0.15)',
                },
              }}
            >
              {/* Left Side: Image Card */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '100%', md: '48%' },
                  minHeight: { xs: 280, md: 420 },
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={networkingImage}
                  alt="Eagle Eye System Networking"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    '.MuiCard-root:hover &': {
                      transform: 'scale(1.06)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,24,45,0.05) 25%, rgba(7,24,45,0.85) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 16, sm: 18, md: 24 },
                    left: { xs: 16, sm: 18, md: 24 },
                    right: { xs: 16, sm: 18, md: 24 },
                    zIndex: 1,
                  }}
                >
                  <Typography 
                    component="h3" 
                    fontWeight={600}
                    sx={{ 
                      fontFamily: '"Barlow Condensed", sans-serif !important',
                      fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' }, 
                      lineHeight: 1.1,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      mb: 0.5,
                    }}
                  >
                    Enterprise System Networking
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.9rem', md: '1rem' }, 
                      color: 'rgba(255,255,255,0.85)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      fontFamily: '"Barlow Condensed", sans-serif !important',
                      fontWeight: 600,
                    }}
                  >
                    Infrastructure & Connectivity
                  </Typography>
                </Box>
              </Box>

              {/* Right Side: Description Content */}
              <CardContent
                sx={{
                  width: { xs: '100%', md: '52%' },
                  p: { xs: 3, sm: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                {/* Category Label */}
                <Box
                  sx={{
                    alignSelf: 'flex-start',
                    px: 1.5,
                    py: 0.4,
                    borderRadius: '4px',
                    background: 'linear-gradient(135deg,#07182D,#00CFC1)',
                    color: '#FFFFFF',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  FITTING
                </Box>

                <Typography 
                  component="h4" 
                  fontWeight={600} 
                  sx={{ 
                    fontFamily: '"Barlow Condensed", sans-serif !important',
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.6rem' },
                    color: '#07182D', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    mb: 1.5,
                    lineHeight: 1.2,
                  }}
                >
                  Robust Network Architecture & Integration
                </Typography>

                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.84rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                    color: '#60788A',
                    letterSpacing: '0.01em',
                    mb: 1.5,
                  }}
                >
                  Eagle Eye Solutions delivers enterprise-grade system networking solutions designed to power secure, high-speed data transmission across multi-location surveillance and communication networks.
                </Typography>

                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.84rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                    color: '#60788A',
                    letterSpacing: '0.01em',
                    mb: 3,
                  }}
                >
                  Our networking specialists engineer resilient fiber-optic backbones, structured cabling, and secure wireless bridges to ensure uninterrupted uptime, low latency, and seamless centralized control for all critical infrastructures.
                </Typography>

                <Button
                  href="#contact"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        fontSize: '18px !important',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    alignSelf: 'flex-start',
                    minWidth: 0,
                    px: { xs: 2, sm: 2.3, md: 2.5 },
                    py: { xs: 0.8, sm: 0.9, md: 1 },
                    borderRadius: '999px',
                    backgroundColor: '#FFFFFF',
                    color: '#07182D',
                    fontFamily: '"Barlow", sans-serif !important',
                    fontSize: { xs: '0.78rem', sm: '0.85rem', md: '0.9rem' },
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(90deg,#082F49,#00CFC1)',
                      color: '#FFFFFF',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 18px rgba(0,207,193,0.25)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    },
                  }}
                >
                  Get in touch
                </Button>
              </CardContent>
            </Card>
          </Box>

          {/* Card 3: Weight Calibration Services */}
          <Box ref={card3Ref} sx={{ width: '100%' }} className="animate-fade-up-3">
            <Card
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                background: 'linear-gradient(145deg,#FFFFFF 0%,#F2FBFA 100%)',
                border: '1px solid rgba(8,47,73,.16)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
                '&:hover': {
                  borderColor: '#00CFC1',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 45px rgba(0,207,193,0.15)',
                },
              }}
            >
              {/* Left Side: Image Card */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '100%', md: '48%' },
                  minHeight: { xs: 280, md: 420 },
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={weightCalibrationImage}
                  alt="Eagle Eye Weight Calibration"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    '.MuiCard-root:hover &': {
                      transform: 'scale(1.06)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,24,45,0.05) 25%, rgba(7,24,45,0.85) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 16, sm: 18, md: 24 },
                    left: { xs: 16, sm: 18, md: 24 },
                    right: { xs: 16, sm: 18, md: 24 },
                    zIndex: 1,
                  }}
                >
                  <Typography 
                    component="h3" 
                    fontWeight={600}
                    sx={{ 
                      fontFamily: '"Barlow Condensed", sans-serif !important',
                      fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' }, 
                      lineHeight: 1.1,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      mb: 0.5,
                    }}
                  >
                    Precision Weight Calibration
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.9rem', md: '1rem' }, 
                      color: 'rgba(255,255,255,0.85)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      fontFamily: '"Barlow Condensed", sans-serif !important',
                      fontWeight: 600,
                    }}
                  >
                    Accuracy & Compliance Services
                  </Typography>
                </Box>
              </Box>

              {/* Right Side: Description Content */}
              <CardContent
                sx={{
                  width: { xs: '100%', md: '52%' },
                  p: { xs: 3, sm: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                {/* Category Label */}
                <Box
                  sx={{
                    alignSelf: 'flex-start',
                    px: 1.5,
                    py: 0.4,
                    borderRadius: '4px',
                    background: 'linear-gradient(135deg,#07182D,#00CFC1)',
                    color: '#FFFFFF',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  PRODUCT
                </Box>

                <Typography 
                  component="h4" 
                  fontWeight={600} 
                  sx={{ 
                    fontFamily: '"Barlow Condensed", sans-serif !important',
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.6rem' },
                    color: '#07182D', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    mb: 1.5,
                    lineHeight: 1.2,
                  }}
                >
                  Certified Calibration & Weighing Solutions
                </Typography>

                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.84rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                    color: '#60788A',
                    letterSpacing: '0.01em',
                    mb: 1.5,
                  }}
                >
                  Eagle Eye Solutions provides certified weight calibration and industrial weighing system services, ensuring strict precision and regulatory compliance for commercial, logistical, and enforcement weighbridges.
                </Typography>

                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.84rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                    color: '#60788A',
                    letterSpacing: '0.01em',
                    mb: 3,
                  }}
                >
                  Our technicians utilize high-precision reference standards and diagnostic tools to eliminate measurement errors, optimize load-cell performance, and maintain flawless data accuracy across all automated vehicle monitoring systems.
                </Typography>

                <Button
                  href="#contact"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        fontSize: '18px !important',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    alignSelf: 'flex-start',
                    minWidth: 0,
                    px: { xs: 2, sm: 2.3, md: 2.5 },
                    py: { xs: 0.8, sm: 0.9, md: 1 },
                    borderRadius: '999px',
                    backgroundColor: '#FFFFFF',
                    color: '#07182D',
                    fontFamily: '"Barlow", sans-serif !important',
                    fontSize: { xs: '0.78rem', sm: '0.85rem', md: '0.9rem' },
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(90deg,#082F49,#00CFC1)',
                      color: '#FFFFFF',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 18px rgba(0,207,193,0.25)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    },
                  }}
                >
                  Get in touch
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Service;