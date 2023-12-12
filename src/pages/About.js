import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box 
        sx={{
          my:10,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem",
            }
          }
          }}>
          <Typography variant="h4">
            Welcome To My Resturant
          </Typography>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mi eu dui
          cursus, at lobortis lacus lacinia. Nullam facilisis tortor ut quam cursus, id cursus
          libero pharetra. Duis eget justo id nulla gravida malesuada. Suspendisse potenti. 
          Aenean ultricies vel urna nec vulputate. Quisque suscipit nisi vitae luctus ultricies.
          In hac habitasse platea dictumst. Vivamus vestibulum sapien ac quam cursus, a bibendum 
          quam ultrices. Sed vulputate urna nec urna luctus, vel volutpat purus efficitur. Integer 
          ut justo ut arcu feugiat sodales. Vivamus congue ipsum eu augue tincidunt, nec commodo 
          felis feugiat. Maecenas aliquam auctor libero, vel volutpat erat aliquet at. Curabitur 
          euismod metus a eros dignissim, nec sodales tortor facilisis.
          </p>
          <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mi eu dui 
          cursus, at lobortis lacus lacinia. Nullam facilisis tortor ut quam cursus, id cursus 
          libero pharetra. Duis eget justo id nulla gravida malesuada. Suspendisse potenti. 
          Aenean ultricies vel urna nec vulputate. Quisque suscipit nisi vitae luctus ultricies. 
          In hac habitasse platea dictumst. Vivamus vestibulum sapien ac quam cursus, a bibendum 
          quam ultrices. Sed vulputate urna nec urna luctus, vel volutpat purus efficitur. Integer 
          ut justo ut arcu feugiat sodales. Vivamus congue ipsum eu augue tincidunt, nec commodo
          felis feugiat. Maecenas aliquam auctor libero, vel volutpat erat aliquet at. Curabitur
          euismod metus a eros dignissim, nec sodales tortor facilisis.
          </p>
        </Box>
    </Layout>
  )
}

export default About