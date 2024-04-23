import logo from './logo.svg';
import './App.css';
import{ useEffect, useState }from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsFillGeoFill } from "react-icons/bs";




function App() {
  const[net,setnet]= useState([])
  useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Responses)=>{
          console.log(Responses)
         setnet(Responses.data)})
},[])
  return (
    <div className="container">
     <div className="post">
      <h3 style={{textAlign:'center'}}>USERS DETAILS</h3>
       {net.map((value)=>
       <Card className='war' style={{ width: '18rem',height:"550px",borderRadius:"20px",}}>
    <Card.Body>
        <Card.Title>{value.name}</Card.Title>
        <Card.Text>
        <p title='username'><FaUser />  {value.username}</p>
         <p title='Email'><MdEmail /> {value.email}</p>
         <p title='address/location'><FaLocationDot />  {value.address.street},<br></br>
         {value.address.suite},<br></br>
         {value.address.city},<br></br>
         {value.address.zipcode}
         </p>
         <p title='geo'><BsFillGeoFill /><li style={{paddingLeft:"30px"}}>{value.address.geo.lat}<br></br></li>
              <li style={{paddingLeft:"30px"}}>{value.address.geo.lng}</li></p>
         <p title='phone number'><FaPhone /> {value.phone}</p>
         <p title='website'><CgWebsite /> {value.website}</p>
         <p title='company'><HiBuildingOffice2 />  {value.company.name},<br></br>
              "{value.company.catchPhrase}",<br></br>
              {value.company.bs}
         </p>
        </Card.Text>
        </Card.Body>
    </Card>
    )}
     </div>
     </div>
  );
}

export default App;
