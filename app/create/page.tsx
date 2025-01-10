"use client"

import React, { useEffect, useState } from 'react'

import { storage } from '@/utils/firebaseconfig'
import {ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import { useTheme } from 'next-themes'
const page = () => {
  const theme=useTheme();
  console.log(theme)
  
  const [percent, setPercent]=useState(0);
  const[downloadUrl, setDownloadUrl]=useState("");
  const [formData, setFormData]=useState({
  
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
        uploadImage(e.target.files[0]);
        
        }
  }

  useEffect(()=>{
    console.log(formData)
  },[formData])
  const handleClick=(e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    console.log(e.target);
    

  }
  

  const uploadImage=(image:File)=>{
    const storageRef=ref(storage, image.name+Date.now());
    const upload=uploadBytesResumable(storageRef, image);
    upload.on(
      'state_changed',
      (snapshot)=>{
        setPercent(Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100));
        console.log(percent);
        
      },
      (err)=>{
        console.log("Error handler", err);
      },
      ()=>{
        getDownloadURL(upload.snapshot.ref).then((val)=>{
          setDownloadUrl(val);
        })
        
      }


    )

  }
  return (
    <div className='w-[90%] ml-auto mr-auto mt-10'>
     <form>
      <div className='flex flex-col gap-6'>


      <div className='flex flex-col gap-3'>
      <label htmlFor="file">Select File</label>
      <input type="file" accept='image/*' name='file' onChange={handleChange}/>
      </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="title">Enter Title</label>
        <input className={`p-2 ${theme.theme==='light'&& 'border'} rounded-md`} type="text" id="title" placeholder='Enter Title' onChange={(e)=>{
            setFormData({
              ...formData,
              ['title']:e.target.value
            })
        }}  />
        </div>
       <div className='flex flex-col gap-3'>
        <label htmlFor="description">Enter Description</label>
       <textarea id='description' className={`p-2 ${theme.theme==='light'&& 'border'} rounded-md`} placeholder='Enter Description'  onChange={(e)=>{
            setFormData({
              ...formData,
              ['description']:e.target.value
            })
        }} />
       </div>
        <div className='flex flex-col gap-3'>
        <label htmlFor="category">Select Category</label>
        <select name="category" id="category" className={`p-2 ${theme.theme==='light'&& 'border'} rounded-md`} onChange={(e)=>{
            setFormData({
              ...formData, 
              ['category']:e.target.value
            })
        }}>
          <option value="">Choose one</option>
          <option value="Data">Data</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="AI">AI</option>
        </select>

        </div>
        <button type='submit' onSubmit={handleClick}>Submit Data</button>
        </div>
        
      </form>

    </div>
  )
}

export default page
