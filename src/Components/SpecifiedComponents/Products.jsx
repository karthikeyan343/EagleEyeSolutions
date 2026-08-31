import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import RouterOutlinedIcon from "@mui/icons-material/RouterOutlined";
import cameraProduct from "../../assets/camerafit.jpg";
import cameraFitting from "../../assets/cameramechanic.jpg";
import cameraService from "../../assets/newcamera.jpg";
import weighingMachine from "../../assets/machineweight.jpg";
import weightCalibration from "../../assets/weightmachine.jpg";
import weightDetails from "../../assets/weightuse.jpg";
import networkProduct from "../../assets/network.jpg";
import networkConnection from "../../assets/networkingimages.jpg";
import networkService from "../../assets/wan.jpg";

const fontFamily = '"Barlow", sans-serif';
const navyColor = "#082F49";
const secondaryColor = "#00CFC1";

const products = [
  { category:"CAMERA PRODUCTS",title:"Security Cameras",description:"Reliable camera systems for homes, offices, shops and industrial spaces.",image:cameraProduct,icon:<CameraAltOutlinedIcon />,label:"PRODUCT",price:"From ₹2,500",details:["2MP – 8MP options","Dome & Bullet","Night vision"] },
  { category:"CAMERA FITTING",title:"Camera Installation",description:"Professional fitting with positioning, wiring and complete system setup.",image:cameraFitting,icon:<HomeWorkOutlinedIcon />,label:"FITTING",price:"From ₹500 / Camera",details:["Home installation","Cable routing","DVR / NVR setup"] },
  { category:"CAMERA SERVICES",title:"Camera Maintenance",description:"Technical support for existing surveillance systems and camera upgrades.",image:cameraService,icon:<BuildOutlinedIcon />,label:"SERVICE",price:"Site Based",details:["Camera replacement","System upgrades","Remote viewing"] },
  { category:"WEIGHING PRODUCTS",title:"Weighing Machines",description:"Commercial and industrial weighing machines selected for your requirements.",image:weighingMachine,icon:<ScaleOutlinedIcon />,label:"PRODUCT",price:"Get Quote",details:["Platform scales","Tabletop scales","Industrial models"] },
  { category:"WEIGHT SERVICES",title:"Calibration & Fitting",description:"Installation and calibration support for accurate and dependable weighing.",image:weightCalibration,icon:<PrecisionManufacturingOutlinedIcon />,label:"SERVICE",price:"Site Based",details:["Calibration","Machine fitting","Accuracy checking"] },
  { category:"WEIGHT DETAILS",title:"Quantity & Capacity",description:"Choose suitable machine capacity and quantity for your weighing requirements.",image:weightDetails,icon:<StraightenOutlinedIcon />,label:"DETAILS",price:"Custom Quote",details:["30kg – 1 Ton+","Multiple units","Industrial use"] },
  { category:"NETWORK PRODUCTS",title:"Network Equipment",description:"Routers, switches and network equipment for connected environments.",image:networkProduct,icon:<LanOutlinedIcon />,label:"PRODUCT",price:"From ₹1,500",details:["Routers & switches","Access points","Accessories"] },
  { category:"NETWORK CONNECTIONS",title:"Network Connections",description:"Structured cabling and network connections planned around your space.",image:networkConnection,icon:<CableOutlinedIcon />,label:"CONNECTION",price:"Site Based",details:["Cat6 cabling","LAN connections","Rack termination"] },
  { category:"NETWORK SERVICES",title:"Network Support",description:"Network setup, expansion and troubleshooting for existing systems.",image:networkService,icon:<RouterOutlinedIcon />,label:"SERVICE",price:"Get Quote",details:["LAN & Wi-Fi","Network expansion","Troubleshooting"] }
];

function InfiniteTyping({ text }) {
  const [displayText,setDisplayText] = useState("");
  const [deleting,setDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!deleting && displayText.length < text.length) {
        setDisplayText(text.slice(0,displayText.length + 1));
      } else if (!deleting) {
        setDeleting(true);
      } else if (displayText.length > 0) {
        setDisplayText(displayText.slice(0,-1));
      } else {
        setDeleting(false);
      }
    },!deleting && displayText.length === text.length ? 1600 : deleting ? 70 : displayText.length === 0 ? 500 : 110);

    return () => clearTimeout(timer);
  },[displayText,deleting,text]);

  return (
    <Box component="span" sx={{display:"inline-block",minWidth:"1ch",userSelect:"none",WebkitUserSelect:"none",caretColor:"transparent"}}>
      {displayText}
    </Box>
  );
}

