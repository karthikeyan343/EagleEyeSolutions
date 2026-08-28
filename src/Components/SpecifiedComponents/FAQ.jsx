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
        py: { xs: 8, sm: 10, md: 8 },
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
              fontFamily:
                '"Barlow Condensed", sans-serif !important',

              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.3rem",
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
            Frequently Asked {' '}
            <Box
              component="span"
              sx={{
                color: secondaryColor,
                display: "inline-block",
                minWidth: "7ch"
              }}
            >
              <InfiniteTyping text="Questions" />
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              width: "100%",

              maxWidth: "1050px",

              mx: "auto",

              fontFamily:
                '"Barlow", sans-serif !important',

              color: "#4b5563",

              fontSize: {
                xs: "0.95rem",
                sm: "1.10rem",
                md: "1.25rem",
              },

              fontWeight: 400,

              lineHeight: 1.65,

              letterSpacing: "0.01em",

              textAlign: "center",
            }}
          >
            Everything you need to know about our weighing, camera,<br/>
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
                fontFamily:
                '"Barlow", sans-serif !important',
                    fontSize: {
                      xs: "1.05rem",
                      sm: "1.15rem",
                      md: "1.4rem"
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
                      fontFamily:
                       '"Barlow", sans-serif !important',
                      fontSize: {
                        xs: "1rem",
                        sm: "1.03rem"
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
                fontFamily:
                '"Barlow", sans-serif !important',
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
                fontFamily:
                '"Barlow", sans-serif !important',
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
              fontFamily:
                '"Barlow", sans-serif !important',
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
