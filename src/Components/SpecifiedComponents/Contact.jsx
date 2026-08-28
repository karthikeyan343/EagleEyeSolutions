import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const fontFamily = '"Barlow Condensed",sans-serif',
  secondaryColor = "#00CFBA",
  navyColor = "#07182D";
const services = [
  "Weight Calibration",
  "Camera Solutions",
  "Network Setup",
  "Camera Installation & Setup",
  "Other Enquiry",
];
const contactItems = [
  {
    icon: PhoneOutlinedIcon,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: EmailOutlinedIcon,
    title: "Email",
    value: "info@eagleeyesolutions.com",
    href: "mailto:info@eagleeyesolutions.com",
  },
  {
    icon: LocationOnOutlinedIcon,
    title: "Location",
    value: "123 Tech Boulevard, Suite 400, Cityville",
  },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#FFF",
    borderRadius: "5px",
    fontFamily,
    "& fieldset": { borderColor: "#D9E1EA" },
    "&:hover fieldset": { borderColor: secondaryColor },
    "&.Mui-focused fieldset": { borderColor: secondaryColor },
  },
  "& input,& textarea,& .MuiSelect-select": { fontFamily, color: navyColor },
  "& input::placeholder,& textarea::placeholder": {
    color: "#8A96A6",
    opacity: 1,
    fontFamily,
  },
};
const labelSx = {
  display: "block",
  mb: 0.7,
  color: "#FFF",
  fontFamily,
  fontSize: ".9rem",
  fontWeight: 600,
};

