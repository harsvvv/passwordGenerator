/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState,useRef } from 'react'

const Card = () => {
    const [length,setlength]=useState(8);
    const [number,setnumber]=useState(false);
    const [char,setchar]=useState(false);
    const [password,setpassword]=useState("");
    const passwordRef=useRef(null);
    var pass="";
   // var str="abcdefghijklmnopqrstuvwxyz";
   const GENERATOR = useCallback(() => {
    var str = "abcdefghijklmnopqrstuvwxyz";
    if(number){
        str+="1234567890";
    }
    if(char){
        str+="~!@#$%^&*()_+{}<>|";
    }
    for(var i=0;i<length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
    }
    setpassword(pass);
}, [length, number, char, setpassword]);
const copyclip=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
}
useEffect(()=>{
    GENERATOR();
},[length,char,number,GENERATOR])



  return (
    <div className='mt-4 w-auto bg-red-100 flex flex-col  items-center p-5 rounded-md'>
    <h1 className='font-bold text-lg '>PASSWORD GENERATOR</h1>
    <div className='m-5 flex '>
        <input className='rounded-md p-1 m-1 w-[30rem] border-2' type='text' value={password} ref={passwordRef} readOnly/>
        <button className='bg-blue-500 rounded p-1 w-[4rem]' onClick={copyclip}>copy</button>
    </div>
    <div className='mt-5 flex'>
    <div className='mr-2'>
    <input type='range' name='range' min='0' max='30' 
        onChange={(e)=>{setlength(e.target.value)}}
    />
    <label for='range' className='ml-1'>Length: {length}</label>
    </div>
    <div className='mr-2'>
        
    <input type='checkbox'  name='number' onChange={()=>{ setnumber((prev)=>(!prev))}}/>
<label for='number' className='ml-1'>Number</label>


    </div>
    <div className='mr-2'>
    <input type='checkbox'  name='character' onChange={()=>{ setchar((prev)=>(!prev))}}/>
   <label for='character' className='ml-1'>Character</label>
    </div>
    </div>

    </div>
  )
}

export default Card