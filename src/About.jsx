// import "./style/About.css";


import {EmojiBullet, SocialIcon}  from "./EmojiBullet";
import { MyInfo, languages } from "./MyInfo";
import { Info } from "@mui/icons-material";
import { Box } from "@mui/system";
import face from "./image/face.jpeg"

const maxLangPerRow = 7; 

function About() {
  const imageWidth = '32px';
  const imageHeight = '32px';
  console.log("MyInfo.links:", MyInfo.links);
    return (
        <Box 
          component={'main'} 
          display={'flex'} 
          flexDirection={{ xs: 'column', md: 'row' }} 
          alignItems={'center'} 
          justifyContent={'center'} 
          minHeight={'calc(100vh - 175px)'}
        >
            <Box 
              style={{ 
                background: Info.gradient, 
                borderRadius: "50%",
                overflow: "hidden",
              }} 
              component={'img'} 
              width={{ xs: '35vh', md: '40vh' }} 
              height={{ xs: '35vh', md: '40vh' }} 
              p={'0.75rem'} 
              mb={{ xs: '1rem', sm: 0 }} 
              mr={{ xs: 0, md: '2rem' }} 
              src={face}
            />
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <h1>Hello, I am <span style={{ background: MyInfo.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{MyInfo.name}</span>🫰🏼</h1>
              <h2>I am {MyInfo.position}.</h2>
              <Box component={'ul'}>
                  {MyInfo.miniBio.map((bio, index) => (
                      <EmojiBullet key={index} emoji={bio.emoji} context={bio.context} />
                  ))}
              </Box>
              <Box  
              component={'ul'}
              display={'flex'}
              flexWrap={'wrap'}  
              maxWidth={'700px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
            {Object.entries(languages).map(([languageName, imageSrc], index) => {

              return (
                <EmojiBullet
                  key={languageName}
                  emoji={
                    <img  
                      src={imageSrc}
                      alt={languageName} 
                      style={{ width: '32px', height: '32px' }}  
                    />
                  }
                  style={{
                    margin: '1rem',
                    width: `calc(100% / ${maxLangPerRow})`  
                  }}
                />
              );
            })}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {MyInfo.links.map((link, index) => (
                  <SocialIcon key={index} url={link.url} icon={link.icon} label={link.label} />
               ))}
            </Box>
            </Box>
        </Box>
    );
}

export default About;