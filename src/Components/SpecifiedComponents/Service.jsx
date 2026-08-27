import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Container,
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

  const services = [...originalServices, ...originalServices, ...originalServices];

  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const updateCardFocus = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    cardRefs.current.forEach((cardEl) => {
      if (!cardEl) return;
      const cardRect = cardEl.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      const distanceFromCenter = Math.abs(containerCenter - cardCenter);
      const maxDistance = containerRect.width / 2;

      let progress = distanceFromCenter / maxDistance;
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = 1.08 - progress * 0.16;
      const opacity = 1 - progress * 0.55;

      cardEl.style.transform = `scale(${Math.max(scale, 0.92)})`;
      cardEl.style.opacity = `${Math.max(opacity, 0.45)}`;
      cardEl.style.zIndex = Math.round((1 - progress) * 10);
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    let animationFrameId;
    const scrollSpeed = 0.6;

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;
        
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
        
        updateCardFocus();
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, updateCardFocus]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth > 900 ? 340 : container.clientWidth * 0.8;
      const singleSetWidth = container.scrollWidth / 3;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(() => {
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
        updateCardFocus();
      }, 300);
    }
  };

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 6, sm: 10, md: 16 },
        backgroundColor: '#ffffff',
        fontFamily: '"Barlow Condensed", sans-serif',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        position: 'relative',
        boxSizing: 'border-box',
        '& *': {
          fontFamily: '"Barlow Condensed", sans-serif !important',
          letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
          wordSpacing: '0.04em',
        },
      }}
    >
      <Box sx={{ width: '100%', px: { xs: 3, sm: 5, md: 8 }, boxSizing: 'border-box' }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '850px',
            mx: 'auto',
            mb: { xs: 6, sm: 8, md: 12 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
              fontWeight: 700,
              letterSpacing: { xs: '0.06em', sm: '0.08em', md: '0.12em' },
              color: '#0d9488',
              textTransform: 'uppercase',
              backgroundColor: '#ccfbf1',
              px: { xs: 2, sm: 3 },
              py: 0.75,
              borderRadius: '8px',
              mb: 2.5,
            }}
          >
            Our Capabilities
          </Box>

          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              color: '#111827',
              fontSize: { xs: '1.5rem', sm: '2.2rem', md: '2.8rem' },
              letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
              lineHeight: { xs: 1.25, sm: 1.2, md: 1.15 },
              mb: 3,
              textTransform: 'uppercase',
              maxWidth: { xs: '100%', sm: '650px', md: '750px' },
              mx: 'auto',
              px: { xs: 1, sm: 0 },
            }}
          >
            Technical Services Built for Practical Operations
          </Typography>

          <Typography
            sx={{
              color: '#4b5563',
              fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.5,
              maxWidth: '650px',
              mx: 'auto',
              letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
              px: { xs: 1, sm: 0 },
            }}
          >
            We focus on practical, robust solutions that keep your systems running smoothly.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            mb: 4,
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
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: { md: 8, lg: 24 },
              zIndex: 10,
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              '&:hover': { backgroundColor: '#f9fafb', borderColor: '#d1d5db' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <Box
            ref={scrollRef}
            onScroll={updateCardFocus}
            sx={{
              display: 'flex',
              gap: { xs: '16px', sm: '28px', md: '36px' },
              overflowX: 'auto',
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              py: { xs: 3, md: 6 },
              px: { 
                xs: 'calc(50vw - 115px)', 
                sm: 'calc(50vw - 140px)', 
                md: 'calc(50vw - 170px)' 
              }, 
              width: '100%',
              alignItems: 'center',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '230px', sm: '280px', md: '340px' },
                  transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
                  willChange: 'transform, opacity',
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <CardContent
                    sx={{
                      px: { xs: 2, sm: 3, md: 3.5 },
                      pt: { xs: 2.5, sm: 3, md: 3.5 },
                      pb: 1.5,
                      textAlign: 'left',
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.35rem' },
                        fontWeight: 700,
                        color: '#111827',
                        letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
                        textTransform: 'none',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </CardContent>

                  <Box
                    sx={{
                      height: { xs: 140, sm: 170, md: 200 },
                      width: '100%',
                      flexShrink: 0,
                      overflow: 'hidden',
                      backgroundColor: '#f3f4f6',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      px: { xs: 2, sm: 3, md: 3.5 },
                      pt: { xs: 2, sm: 2.5, md: 3 },
                      pb: { xs: 2.5, sm: 3, md: 3.5 },
                      textAlign: 'left',
                      '&:last-child': { pb: { xs: 2.5, sm: 3, md: 3.5 } },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' },
                        lineHeight: 1.45,
                        color: '#4b5563',
                        flexGrow: 1,
                        letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Button
                      href="#contact"
                      disableRipple
                      sx={{
                        alignSelf: 'flex-start',
                        mt: { xs: 2.5, sm: 3, md: 3.5 },
                        p: 0,
                        minWidth: 0,
                        color: '#0d9488',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                        fontWeight: 600,
                        letterSpacing: { xs: '0.02em', sm: '0.03em', md: '0.04em' },
                        textTransform: 'uppercase',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#0f766e',
                        },
                      }}
                    >
                      Get in touch
                      <ArrowForwardIcon sx={{ ml: 0.75, fontSize: '1rem' }} />
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          <IconButton
            onClick={() => handleScroll('right')}
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              right: { md: 8, lg: 24 },
              zIndex: 10,
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              '&:hover': { backgroundColor: '#f9fafb', borderColor: '#d1d5db' },
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