const Products = () => {
  return (
    <Box
      id="products"
      component="section"
      sx={{
        position:"relative",
        overflow:"hidden",
        py:{xs:7,sm:9,md:11},
        background:"linear-gradient(135deg,#082F49 0%,#0A3B56 28%,#00AFA5 52%,#E8FAF8 76%,#FFFFFF 100%)",
        fontFamily,
        "& *":{fontFamily:`${fontFamily} !important`}
      }}
    >
      <Box
        sx={{
          position:"absolute",
          width:{xs:300,md:600},
          height:{xs:300,md:600},
          borderRadius:"50%",
          background:"radial-gradient(circle,rgba(0,207,193,.38) 0%,rgba(0,207,193,.12) 45%,transparent 72%)",
          top:-300,
          right:-180,
          animation:"productsGlowOne 9s ease-in-out infinite alternate",
          "@keyframes productsGlowOne":{
            "0%":{transform:"translate(0,0) scale(1)"},
            "100%":{transform:"translate(-30px,35px) scale(1.08)"}
          }
        }}
      />

      <Box
        sx={{
          position:"absolute",
          width:{xs:360,md:700},
          height:{xs:360,md:700},
          borderRadius:"50%",
          background:"radial-gradient(circle,rgba(8,47,73,.55) 0%,rgba(8,47,73,.22) 42%,transparent 72%)",
          bottom:-380,
          left:-280,
          animation:"productsGlowTwo 11s ease-in-out infinite alternate",
          "@keyframes productsGlowTwo":{
            "0%":{transform:"translate(0,0) scale(1)"},
            "100%":{transform:"translate(40px,-30px) scale(1.1)"}
          }
        }}
      />

      <Box
        sx={{
          position:"absolute",
          top:"38%",
          left:"-8%",
          width:"116%",
          height:180,
          background:"linear-gradient(90deg,transparent,rgba(0,207,193,.12),rgba(8,47,73,.14),transparent)",
          transform:"rotate(-5deg)",
          pointerEvents:"none"
        }}
      />

      <Box
        sx={{
          position:"absolute",
          inset:0,
          background:"radial-gradient(circle at 15% 25%,rgba(0,207,193,.18),transparent 25%),radial-gradient(circle at 85% 75%,rgba(8,47,73,.16),transparent 28%)",
          pointerEvents:"none"
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position:"relative",
          zIndex:1,
          maxWidth:"1280px",
          mx:"auto",
          px:{xs:2,sm:3,md:4}
        }}
      >
        <Box sx={{textAlign:"center",maxWidth:850,mx:"auto",mb:{xs:5,sm:6,md:7}}}>
          <Box
            component="span"
            sx={{
              display:"inline-block",
              px:{xs:2,sm:2.5},
              py:{xs:.7,sm:.8},
              mb:2,
              borderRadius:"999px",
              background:secondaryColor,
              color:"#06182D",
              fontSize:{xs:".8rem",sm:".9rem"},
              fontWeight:700,
              letterSpacing:"1px",
              textTransform:"uppercase",
              boxShadow:"0 8px 25px rgba(0,207,193,.25)"
            }}
          >
            Products & Services
          </Box>

          <Typography
            component="h1"
            sx={{
              maxWidth:850,
              mx:"auto",
              color:"#FFFFFF",
              fontSize:{xs:"2.7rem",sm:"3.8rem",md:"4.5rem"},
              fontWeight:700,
              lineHeight:1.02,
              letterSpacing:"-0.035em",
              mb:2.5,
              textShadow:"0 5px 20px rgba(8,47,73,.25)"
            }}
          >
            <Box component="span" sx={{whiteSpace:"nowrap"}}>
              The Right Products.
            </Box>
            <br />
            <Box
              component="span"
              sx={{
                color:secondaryColor,
                whiteSpace:"nowrap",
                display:"inline-block",
                minWidth:"12ch",
                userSelect:"none",
                WebkitUserSelect:"none",
                caretColor:"transparent"
              }}
            >
              <InfiniteTyping text="The Right Support." />
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth:680,
              mx:"auto",
              color:"rgba(255,255,255,.86)",
              fontSize:{xs:"15px",sm:"16px",md:"17px"},
              lineHeight:1.6
            }}
          >
            Practical products and technical services for security, weighing and networking — supplied, fitted and supported with care.
          </Typography>
        </Box>

        <Box
          sx={{
            display:"grid",
            gridTemplateColumns:{
              xs:"1fr",
              sm:"repeat(2,minmax(0,1fr))",
              md:"repeat(3,minmax(0,1fr))"
            },
            gap:{xs:2.5,sm:2.5,md:3},
            width:"100%",
            alignItems:"start"
          }}
        >
          {products.map((item,index) => (
            <Box key={index} sx={{width:"100%",minWidth:0}}>
              <Box
                sx={{
                  width:"100%",
                  height:{xs:500,sm:510,md:520},
                  display:"flex",
                  flexDirection:"column",
                  overflow:"hidden",
                  background:"linear-gradient(180deg,#FFFFFF 0%,#F9FCFD 100%)",
                  border:"1px solid rgba(8,47,73,.15)",
                  borderRadius:"18px",
                  boxShadow:"0 12px 32px rgba(8,47,73,.18)",
                  transition:"transform .35s ease,box-shadow .35s ease",
                  "&:hover":{
                    transform:"translateY(-6px)",
                    boxShadow:"0 24px 50px rgba(8,47,73,.25)"
                  }
                }}
              >
                <Box
                  sx={{
                    position:"relative",
                    height:{xs:250,sm:245,md:255},
                    width:"100%",
                    overflow:"hidden",
                    flexShrink:0,
                    background:"#EAF1F4"
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    sx={{
                      width:"100%",
                      height:"100%",
                      objectFit:"cover",
                      objectPosition:"center",
                      display:"block",
                      transition:"transform .7s cubic-bezier(.2,.7,.2,1)",
                      "&:hover":{transform:"scale(1.06)"}
                    }}
                  />

                  <Box
                    sx={{
                      position:"absolute",
                      inset:0,
                      background:"linear-gradient(180deg,rgba(8,47,73,.05) 25%,rgba(8,47,73,.45) 100%)",
                      pointerEvents:"none"
                    }}
                  />

                  <Box
                    sx={{
                      position:"absolute",
                      top:16,
                      left:"50%",
                      transform:"translateX(-50%)",
                      px:2,
                      py:.75,
                      borderRadius:"999px",
                      background:navyColor,
                      border:"1px solid rgba(0,207,193,.8)",
                      color:"#FFFFFF",
                      fontSize:"9px",
                      fontWeight:700,
                      letterSpacing:"1px",
                      whiteSpace:"nowrap",
                      zIndex:2
                    }}
                  >
                    {item.category}
                  </Box>

                  <Box
                    sx={{
                      position:"absolute",
                      bottom:0,
                      left:0,
                      width:"100%",
                      height:5,
                      background:"linear-gradient(90deg,#082F49 0%,#00CFC1 55%,#22B8CF 100%)"
                    }}
                  />
                </Box>

                <Box sx={{p:{xs:2.5,sm:2.6,md:2.8},display:"flex",flexDirection:"column",flex:1}}>
                  <Stack
                    direction="row"
                    sx={{
                      width:"100%",
                      mb:1.8,
                      minHeight:46,
                      alignItems:"center",
                      justifyContent:"space-between"
                    }}
                  >
                    <Box
                      sx={{
                        width:46,
                        height:46,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:"11px",
                        background:"linear-gradient(135deg,#E7FAF8,#D8F3F1)",
                        color:navyColor,
                        border:"1px solid rgba(0,207,193,.28)",
                        flexShrink:0
                      }}
                    >
                      {React.cloneElement(item.icon,{sx:{fontSize:24}})}
                    </Box>

                    <Typography
                      component="span"
                      sx={{
                        display:"inline-flex",
                        alignItems:"center",
                        justifyContent:"center",
                        px:1.4,
                        py:.7,
                        borderRadius:"999px",
                        background:"linear-gradient(135deg,#082F49,#00AFA5)",
                        color:"#FFFFFF",
                        fontSize:"9px",
                        fontWeight:700,
                        letterSpacing:".8px",
                        lineHeight:1,
                        whiteSpace:"nowrap",
                        border:"1px solid rgba(0,207,193,.35)"
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>

                  <Typography
                    component="h2"
                    sx={{
                      color:navyColor,
                      fontSize:{xs:"24px",sm:"23px",md:"24px"},
                      fontWeight:700,
                      lineHeight:1.15,
                      mb:1.2
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color:"#60788A",
                      fontSize:{xs:"14px",sm:"13.5px",md:"14px"},
                      lineHeight:1.6,
                      mb:2
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box sx={{minHeight:100}}>
                    <Stack spacing={1} sx={{width:"100%"}}>
                      {item.details.map((detail,i) => (
                        <Stack
                          key={i}
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{width:"100%",minHeight:20}}
                        >
                          <Box
                            sx={{
                              width:7,
                              height:7,
                              borderRadius:"50%",
                              flexShrink:0,
                              background:secondaryColor,
                              boxShadow:"0 0 8px rgba(0,207,193,.4)"
                            }}
                          />
                          <Typography sx={{color:"#334E68",fontSize:"13px",lineHeight:1.35}}>
                            {detail}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{mt:"auto",pt:1}}>
                    <Typography sx={{color:navyColor,fontSize:"19px",fontWeight:700,mb:1.5}}>
                      {item.price}
                    </Typography>

                    <Box
                      component="span"
                      sx={{
                        display:"flex",
                        width:"100%",
                        height:43,
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:"8px",
                        border:`1px solid ${navyColor}`,
                        background:"#FFFFFF",
                        color:navyColor,
                        fontSize:"14px",
                        fontWeight:700,
                        transition:"all .3s ease",
                        cursor:"default",
                        "&:hover":{
                          background:"linear-gradient(90deg,#082F49,#00CFC1)",
                          color:"#FFFFFF",
                          boxShadow:"0 8px 20px rgba(8,47,73,.2)",
                          transform:"translateY(-2px)"
                        }
                      }}
                    >
                      View Details
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Products;