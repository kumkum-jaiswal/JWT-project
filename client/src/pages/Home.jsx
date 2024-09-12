import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const Home=()=>{

  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
   let api="http://localhost:8000/user/userlogin";
   axios.post(api, {email:email, password:password}).then((res)=>{
        console.log(res);
   })
  }

    return(
        <>
           <div id="loginpage">
            <h3> User Login</h3>              
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
            


           </div>
        </>
    )
}

export default Home;