import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";
import { Grid, Typography } from "@material-ui/core";
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
    imageSrc: "melody-circle.png",
  },
  {
    name: "Morry Kolman",
    imageSrc: "morry-circle.png",
  },
  {
    name: "Meg Schneider",
    imageSrc: "meg-circle.png",
  },
  {
    name: "Justin Ribarich",
    imageSrc: "justin-circle.png",
  },
  {
    name: "Jordan Cepeda",
    imageSrc: "jordan-circle.png",
  },
];

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.info}>
//         <p><i style={{ color: '#05C7C7' }}>
//           About the Team
//         </i>
//         </p>
//       </div>
//     </main>
//   )
// }

function AboutPage() {
  const classes = useStyles();

  return (
    <div className={styles.main}>
      <Typography variant="h3" gutterBottom>
        About the Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={member.imageSrc} alt={member.name} className={classes.image} />
            </div>
            <div style={{textAlign: "center" }}>
            <Typography variant="h5">{member.name}</Typography>
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
