import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

import x from './images/ELECTRICAL-BLOCK.jpg';
function Electrical() {
    
    const Electrical = [  {
      "img":<img src={x} width={800} height={480} />,
        "uuid": 2,
        "displayName": "Electrical Department",
        "imageUrl": "images/ELECTRICAL-BLOCK.jpg",
        "description":
          "Welcome to the Department of Electrical & Electronics Engineering at Koneru Lakshmaiah Education Foundation. We started our journey in the year of 1995. Over the last few decades, we have grown our expertise and competence in the core Electrical & Electronics Engineering curriculum and research. We have a strong undergraduate program in Electrical & Electronics engineering, including B. Tech, M. Tech. dual degree program. At the postgraduate level, we offer M. Tech.,& M. Tech., by Research and PhD degrees. The sanctioned students’ strengths of B. Tech., M. Tech., and M. Tech., by research are respectively 60, 36 and 10 per year. At present, the department has 167 PhD scholars. Several sponsored candidates from industries and research laboratories carry out their postgraduate studies in our department.",
        "programsOffered": [
          "Smart Grid Technology (Specialization)",
          "Electrical Vehicle Technology (Specialization)",
          "Green Energy Technology (Specialization)",
          "Industry Automation (Specialization)",
        ],
        "hod": "Dr. Jarupula Somlal",
      }
    
    
    ]
    return(
      <div class="electrical">
           
          <Box p={5}></Box>
      <Grid  container justifyContent="center" spacing={2}>
                  { Electrical.map((E)=>(<Grid item>
                    <Paper key={E.id} sx={{height:1090 , width:1000}}>
                    {E.img}><br/>
                      <h2> <br/>DisplayName:{E.displayName}<br/></h2>
                       <h6><br/>uuid:{E.uuid}<br/></h6>
                       <h5>DESCRIPTION:{E.description}<br/>PROGRAMSOFFERED:{E.programsOffered}<br/>hod:{E.hod}</h5>
                       </Paper>
                  </Grid>))}
              </Grid>
         </div>
     )
     
      
    
  };
  
  export default Electrical