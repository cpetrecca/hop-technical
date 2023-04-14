import { useEffect, useState } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Modal: React.FC<Props> = ({ children }) => {

  const[opacityStyleChildren, setOpacityStyleChildren]=useState("opacity-0")
  const[opacityStyleWrapper, setOpacityStyleWrapper]=useState("opacity-0")
  useEffect(()=>{
    setOpacityStyleChildren("opacity-100");
    setOpacityStyleWrapper("opacity-80")
  },[])


  return (
    <>
    
      <center><div className={`transition-all ease-in-out duration-300 delay-100 ${opacityStyleChildren} z-20 fixed w-screen  p-0 mt-20`}>{children}</div></center>
      <div  className={`transition-all ease-in-out duration-300 w-screen h-full fixed top-0  bg-hop2 ${opacityStyleWrapper} z-10 `}></div>
    </>
  );
};

export default Modal;
