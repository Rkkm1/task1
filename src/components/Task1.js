import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.min.css'
import './Task1.css'



function Try_this() {

//---------------------------------Read Operation------------------------------
  const [uname, setuname]=useState('')
  const [pass, setpass]=useState('')

  const send_data_to_api=()=>{
    axios.post ("https://62c538b4a361f725127d82d8.mockapi.io/crud", {
      uname,
      pass
    })

  }

  console.log(uname)
  console.log(pass)


    //---------------------------- create Operation---------------------------------

    const [post, setpost] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments").then((post) => {
  
        console.log("is it working ", post);
        setpost(post.data.slice(0, 5));
        
      });
    }, []);
 


  return(
 
  <div> 

    <p className="ptag">React <span style={{color:"#E42217"}}>C</span>RUD operations</p>

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input className="uname" onChange={(e)=>setuname(e.target.value)} />

      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  className="pass" onChange={(k)=>setpass(k.target.value)}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button  onClick={send_data_to_api}  type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    {/* ---------------------------- create Operation--------------------------------- */}

    <p className="ptag">React C<span style={{color:"#E42217"}}>R</span>UD operations</p>

    {post.map((post) => ( 
        <p className="read_data"> NAME:  {post.name}</p>
     
      )  )   }
      
    
       {/* ---------------------------- read Operation--------------------------------- */}


  </div>  

  );
}
export default Try_this;