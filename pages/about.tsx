import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";

const inter = Inter({ subsets: ['latin'] })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image: {
    height: "80%",
    width: "80%",
    objectFit: "cover",
  },
}));

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
];


function AboutPage() {
  const classes = useStyles();

  return (
    <div className={styles.main}>
      <Typography variant="h3" style={{marginBottom: "50px"}}>
        About the Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={member.imageSrc} alt={member.name} className={classes.image} />
            </div>
            <div style={{textAlign: "center", marginTop: "15px"}}>
            <Typography variant="h5">{member.name}</Typography>
            <Link href={member.github}>
            Github
            </Link>
            <br></br>
            <Link href={member.github}>
            LinkedIn
            </Link>
            <Typography>Github</Typography>
            <Typography>LinkedIn</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AboutPage;
