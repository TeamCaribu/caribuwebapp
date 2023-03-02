import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

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
  // const classes = useStyles();

  return (
    <div className={styles.aboutMain}>
      <h3 style={{fontSize: "2.5em", marginBottom: "30px", color: "#f2eddf"}}>
        The Caribu Team
      </h3>
      <div className={styles.gridOuter}>
        {teamMembers.map((member) => (
          <div className="grid-inner" key={member.name}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={member.imageSrc} alt={member.name} style={{height: "18vw", width: "18vw", margin: "0 1vw"}} />
            </div>
            <div style={{textAlign: "center", marginTop: "10px"}}>
              <h5 style={{fontSize: "2em"}}>{member.name}</h5>
              <div style={{textAlign: "center", fontFamily: "Helvetica"}}>
                <a className={styles.link} href={member.github}>
                Github
                </a>
                <br></br>
                <a className={styles.link} href={member.linkedIn}>
                LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
