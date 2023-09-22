// import { Outlet } from 'react-router-dom'

import { useRef } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import emailjs from '@emailjs/browser';

import './style/Content.css'


function Content(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1efbivh', 'template_0g3oune', form.current, 'svDH-QGHELKmv-6JQ')
          .then((result) => {
              console.log('Email sent successfully:', result.text);
          })
          .catch((error) => {
              console.error('Error sending email:', error.text);
          });
        };

    return(
        <main className='Content-Main'>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: 600,
                        mx: "auto",
                        p: 2,
                        border: "2px solid  #000000",
                        borderRadius: "12px",
                        boxShadow: 1,
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        opacity: 0.5
                    }}
                >
                    <Typography variant="h4" align="center" mb={2}>
                    Contact Me
                    </Typography>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField
                            fullWidth
                            label="Your Name"
                            name="user_name"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label=" Your Email"
                            name="user_email"
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                mt: 2,
                                backgroundColor: "#000",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#111",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </main>
    );
}

export default Content