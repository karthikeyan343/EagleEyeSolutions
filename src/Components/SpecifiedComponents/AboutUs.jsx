import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import cctvImage from '../../assets/cctv.webp';

const AboutUs = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  
  const headerRef = useRef(null);
  const bannerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerRef.current) {
          setHeaderVisible(entry.isIntersecting);
        }
        if (entry.target === bannerRef.current) {
          setBannerVisible(entry.isIntersecting);
        }
        if (entry.target === cardRef.current) {
          setCardVisible(entry.isIntersecting);
        }
      });
    };

    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (bannerRef.current) observer.observe(bannerRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (bannerRef.current) observer.unobserve(bannerRef.current);
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: { xs: 'auto', lg: '100vh' },
        py: { xs: 8, lg: 12 },
        px: { xs: 3, sm: 5, md: 8, xl: 12 },
        background: 'linear-gradient(135deg,#06182D 0%,#082F49 38%,#0A5265 68%,#00CFC1 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& *': {
          fontFamily: '"Barlow", sans-serif !important',
        },
        // Decorative background glows
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'rgba(0,207,193,.18)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'rgba(7,24,45,.22)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        },
        // Keyframe animations
        '@keyframes fadeInDown': {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes scaleIn': {
          '0%': { opacity: 0, transform: 'scale(0.92)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '.animate-fade-down': {
          opacity: 0,
          ...(headerVisible && {
            animation: 'fadeInDown 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
        '.animate-scale-in': {
          opacity: 0,
          ...(bannerVisible && {
            animation: 'scaleIn 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
        '.animate-fade-up': {
          opacity: 0,
          ...(cardVisible && {
            animation: 'fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }),
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 2, lg: 4 } }}>
        {/* Top Header Block */}
        <Box
          ref={headerRef}
          className="animate-fade-down"
          sx={{
            textAlign: 'center',
            maxWidth: { xs: 800, xl: 1000 },
            mx: 'auto',
            mb: { xs: 6, lg: 8 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', xl: '1.1rem' },
              color: '#00CFC1',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: '"Barlow Condensed", sans-serif !important',
              fontWeight: 700,
              mb: 1,
            }}
          >
            About Eagle Eye Solutions
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif !important',
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem', xl: '4rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Your Trusted Partner for Advanced Infrastructure & Calibration
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1.05rem', xl: '1.2rem' },
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
              maxWidth: '850px',
              mx: 'auto',
            }}
          >
            Bridging the gap between complex hardware integration, secure enterprise networking, and municipal surveillance excellence.
          </Typography>
        </Box>

        {/* Main Split Grid Section (Single Image/Banner Display) */}
        <Box
          ref={bannerRef}
          className="animate-scale-in"
          sx={{
            maxWidth: '1000px',
            mx: 'auto',
            mb: { xs: 6, lg: 8 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              minHeight: { xs: 360, sm: 450, lg: 520, xl: 580 },
              boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
              border: '1px solid rgba(8,47,73,.16)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 24px 60px rgba(0,207,193,0.25)',
                '& img': {
                  transform: 'scale(1.06)',
                },
              },
            }}
          >
            <Box
              component="img"
              src={cctvImage}
              alt="Eagle Eye Solutions Operations"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(7,24,45,0.1) 30%, rgba(7,24,45,0.9) 100%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 24, sm: 32, xl: 40 },
                left: { xs: 24, sm: 32, xl: 40 },
                right: { xs: 24, sm: 32, xl: 40 },
                zIndex: 1,
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif !important',
                  fontSize: { xs: '1.5rem', sm: '2rem', xl: '2.4rem' },
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                Precision & Reliability at Scale
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem', xl: '1.15rem' },
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.02em',
                  maxWidth: '750px',
                }}
              >
                Outfitting intersections, corporate networks, and weighbridges with industry-leading standards.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Detailed Secondary Full-Width Content Card Below */}
        <Box
          ref={cardRef}
          className="animate-fade-up"
          sx={{
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          <Card
            elevation={0}
            sx={{
              width: '100%',
              background: 'linear-gradient(145deg,#FFFFFF 0%,#F2FBFA 100%)',
              border: '1px solid rgba(8,47,73,.16)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
              transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
              '&:hover': {
                borderColor: '#00CFC1',
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 45px rgba(0,207,193,0.25)',
              },
            }}
          >
            <CardContent
              sx={{
                p: { xs: 4, sm: 5, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
              }}
            >
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
                EXPERTISE
              </Box>

              <Typography
                component="h4"
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif !important',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.1rem' },
                  fontWeight: 600,
                  color: '#07182D',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Built for High-Stakes Environments & Seamless Integration
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.6,
                  color: '#60788A',
                  letterSpacing: '0.01em',
                  mb: 2,
                }}
              >
                Our comprehensive approach ensures every deployment meets rigorous compliance and stress benchmarks. From municipal monitoring grids to secure corporate networks, we engineer stability from the ground up, guaranteeing continuous uptime and crystal-clear data processing.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.6,
                  color: '#60788A',
                  letterSpacing: '0.01em',
                }}
              >
                Backed by certified testing protocols and expert field support, Eagle Eye Solutions delivers unmatched performance across all hardware assets under any weather or operational condition, giving you absolute control and peace of mind.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;