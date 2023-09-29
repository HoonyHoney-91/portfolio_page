import './style/Portfolio.css'

import html from './image/html.png'
import css from './image/css.png'
import js from './image/js.png'
import bootstrap from './image/bootstrap.png'
import django from './image/django.png'
import firebase from './image/firebase.png'
import flask from './image/flask.png'
import python from './image/python.png'
import react from './image/react.png'

import ashePage from './image/ashePage.png'
import stock from './image/stock.png'
import mbti from './image/mbti.png'


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

const languages = {
    html,
    css,
    js,
    bootstrap,
    django,
    firebase,
    flask,
    python,
    react
  };
    

function Portfolio() {

    return (
      <div className="portfolio">
        <Project 
            img={ashePage}
            title="Full Stack Web Page for ASHE"
            description=""
            url="https://github.com/HoonyHoney-91/ashe"
            language= {['html', 'css', 'bootstrap', 'firebase', 'flask', 'python']}
        />
        
        <Project 
            img={stock} 
            title="Mock Stock Trading Applicaton"
            description=""
            url="https://github.com/HoonyHoney-91/Stock_Page_Project"
            language= {['html', 'css', 'python', 'django']}
        />
        
        <Project 
            img={mbti}
            title="MBTI Personality Test" 
            description=""
            url="https://github.com/HoonyHoney-91/mbti"
            language= {['html', 'css', 'js']}
        />
      </div>
    )
  }

function Project({ img, title, description, url, language }) {

    return (
      <div className="project">
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="550"
                image={img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  {title}
                </Typography>
                <Typography variant="body2">
                  {description}
                </Typography>
              </CardContent>
              <div className="language-images">
                {language.map((lang, index) => (
                    <img key={index} src={languages[lang]} alt={lang} />
                ))}
              </div>
              <CardActions>
                <Button size="small">
                  <IconButton aria-label="github.com" onClick={() => window.open(url)}>
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Button>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
        {/* <div className="project-item">
            <img src={img}/>
            <h3 className="project-title">{title}</h3>  
            <p className="project-decription">{description}</p>
            <div className="language-images">
                {language.map((lang, index) => (
                    <img key={index} src={languages[lang]} alt={lang} />
                ))}
            </div>
        </div> */}
      </div>
    )
}
  
export default Portfolio