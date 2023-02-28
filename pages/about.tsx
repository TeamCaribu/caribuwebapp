import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Box} from "@mui/material";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      This is our about page.
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'50vh'}>
         <Box alt={'image of developer'} style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(67,5,186,1) 56%, rgba(91,0,255,1) 100%)'}} component={'img'} src='CaribuLogo.png' width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(67,5,186,1) 56%, rgba(91,0,255,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{'Caribu'}</span>
            </h1>
            <h2>I'm a software engineer.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               testing
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               socials go here.
            </Box>
         </Box>
      </Box>
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box alt={'image of developer'} style={{background: `-webkit-linear-gradient(135deg, rgb(0,255,164), rgb(166,104,255))`}} component={'img'} src='CaribuLogo.png' width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: `-webkit-linear-gradient(135deg, rgb(0,255,164), rgb(166,104,255))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Jordan</span>
            </h1>
            <h2>I'm a software engineer.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               testing
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               socials go here.
            </Box>
         </Box>
      </Box>
    </div>
  )
}