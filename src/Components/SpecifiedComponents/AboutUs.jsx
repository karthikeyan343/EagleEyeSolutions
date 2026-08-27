import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HighQualityIcon from '@mui/icons-material/WorkspacePremium';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const aboutStandards = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 22, color: '#0d9488' }} />,
    title: 'Reliability',
    description: 'Dependable solutions you can count on, engineered for maximum uptime.',
    bgColor: '#f0fdf4',
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 22, color: '#0284c7' }} />,
    title: 'Technical Expertise',
    description: 'Knowledgeable and experienced technicians ensuring best-in-class execution.',
    bgColor: '#f0f9ff',
  },
  {
    icon: <HighQualityIcon sx={{ fontSize: 22, color: '#7c3aed' }} />,
    title: 'Quality & Precision',
    description: 'Meticulous attention to detail and rigorous standards in every project.',
    bgColor: '#f5f3ff',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 22, color: '#d97706' }} />,
    title: 'Customer Support',
    description: 'Dedicated, ongoing assistance and maintenance when you need it most.',
    bgColor: '#fffbeb',
  },
];

const AboutUs = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        pt: { xs: 3, sm: 4, md: 5 },
        pb: { xs: 4, sm: 6, md: 8 },
        backgroundColor: '#f8fafc',
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
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 5, md: 8 }, boxSizing: 'border-box' }}>
        <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center">
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                textAlign: { xs: 'center', lg: 'left' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', lg: 'flex-start' },
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
                Our Standards
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
                }}
              >
                About Eagle Eye Solutions
              </Typography>

              <Typography
                sx={{
                  color: '#4b5563',
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.5,
                  letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
                }}
              >
                Eagle Eye Solutions provides specialized technical services for modern businesses. We focus on delivering robust and reliable installations tailored to your operational needs—spanning industrial weight calibration, advanced camera monitoring, and secure network infrastructure.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={7}>
            <Grid container spacing={2}>
              {aboutStandards.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' }}>
                  <Card
                    elevation={0}
                    sx={{
                      width: '100%',
                      height: '130px', // Fixed height ensures every single card is identical in size
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      backgroundColor: item.bgColor,
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                      transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        // p: '14px !important', 
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      }}
                    >
                      <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'center' }}>
                        {item.icon}
                      </Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#111827',
                          letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
                          textTransform: 'none',
                          lineHeight: 1.2,
                          mb: 0.3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.78rem',
                          lineHeight: 1.3,
                          color: '#4b5563',
                          letterSpacing: { xs: '0.01em', sm: '0.02em', md: '0.03em' },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;