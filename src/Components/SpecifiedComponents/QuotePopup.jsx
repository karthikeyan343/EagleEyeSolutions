import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const QuotePopup = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Enter a valid name";
    } else if (!nameRegex.test(trimmedName)) {
      newErrors.name = "Enter a valid name";
    }

    if (!trimmedEmail) {
      newErrors.email = "Work email is required";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!trimmedPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(trimmedPhone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!trimmedMessage) {
      newErrors.message = "Please describe your requirement";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Please enter at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setErrors({});

    handleClose();
  };

  const labelSx = {
    display: "block",
    mb: 0.6,
    color: "#263A50",
    fontFamily: '"Barlow", sans-serif',
    fontSize: "0.86rem",
    fontWeight: 600,
    letterSpacing: "0.1px",
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      height: 48,
      borderRadius: "5px",
      backgroundColor: "#F8FAFC",
      fontFamily: '"Barlow", sans-serif',
      transition: "all 0.25s ease",

      "& fieldset": {
        borderColor: "#DCE3E9",
      },

      "&:hover fieldset": {
        borderColor: "#B9C6D2",
      },

      "&.Mui-focused": {
        backgroundColor: "#FFFFFF",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#00CFC1",
        borderWidth: "1px",
      },
    },

    "& .MuiInputBase-input": {
      fontFamily: '"Barlow", sans-serif',
      fontSize: "0.94rem",
      color: "#07182D",
    },

    "& .MuiInputBase-input::placeholder": {
      color: "#8B9AAA",
      opacity: 1,
    },

    "& .MuiSelect-select": {
      fontFamily: '"Barlow", sans-serif',
      fontSize: "0.94rem",
      color: "#07182D",
    },
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: {
            xs: "calc(100% - 24px)",
            sm: 620,
            md: 760,
          },
          height: {
            xs: "auto",
            sm: 570,
            md: 575,
          },
          maxHeight: "calc(100vh - 30px)",
          margin: "15px",
          borderRadius: {
            xs: "10px",
            sm: "12px",
          },
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0, 15, 35, 0.38)",
          backgroundColor: "#FFFFFF",
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(4, 17, 34, 0.78)",
            backdropFilter: "blur(7px)",
          },
        },
        padding: 10,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
          },
          pt: {
            xs: 2.5,
            sm: 3,
            md: 2,
          },
          pb: {
            xs: 4,
            sm: 5,
            md: 10,
          },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: {
              xs: 12,
              sm: 16,
            },
            right: {
              xs: 12,
              sm: 16,
            },
            width: 38,
            height: 38,
            color: "#07182D",
            backgroundColor: "#F1F4F6",
            zIndex: 2,
            transition: "all 0.25s ease",

            "&:hover": {
              backgroundColor: "#E5EAEE",
              transform: "rotate(90deg)",
            },
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 21 }} />
        </IconButton>

        <Box
          sx={{
            pr: 6,
            mb: {
              xs: 2,
              sm: 2.5,
            },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              mb: 1.1,
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#00CFC1",
                boxShadow: "0 0 10px rgba(0,207,193,0.7)",
              }}
            />

            <Typography
              sx={{
                color: "#00AFA3",
                fontFamily: '"Barlow", sans-serif',
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "1.4px",
              }}
            >
              BUSINESS ENQUIRY
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#07182D",
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: {
                xs: "2rem",
                sm: "2.35rem",
                md: "2.55rem",
              },
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.3px",
            }}
          >
            Start a conversation
          </Typography>

          <Typography
            sx={{
              mt: 0.8,
              color: "#78899B",
              fontFamily: '"Barlow", sans-serif',
              fontSize: {
                xs: "0.82rem",
                sm: "0.88rem",
              },
              lineHeight: 1.5,
            }}
          >
            Share your requirement. We'll get back to you shortly.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            columnGap: {
              xs: 0,
              sm: 1.8,
            },
            rowGap: {
              xs: 1.35,
              sm: 1.5,
            },
            alignContent: "start",
          }}
        >
          <Box>
            <Typography sx={labelSx}>Full Name</Typography>

            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              variant="outlined"
              size="small"
              sx={inputSx}
              error={Boolean(errors.name)}
              helperText={errors.name}
              FormHelperTextProps={{
                sx: {
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: "0.7rem",
                  marginLeft: 0,
                  marginTop: "3px",
                },
              }}
            />
          </Box>

          <Box>
            <Typography sx={labelSx}>Work Email</Typography>

            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              type="email"
              variant="outlined"
              size="small"
              sx={inputSx}
              error={Boolean(errors.email)}
              helperText={errors.email}
              FormHelperTextProps={{
                sx: {
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: "0.7rem",
                  marginLeft: 0,
                  marginTop: "3px",
                },
              }}
            />
          </Box>

          <Box>
            <Typography sx={labelSx}>Phone Number</Typography>

            <TextField
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "");

                if (value.length <= 10) {
                  setFormData((prev) => ({
                    ...prev,
                    phone: value,
                  }));

                  if (errors.phone) {
                    setErrors((prev) => ({
                      ...prev,
                      phone: "",
                    }));
                  }
                }
              }}
              placeholder="+91 XXXXX XXXXX"
              variant="outlined"
              size="small"
              inputProps={{
                maxLength: 10,
                inputMode: "numeric",
              }}
              sx={inputSx}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              FormHelperTextProps={{
                sx: {
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: "0.7rem",
                  marginLeft: 0,
                  marginTop: "3px",
                },
              }}
            />
          </Box>

          <Box>
            <Typography sx={labelSx}>Service</Typography>

            <TextField
              select
              fullWidth
              name="service"
              value={formData.service}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={inputSx}
              SelectProps={{
                displayEmpty: true,
              }}
              error={Boolean(errors.service)}
              helperText={errors.service}
              FormHelperTextProps={{
                sx: {
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: "0.7rem",
                  marginLeft: 0,
                  marginTop: "3px",
                },
              }}
            >
              <MenuItem value="" disabled>
                Select a service
              </MenuItem>

              <MenuItem value="weight-calibration">
                Weight Calibration
              </MenuItem>

              <MenuItem value="camera-solutions">
                Camera Solutions
              </MenuItem>

              <MenuItem value="network-setup">
                Network Connection & Setup
              </MenuItem>

              <MenuItem value="camera-installation">
                Camera Installation & Setup
              </MenuItem>
            </TextField>
          </Box>

          <Box
            sx={{
              gridColumn: {
                xs: "auto",
                sm: "1 / -1",
              },
            }}
          >
            <Typography sx={labelSx}>How can we help?</Typography>

            <TextField
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={3}
              placeholder="Briefly describe your requirement..."
              variant="outlined"
              sx={{
                ...inputSx,

                "& .MuiOutlinedInput-root": {
                  height: "auto",
                  minHeight: 92,
                  alignItems: "flex-start",
                  paddingTop: "3px",
                },

                "& textarea": {
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: "0.94rem",
                  lineHeight: 1.45,
                },
              }}
              error={Boolean(errors.message)}
              helperText={errors.message}
              FormHelperTextProps={{
                sx: {
                  fontFamily: '"Barlow", sans-serif',
                  fontSize: "0.7rem",
                  marginLeft: 0,
                  marginTop: "3px",
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              gridColumn: {
                xs: "auto",
                sm: "1 / -1",
              },
              height: {
                xs: 48,
                sm: 50,
              },
              mt: 0.2,
              borderRadius: "5px",
              backgroundColor: "#07182D",
              color: "#FFFFFF",
              fontFamily: '"Barlow", sans-serif',
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              boxShadow: "none",
              transition:
                "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",

              "&:hover": {
                backgroundColor: "#00CFC1",
                color: "#07182D",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 10px 25px rgba(0,207,193,0.22)",
              },

              "& .MuiButton-endIcon": {
                transition: "transform 0.3s ease",
              },

              "&:hover .MuiButton-endIcon": {
                transform: "translateX(5px)",
              },
            }}
          >
            Send Enquiry
          </Button>
        </Box>

        <Typography
          sx={{
            mt: {
              xs: 1.2,
              sm: 1.5,
            },
            textAlign: "center",
            color: "#9AA7B5",
            fontFamily: '"Barlow", sans-serif',
            fontSize: "0.68rem",
            lineHeight: 1.4,
          }}
        >
          Your information is kept confidential and used only to respond to
          your enquiry.
        </Typography>
      </Box>
    </Dialog>
  );
};

export default QuotePopup;