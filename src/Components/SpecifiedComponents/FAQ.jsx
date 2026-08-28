import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const fontFamily = '"Barlow", sans-serif';
const secondaryColor = "#00CFBA";
const navyColor = "#07182D";

const faqItems = [
  ["How often should industrial scales be calibrated?", "Calibration frequency depends on usage and industry regulations. We generally recommend at least annual calibration, or more frequently for high-use or critical-precision environments to maintain accuracy and reliability."],
  ["Do you provide remote monitoring for camera systems?", "Yes. Eagle Eye Solutions provides remote monitoring support for compatible camera systems, helping businesses monitor their security infrastructure and respond quickly to potential issues."],
  ["What network security protocols do you implement?", "We implement secure networking practices including protected access, device authentication, firewall configuration, network segmentation and secure communication protocols based on your infrastructure requirements."],
  ["What are your scale accuracy standards?", "Our weight calibration services are designed to maintain reliable and accurate measurements according to your operational requirements and applicable industry standards."],
  ["Can you upgrade existing security camera setups?", "Yes. We can assess existing camera infrastructure and provide suitable upgrades, replacements, networking improvements and installation services to improve reliability and coverage."]
];

function InfiniteTyping({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!deleting && displayText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 120);
    } else if (!deleting && displayText.length === text.length) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, 1600);
    } else if (deleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 70);
    } else {
      timer = setTimeout(() => {
        setDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [displayText, deleting, text]);

  return (
    <Box component="span" sx={{ display: "inline-block", minWidth: "1ch" }}>
      {displayText}
    </Box>
  );
}

export default function FAQ() {
  const [expanded, setExpanded] = useState(0);

  const scrollToContact = () => {
    const target = document.getElementById("contact");
    if (!target) return;

    const start = window.scrollY;
    const distance = target.getBoundingClientRect().top;
    const duration = Math.min(
      1500,
      Math.max(850, Math.abs(distance) * 0.55)
    );

    const startTime = performance.now();

    const ease = t =>
      t < 0.5
        ? 4 * t ** 3
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = now => {
      const progress = Math.min(
        (now - startTime) / duration,
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
          "#contact"
        );
      }
    };

    requestAnimationFrame(animate);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return (
    <Box
      component="section"
      id="faq"
      aria-labelledby="faq-heading"
      sx={{
        bgcolor: "#FFF",
        py: { xs: 8, sm: 10, md: 12 },
        fontFamily
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 }
          }}
        >
          <Typography
            id="faq-heading"
            component="h2"
            sx={{
              mb: 2,
              color: navyColor,
              fontFamily,
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "3.6rem"
              },
              fontWeight: 700,
              lineHeight: 1.05
            }}
          >
            Frequently Asked {' '}
            

            <Box
              component="span"
              sx={{
                color: secondaryColor,
                display: "inline-block",
                minWidth: "7ch"
              }}
            >
              <InfiniteTyping text="Questions." />
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: 620,
              mx: "auto",
              color: "#667085",
              fontFamily,
              fontSize: {
                xs: "1rem",
                sm: "1.1rem"
              },
              lineHeight: 1.7
            }}
          >
            Everything you need to know about our weighing, camera,
            networking and installation services.
          </Typography>
        </Box>

        {faqItems.map(([question, answer], index) => {
          const isExpanded = expanded === index;

          return (
            <Accordion
              key={question}
              expanded={isExpanded}
              onChange={() =>
                setExpanded(isExpanded ? false : index)
              }
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "transparent",
                borderTop: "1px solid #E3E8EE",
                "&:last-child": {
                  borderBottom: "1px solid #E3E8EE"
                },
                "&:before": {
                  display: "none"
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      bgcolor: isExpanded
                        ? secondaryColor
                        : "#F3F6F9",
                      color: isExpanded
                        ? navyColor
                        : "#667085"
                    }}
                  >
                    <AddRoundedIcon
                      sx={{
                        transform: isExpanded
                          ? "rotate(45deg)"
                          : "none",
                        transition:
                          "transform .35s ease"
                      }}
                    />
                  </Box>
                }
                sx={{
                  minHeight: 84,
                  px: 0
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: navyColor,
                    fontFamily,
                    fontSize: {
                      xs: "1.05rem",
                      sm: "1.15rem",
                      md: "1.2rem"
                    },
                    fontWeight: isExpanded
                      ? 700
                      : 600
                  }}
                >
                  {question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 0,
                  pb: 3
                }}
              >
                <Box
                  sx={{
                    bgcolor: navyColor,
                    borderRadius: "7px",
                    px: {
                      xs: 2.2,
                      sm: 3
                    },
                    py: {
                      xs: 2.2,
                      sm: 2.5
                    },
                    borderLeft: `4px solid ${secondaryColor}`
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      mb: 0,
                      color: "#FFF",
                      fontFamily,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.05rem"
                      },
                      lineHeight: 1.75
                    }}
                  >
                    {answer}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}

        <Box
          sx={{
            mt: { xs: 6, sm: 7 },
            p: { xs: 3, sm: 4 },
            borderRadius: "8px",
            bgcolor: navyColor,
            display: "flex",
            alignItems: {
              xs: "flex-start",
              sm: "center"
            },
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            gap: 2.5,
            borderLeft: `4px solid ${secondaryColor}`
          }}
        >
          <Box>
            <Typography
              component="h3"
              sx={{
                mb: 0.5,
                color: "#FFF",
                fontFamily,
                fontSize: "1.2rem",
                fontWeight: 700
              }}
            >
              Still have{" "}
              <Box
                component="span"
                sx={{ color: secondaryColor }}
              >
                questions?
              </Box>
            </Typography>

            <Typography
              component="p"
              sx={{
                mb: 0,
                color: "#AEBBCD",
                fontFamily
              }}
            >
              Our team is ready to discuss your requirements.
            </Typography>
          </Box>

          <Button
            onClick={scrollToContact}
            variant="contained"
            endIcon={<ArrowRightAltRoundedIcon />}
            sx={{
              bgcolor: secondaryColor,
              color: navyColor,
              textTransform: "none",
              fontFamily,
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#19DEC9",
                transform: "translateY(-2px)"
              }
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
}