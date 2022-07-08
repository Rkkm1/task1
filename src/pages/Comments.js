import React from 'react'
import poto from '../poto.jpg'

function Comments() {

    const styleObj = {
           fontSize: 18,
           color: "whitesmoke",
      
        }

        const styleObj2 = {
            fontSize: 14,
            color: "grey",
         }
        
  return (
    <section className='comments'>

          

        <div className="container">


             <h1>45 Comments</h1>
            
             <div className="container0">

                <div className='container1'>

                    <img className='profile' src={poto} />
                </div>

             <div className='container2'>

                    <p style={styleObj}>Rahul gupta <span  style={styleObj2} > &nbsp; 2 months ago</span> </p> 
                  
                     <p>This is great post</p>
            </div>

            </div>

            <div className="container0">

                <div className='container1'>

                    <img className='profile' src={poto} />
                </div>

             <div className='container2'>

                    <p style={styleObj}>Rahul gupta <span  style={styleObj2} > &nbsp; 2 months ago</span> </p> 
                  
                     <p>This is great post</p>
            </div>

            </div>

            

       



        </div>



    </section>
  
  )
}

export default Comments