function InfiniteTyping({ text }) {
  const [displayText, setDisplayText] = useState(""),
    [deleting, setDeleting] = useState(false);
  useEffect(() => {
    let timer;
    if (!deleting && displayText.length < text.length)
      timer = setTimeout(
        () => setDisplayText(text.slice(0, displayText.length + 1)),
        110,
      );
    else if (!deleting && displayText.length === text.length)
      timer = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && displayText.length > 0)
      timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 70);
    else timer = setTimeout(() => setDeleting(false), 500);
    return () => clearTimeout(timer);
  }, [displayText, deleting, text]);
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        minWidth: "1ch",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: "default",
        caretColor: "transparent",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        "&:focus": { outline: "none" },
      }}
    >
      {displayText}
    </Box>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    }),
    [submitted, setSubmitted] = useState(false),
    [error, setError] = useState("");
  const handleChange = ({ target: { name, value } }) => {
    if (name === "name") value = value.replace(/[^a-zA-Z\s]/g, "");
    if (name === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
    setError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone, email, service, message } = Object.fromEntries(
      Object.entries(formData).map(([k, v]) => [k, v.trim()]),
    );
    if (!name || !phone || !email || !service || !message)
      return setError("Please complete all required fields.");
    if (!/^[A-Za-z\s]+$/.test(name))
      return setError("Name should contain letters only.");
    if (!/^\d{10}$/.test(phone))
      return setError("Phone number must contain exactly 10 digits.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid email address with @.");
    const existing = JSON.parse(
      localStorage.getItem("eagleEyeEnquiries") || "[]",
    );
    localStorage.setItem(
      "eagleEyeEnquiries",
      JSON.stringify([
        ...existing,
        {
          id: Date.now(),
          name,
          phone,
          email,
          service,
          message,
          submittedAt: new Date().toISOString(),
        },
      ]),
    );
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setError("");
    setSubmitted(true);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Eagle Eye Solutions",
    description:
      "Contact Eagle Eye Solutions for camera solutions, weight calibration, network setup, installation and technical support.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Eagle Eye Solutions",
      telephone: "+1 (555) 123-4567",
      email: "info@eagleeyesolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Boulevard, Suite 400",
        addressLocality: "Cityville",
      },
      areaServed: "Cityville",
      serviceType: services.slice(0, 4),
    },
  };

  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-heading"
      sx={{
        width: "100%",
        bgcolor: "#FFF",
        py: { xs: 9, sm: 11, md: 14 },
        scrollMarginTop: "20px",
        fontFamily,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              id="contact-heading"
              component="h1"
              sx={{
                maxWidth: 520,
                mb: 2.5,
                color: navyColor,
                fontFamily:
                '"Barlow", sans-serif !important',
                fontSize: { xs: "2.7rem", sm: "3.8rem", md: "4.5rem" },
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
              }}
            >
              <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                Let's Build The
              </Box>
              <br />
              <Box
                component="span"
                sx={{
                  color: secondaryColor,
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  minWidth: "10ch",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  caretColor: "transparent",
                  outline: "none",
                }}
              >
                <InfiniteTyping text="Right Solution." />
              </Box>
            </Typography>

            <Typography
              component="p"
              sx={{
                maxWidth: 470,
                mb: 5,
                color: "#667085",
                fontFamily:
                '"Barlow", sans-serif !important',
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                lineHeight: 1.5,
              }}
            >
              Tell us what your business needs. From camera systems and weight
              calibration to networking and installation, our team is ready to
              help.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {contactItems.map(({ icon: Icon, title, value, href }) => (
                <Box
                  key={title}
                  component={href ? "a" : "div"}
                  href={href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "fit-content",
                    textDecoration: "none",
                    "&:hover .contact-icon": {
                      bgcolor: secondaryColor,
                      color: navyColor,
                      transform: "translateY(-2px)",
                    },
                    "&:hover .contact-value": { color: navyColor },
                  }}
                >
                  <Box
                    className="contact-icon"
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      bgcolor: "#E7FAF7",
                      color: secondaryColor,
                      transition: "all .3s ease",
                    }}
                  >
                    <Icon sx={{ fontSize: 21 }} />
                  </Box>
                  <Box>
                    <Typography
                      component="h3"
                      sx={{
                        mb: 0.3,
                        color: navyColor,
                        fontFamily:
                '"Barlow", sans-serif !important',
                        fontSize: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      className="contact-value"
                      component="span"
                      sx={{
                        color: "#667085",
                       fontFamily:
                '"Barlow", sans-serif !important',
                        fontSize: ".95rem",
                        transition: "color .3s ease",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              p: { xs: 2.5, sm: 3.5, md: 4 },
              border: `1px solid ${navyColor}`,
              borderRadius: "10px",
              bgcolor: navyColor,
              boxShadow: "0 20px 50px rgba(7,24,45,.16)",
              fontFamily:
                '"Barlow", sans-serif !important',
            }}
          >
            <Box
              sx={{ mb: 3.5, pl: 2, borderLeft: `3px solid ${secondaryColor}` }}
            >
              <Typography
                component="h2"
                sx={{
                  mb: 0.6,
                  color: "#FFF",
                  fontFamily:
                '"Barlow", sans-serif !important',
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                  fontWeight: 700,
                }}
              >
                Tell us{" "}
                <Box component="span" sx={{ color: secondaryColor }}>
                  what you need
                </Box>
              </Typography>
              <Typography
                component="p"
                sx={{ mb: 0, color: "#AEBBCD", fontFamily:
                '"Barlow", sans-serif !important', fontSize: "1rem" }}
              >
                Complete the form and our team will get back to you.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <Box>
                <Typography sx={labelSx}>
                  Name{" "}
                  <Box component="span" sx={{ color: secondaryColor }}>
                    *
                  </Box>
                </Typography>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="Enter your name"
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography sx={labelSx}>
                  Phone Number{" "}
                  <Box component="span" sx={{ color: secondaryColor }}>
                    *
                  </Box>
                </Typography>
                <TextField
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="tel"
                  inputProps={{ inputMode: "numeric", maxLength: 10 }}
                  placeholder="Enter your phone number"
                  sx={inputSx}
                />
              </Box>

              <Box sx={{ gridColumn: { xs: "auto", sm: "1 / -1" } }}>
                <Typography sx={labelSx}>
                  Email Address{" "}
                  <Box component="span" sx={{ color: secondaryColor }}>
                    *
                  </Box>
                </Typography>
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="email"
                  placeholder="name@example.com"
                  sx={inputSx}
                />
              </Box>

              <Box sx={{ gridColumn: { xs: "auto", sm: "1 / -1" } }}>
                <Typography sx={labelSx}>
                  Service Required{" "}
                  <Box component="span" sx={{ color: secondaryColor }}>
                    *
                  </Box>
                </Typography>
                <TextField
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  select
                  fullWidth
                  sx={inputSx}
                  slotProps={{
                    select: {
                      displayEmpty: true,
                      renderValue: (selected) => selected || "Select a service",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select a service
                  </MenuItem>
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box sx={{ gridColumn: { xs: "auto", sm: "1 / -1" } }}>
                <Typography sx={labelSx}>
                  Tell us about your requirement{" "}
                  <Box component="span" sx={{ color: secondaryColor }}>
                    *
                  </Box>
                </Typography>
                <TextField
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  minRows={5}
                  placeholder="Describe your requirement..."
                  sx={inputSx}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                disableElevation
                endIcon={<ArrowForwardIcon />}
                sx={{
                  gridColumn: { xs: "auto", sm: "1 / -1" },
                  minHeight: 52,
                  bgcolor: secondaryColor,
                  color: navyColor,
                  borderRadius: "5px",
                  textTransform: "none",
                  fontFamily,
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#19DEC9",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Send Enquiry
              </Button>
            </Box>

            {error && (
              <Typography
                role="alert"
                sx={{ mt: 2, color: "#FFB4B4", fontFamily }}
              >
                {error}
              </Typography>
            )}
            {submitted && (
              <Typography
                role="status"
                sx={{ mt: 2, color: secondaryColor, fontFamily }}
              >
                Thank you. Your enquiry has been received successfully.
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
