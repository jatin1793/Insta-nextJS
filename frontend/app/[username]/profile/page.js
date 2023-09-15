"use client"
import React, { useEffect, useState } from 'react'
import "../../globals.css"
import { Button } from "@material-tailwind/react";
import {
  Drawer,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";


const page = (username) => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(async ()=>{
    const response = await axios.get(`http://localhost:3001/${username}/profile`, {
        
    })
  })

  return (
    <div className="w-[80vw] h-screen overflow-x-auto ml-[20vw] border-l-[grey] border-l border-solid p-6">
      <div className='flex gap-10'>
        <img
          className="h-40 w-40 mt-2 ml-24 rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <div className="flex flex-col gap-4 ml-6 px-8 py-4">
          <div className="level1 flex gap-6 items-center">
            <h2>_jatin.w_</h2>
            <Button onClick={openDrawer} color="gray">Edit Profile</Button>
            <Drawer placement='right' number='500' open={open} onClose={closeDrawer}>
              <div className="mb-2 flex items-center justify-between p-4">
                <Typography variant="h5" color="blue-gray">
                Edit Profile
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <form className="flex flex-col gap-6 p-4">
                <Input type="text" label="username" />
                <Input label="name" />
                <Textarea rows={6} label="Bio" />
                <Button>Save Changes</Button>
              </form>
            </Drawer>

          </div>
          <div className="level2 flex gap-10 items-center">
            <h3>0 posts</h3>
            <h3>185 followers</h3>
            <h3>371 following</h3>
          </div>
          <h5>username</h5>
          <h5>Bio XIX</h5>
        </div>
      </div>
        <h2 className='mx-auto flex justify-center mt-16 mb-2'>Posts</h2>
      <div className='pt-6 border-t-[1px] border-gray-400 border-solid px-4 flex-wrap flex gap-6 '>
      <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
    <img
      className="h-72 w-72 object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
      </div>
    </div>
  )
}

export default page