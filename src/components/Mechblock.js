import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import y from './images/MECH-BLOCK.jpg';
function Mechblock() {
    const Mechanical = [ {
      "img":<img src={y} width={700} height={400} />,
        "uuid": 3,
        "displayName": "Mechanical Department",
        "imageUrl": "images/MECH-BLOCK.jpg",
        "description":
          "Established in1980, the Mechanical Engineering is one of the most versatile and broadest fields of engineering. The key areas of Mechanical Engineering like ‘Product Design’, ‘Smart Manufacturing & Automation’ and ‘Automobile Electronics’ have opened vast opportunities in industries allied to Automobiles, Aerospace, Renewable Energy, Manufacturing, Oil & Gas Production and Subsea technologies in renowned MNC’s and Government companies. Especially, with emerging growth in automation, along with boys, girl students also find larger and better scope in Mechanical engineering sector.",
        "programsOffered": [
          "Engineering Design",
          "Smart Manufacturing",
          "Automobile and Autotronics",
          "Product Design",
          "Energy & CFD",
          "M.Tech in Robotics and Mechatronics",
          "M.Tech in Thermal Engineering",
          "M.Tech in Machine Design",
        ],
        "hod": "Dr. DVA Ramasastry",
      },
    ]
      
    return(
      <div class="Mech">
           
          <Box p={5}></Box>
      <Grid  container justifyContent="center" spacing={2}>
                  { Mechanical.map((M)=>(<Grid item>
                    <Paper key={M.id} sx={{height:700 , width:1000}}>
                    {M.img}><br/>
                      <h2> <br/>DisplayName:{M.displayName}<br/></h2>
                       <h6><br/>uuid:{M.uuid}<br/></h6>
                       <h5>DESCRIPTION:{M.description}<br/>PROGRAMSOFFERED:{M.programsOffered}<br/>hod:{M.hod}</h5>
                       </Paper>
                  </Grid>))}
              </Grid>
         </div>
     )
      
    
  };
  
  export default Mechblock