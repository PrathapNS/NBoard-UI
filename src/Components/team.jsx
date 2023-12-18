import React, { useState } from "react";
import SideMenuBar from "./SideMenuBar";
import GroupsIcon from '@mui/icons-material/Groups';
import { Card, Container } from "@mui/material";
import {CardContent} from "@mui/material";
import {CardHeader} from "@mui/material";
import {Grid} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";



function Team() {
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/team');
        setData(response.data.data); // Set the response data into the state
        console.log("data", data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
        <div style={{position:'fixed'}}>
        <SideMenuBar />
      </div>
   
      <Card style={{ width: "80%", marginLeft: "18%", height: "100%", marginTop: "20px",marginBottom:"20px" }}>
        <CardContent>
        <div style={{display:"flex",justifyContent:"space-between"}}>
           <h1  >{<GroupsIcon/>} 
            Teams</h1>
            <button style={{backgroundColor:"navy",width:"10%",color:"white"}} >Add team</button>
           </div>
           <div >
           <Grid container spacing={3}>
     
      {data.map((item, index) => (
         <Grid item xs={12} sm={6} md={4} lg={3}>
                 <Card key={item.id}>
                 <CardHeader   title={<GroupsIcon style={{fontSize:"50px"}}/>}
             subheader={item.name}
             style={{textAlign:"center"}}>
                 
                 </CardHeader>
                
                 <CardContent style={{textAlign:"center"}}>
                 <p>Team id: {item.id}</p>
                 <p>Status:{item.active?'Active':'Inactive'}</p>
                 </CardContent>
                </Card>
              
                </Grid>
             
         

            ))}



    </Grid>
    
           </div>
         
          
        </CardContent>
      </Card>


    
    </div>
  );
}

export default Team;
