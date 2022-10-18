import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

import Z from './images/BIO-TECH-BLOCK.jpg';
function Biotechnolgy() {
    const Biotechnology = [
        {
          "img":<img src={Z} width={750} height={420} />,
          "uuid": 4,
          "displayName": "BioTech Department",
          "imageUrl": "images/BIO-TECH-BLOCK.jpg",
          "description":
            "The strength of the department is the faculty drawn from reputed national and international academic & research organizations. The faculty has more than 15 years of teaching experience with good industrial exposure. Faculty with postdoctoral research experience is feathers in the cap of the department. The faculty are extensively involved in quality research & development and in the last 3 years has acquired projects worth more than 3 crores rupees in the areas of biofuels, biomedical research, genomics and proteomics, bioinformatics and food biotechnology funded by prestigious research organizations like DBT, DST, UGC and ICMR. The department also has women scientists working under DST funded projects. The Department has filed patents with IPO in collaboration with industry. The biotechnology department at KL University has 7 well-furnished and fully equipped state-of-the-art laboratories, 4 research centers along with own computer center with latest molecular modeling and drug design software purchased from Schrodinger LLC, USA. As a part of student centric learning development various measures and initiatives are taken to improve the skills of students. These include exposure to guest lectures, industrial training and tours, communication and soft skills, mini-projects, paper presentations in national level paper contests, classroom seminars, placement opportunities, academic & career counseling, certificate courses, live projects in industry and exposure to journals etc. Another area of concentration for the faculty is research consultancy. The department has signed MoUs with Sneha Biotech, Vijayawada and NRI Academy of Medical Sciences, Guntur for faculty and student training and collaborative research. The department of biotechnology is also in collaboration with the Indian Institute of Science, Bengaluru and University of Oxford, UK for initiating collaborative research in biomedical sciences.",
          "programsOffered": [
            "Tissue Engineering and Regenerative Medicine",
            "Stem Cells",
            "Biomaterials",
            "Biochemical and Bioprocess Engineering",
            "Pharmaceutical Biotechnology",
            "Algal biofuels",
            "CO2 Mitigation",
            "Lipid Biochemistry",
            "Biological CO2 Sequestration",
            "Plant Genetic Engineering",
            "Marker Assisted Breeding",
            "Molecular modeling Drug Designing",
            "Genomics and proteomics",
            "Molecular modeling Drug Designing",
            "Pharmaceutical Biochemistry",
            "Biomedical and Nanotechnology",
            "Neuro Sciences",
          ],
          "hod": "Dr. Giridhar Kanuri",
        },
      ];
      
      return(
        <div class="Biotech">
              
            <Box p={5}></Box>
        <Grid  container justifyContent="center" spacing={2}>
                    { Biotechnology.map((b)=>(<Grid item>
                      <Paper key={b.id} sx={{height:700 , width:1000}}>
                      {b.img}><br/>
                        <h2> <br/>DisplayName:{b.displayName}<br/></h2>
                         <h6><br/>uuid:{b.uuid}<br/></h6>
                         <h5>DESCRIPTION:{b.description}<br/>PROGRAMSOFFERED:{b.programsOffered}<br/>hod:{b.hod}</h5>
                         </Paper>
                    </Grid>))}
                </Grid>
           </div>
       )
  
  };
  
  export default Biotechnolgy
