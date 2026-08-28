import React from "react";
import {Box,Button,Container,Divider,Link,Stack,Typography} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import logo from "../../assets/logo.png";

const fontFamily='"Barlow",sans-serif',secondaryColor="#00CFBA",navyColor="#07182D";
const quickLinks=[["Home","#home"],["Services","#services"],["About Us","#about"],["FAQ","#faq"],["Contact","#contact"]];
const services=["Weight Calibration","Camera Solutions","Network Setup","Camera Installation & Setup"];
const contacts=[
[<PhoneOutlinedIcon/>,"+1 (555) 123-4567","tel:+15551234567"],
[<EmailOutlinedIcon/>,"info@eagleeyesolutions.com","mailto:info@eagleeyesolutions.com"],
[<LocationOnOutlinedIcon/>,"123 Tech Boulevard, Suite 400, Cityville"]
];

const smoothScroll=(e,href)=>{
if(!href.startsWith("#"))return;
e.preventDefault();
const target=document.querySelector(href);
if(!target)return;
const start=window.scrollY,distance=target.getBoundingClientRect().top,duration=Math.min(1500,Math.max(850,Math.abs(distance)*.55));
let time=null;
const ease=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
const animate=t=>{
if(!time)time=t;
const p=Math.min((t-time)/duration,1);
window.scrollTo(0,start+distance*ease(p));
p<1?requestAnimationFrame(animate):window.history.replaceState(null,"",href);
};
requestAnimationFrame(animate);
};

export default function Footer(){
const linkSx={width:"fit-content",color:"#AEBBCD",fontFamily,fontSize:".9rem",textDecoration:"none",transition:"all .25s ease","&:hover":{color:secondaryColor,transform:"translateX(3px)"}};

return <Box component="footer" sx={{bgcolor:navyColor,color:"#FFF",fontFamily}}>
<Container maxWidth="lg" sx={{px:{xs:2,sm:3,md:4},py:{xs:4,sm:5,md:5.5}}}>
<Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr",md:"repeat(4,1fr)"},gap:{xs:4,sm:5,md:6}}}>

<Box sx={{minWidth:0}}>
<Link href="#home" onClick={e=>smoothScroll(e,"#home")} sx={{display:"inline-flex",alignItems:"center",gap:1.2,color:"#FFF",mb:1.5,textDecoration:"none"}}>
<Box component="img" src={logo} alt="Eagle Eye Solutions" sx={{width:{xs:48,sm:52,md:56},height:{xs:36,sm:40,md:42},objectFit:"contain",mixBlendMode:"screen"}}/>
<Typography sx={{color:"#FFF",fontFamily,fontSize:{xs:"1.1rem",sm:"1.2rem",md:"1.3rem"},fontWeight:700}}>Eagle Eye Solutions</Typography>
</Link>
<Typography sx={{maxWidth:300,color:"#AEBBCD",fontFamily,fontSize:".9rem",lineHeight:1.6}}>Providing precision technical services for modern enterprises. We deliver reliable weighing, camera and network solutions designed for dependable business operations.</Typography>
</Box>

<Box component="nav" sx={{minWidth:0}}>
<Typography sx={{color:"#FFF",fontFamily,fontWeight:700,fontSize:"1rem",mb:1.4}}>Quick Links</Typography>
<Stack spacing={.8}>{quickLinks.map(([label,href])=><Link key={label} href={href} onClick={e=>smoothScroll(e,href)} sx={linkSx}>{label}</Link>)}</Stack>
</Box>

<Box sx={{minWidth:0}}>
<Typography sx={{color:"#FFF",fontFamily,fontWeight:700,fontSize:"1rem",mb:1.4}}>Our Services</Typography>
<Stack spacing={.8}>{services.map(s=><Link key={s} href="#services" onClick={e=>smoothScroll(e,"#services")} sx={linkSx}>{s}</Link>)}</Stack>
</Box>

<Box sx={{minWidth:0}}>
<Typography sx={{color:"#FFF",fontFamily,fontWeight:700,fontSize:"1rem",mb:1.4}}>Contact Us</Typography>
<Stack spacing={1.1}>{contacts.map(([icon,value,href])=><Box key={value} component={href?"a":"div"} href={href} sx={{display:"flex",alignItems:"flex-start",gap:1,color:"#AEBBCD",textDecoration:"none",fontFamily,transition:"color .25s ease","&:hover":{color:secondaryColor}}}><Box sx={{color:secondaryColor,display:"flex",flexShrink:0,mt:.15}}>{icon}</Box><Typography sx={{color:"inherit",fontFamily,fontSize:".9rem",lineHeight:1.45,wordBreak:"break-word"}}>{value}</Typography></Box>)}</Stack>
<Button component="a" href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" startIcon={<WhatsAppIcon/>} endIcon={<ArrowForwardRoundedIcon/>} variant="contained" sx={{mt:2,bgcolor:secondaryColor,color:navyColor,textTransform:"none",fontFamily,fontWeight:700,borderRadius:"5px","&:hover":{bgcolor:"#19DEC9",transform:"translateY(-1px)"}}}>Chat on WhatsApp</Button>
</Box>

</Box>

<Divider sx={{my:{xs:3.5,md:4},borderColor:"rgba(255,255,255,.1)"}}/>

<Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"},gap:1}}>
<Typography sx={{color:"#8F9DB1",fontFamily,fontSize:".82rem"}}>State of Tamil Nadu · Road Safety Mission</Typography>
<Typography sx={{color:"#8F9DB1",fontFamily,fontSize:".82rem"}}>Powered by ES EthicSecur SofTec</Typography>
</Box>

<Box sx={{mt:1.5,pt:1.5,borderTop:"1px solid rgba(255,255,255,.07)",display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"},gap:.75}}>
<Typography sx={{color:"#69788D",fontFamily,fontSize:".76rem"}}>© {new Date().getFullYear()} EthicSecur. All rights reserved.</Typography>
<Typography sx={{color:"#69788D",fontFamily,fontSize:".76rem"}}>Professional technical solutions for modern businesses.</Typography>
</Box>

</Container>
</Box>;
}