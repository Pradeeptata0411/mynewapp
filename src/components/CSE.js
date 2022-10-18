import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import w from './images/CSE-BLOCK.jpg';

function CSE() {
  const ComputerScience = [
    {
"img":<img src={w} width={790} height={420} />,
      "uuid": 1,
      "displayName": "Computer Science Department",
      "imageUrl": "images/CSE-BLOCK.jpg",
      "description":
        "Department of Computer Science & Engineering offers undergraduate, post graduate and Doctoral programs with a flexible and industry curriculum and innovative pedagogy that is very dynamic in capturing the latest trends in the industry and the job market. The emphasis will be on making the student ready to be fit for the immediate industry needs",
      "programsOffered": [
        "B. Tech in Computer Science & Engineering",
        "B.Tech (Hons) Computer Science & Engineering.",
        "B.Tech Computer Science & Engineering (Specialization)",
        "B. Tech Computer Science & Engineering (Minor in other branch)",
        "M.Tech in Computer Science & Engineering",
        "M.Tech in Digital Forensics & Cyber Security (DF&CS)",
        "M.Tech in Artificial Intelligence & Data Science( AI&DS )",
        "Ph D in Computer Science & Engineering",
      ],
      "hod": "Hari Kiran Vege",
    }
  
  ]
  
 return(
  <div class="Cse">
     <Box p={5}></Box>
  <Grid  container justifyContent="center" spacing={2}>
              { ComputerScience.map((m)=>(<Grid item>
                
                <Paper key={m.id} sx={{height:700 , width:1000}}>
                {m.img}><br/>
                   <h2><br/>DisplayName:{m.displayName}<br/></h2>
                   <h6><br/>uuid:{m.uuid}<br/></h6>
                   <h5>DESCRIPTION:{m.description}<br/>PROGRAMSOFFERED:{m.programsOffered}<br/>hod:{m.hod}</h5>
                   </Paper>
              </Grid>))}
          </Grid>
     </div>
 )
 
};

export default CSE