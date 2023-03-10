import React from "react";
import { useNavigate,Link } from "react-router-dom";

export const Contact = (props) => {
  const navigate = useNavigate();
  const handliClick = () => {
    setTimeout(()=>{
      navigate("/about");
    },5000)
    
  };
  const handleOnBcak=()=>{
    navigate(-1)
  }
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        amet quaerat dignissimos, veritatis minima consectetur veniam quod
        perferendis qui temporibus, dolore nostrum, iste officiis quibusdam quae
        ex quasi libero? Nesciunt?
      </p>

     <button onClick={handliClick}>go to home page</button>
      <button onClick={handleOnBcak}>back</button>
    </div>
  );
};
