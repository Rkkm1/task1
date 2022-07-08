import React, { useState } from 'react'
import { Button, Modal } from 'antd';


function Dynamic_array() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {  
    setIsModalVisible();
  };

  const handleOk = () => {
    setIsModalVisible(list(index)=val);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [list , setlist]=useState([])
  const [b , setb]=useState()

  const clicked = () => {
    var temp=[...list];
    temp.push(b);
    setlist(temp)
  };

const delete_data=(index)=>{
  var temp =[...list];
  temp.splice(index,1);
  setlist(temp);
};



  return (  
    <div>


    {list.map((item,index)=>
                    <div> 

                      <span>{item}</span>
                      <button onClick={() => delete_data(index)}  >X</button>

                      </div>) }

                     <input type="text" onChange={(e)=>{setb(e.target.value)}} />

                     <button onClick={() => clicked()}>Add</button>

                     <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>




      </Modal>

                     





    </div>
  );
}

export default Dynamic_array;