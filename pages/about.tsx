import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const inter = Inter({ subsets: ['latin'] })

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   image: {
//     height: "60%",
//     width: "60%",
//     objectFit: "cover",
//   },
//   link: {
//     color: "#F2C12E",
//     '&:hover': {
//       color: '#74FBFB',
//     },
//   },
// }));

const teamMembers = [
  {
    name: "Melody Duan",
    github: "https://github.com/MelodyDuan",
    linkedIn: "https://www.linkedin.com/in/melodyduan",
    imageSrc: "melody-circle.png",
  },
  {
    name: "Morry Kolman",
    github: "https://github.com/wttdotm",
    linkedIn: "https://www.linkedin.com/in/morry-kolman-66072299/",
    imageSrc: "morry-circle.png",
  },
  {
    name: "Meg Schneider",
    github: "https://github.com/meg-schneider",
    linkedIn: "https://www.linkedin.com/in/schneidermeg/",
    imageSrc: "meg-circle.png",
  },
  {
    name: "Justin Ribarich",
    github: "https://github.com/JustinRibs",
    linkedIn: "https://www.linkedin.com/in/justin-ribarich/",
    imageSrc: "justin-circle.png",
  },
  {
    name: "Jordan Cepeda",
    github: "https://github.com/JordanMcLuvin",
    linkedIn: "https://www.linkedin.com/in/jordancepeda/",
    imageSrc: "jordan-circle.png",
  },
  {
    name: "Ducky",
    github: "https://duckduckgo.com/",
    linkedIn: "https://www.youtube.com/watch?v=Mh85R-S-dh8",
    imageSrc: "ducky-circle.png"
  }
];


function AboutPage() {

  return (
    <div className={styles.main}>
      <Typography variant="h3" style={{marginBottom: "30px", color: "#74FBFB"}}>
        The Caribu Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={member.imageSrc} alt={member.name} className='image' />
            </div>
            <div style={{textAlign: "center", marginTop: "10px"}}>
              <Typography variant="h5">{member.name}</Typography>
              <div style={{textAlign: "center", fontFamily: "Helvetica"}}>
                <Link className={'link'} href={member.github} style={{textDecoration: 'none'}}>
                Github
                </Link>
                <br></br>
                <Link className={'link'} href={member.linkedIn} style={{textDecoration: 'none'}}>
                LinkedIn
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AboutPage;
