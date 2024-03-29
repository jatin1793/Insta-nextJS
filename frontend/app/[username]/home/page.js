"use client"
import React, { useState } from 'react'
import "../../globals.css"

import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { FavoriteBorder } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const page = () => {

  const [userdata, setuserdata] = useState("")
  async function homeuser(event) {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/${userID}/home`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
      }).then(res => res.json())
        .then(response => {
          setuserdata(response)
          console.log(response)
        });

    }
    catch (error) {
      alert("Line 44 " + error);
    }
  }

  return (
    <div>
      <div className="stories w-[50vw] border-l-[grey] border-l border-solid overflow-x-auto flex gap-2 ml-[20vw] p-4 ">
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <img
          className="h-20 w-20 rounded-full "
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
      </div>
      <div className="w-[80vw] overflow-x-auto ml-[20vw] absolute border-l-[grey] border-l border-solid">

        <div className='timeline flex gap-[20vh]'>
          <div className='timeline_left '>
            <div className='timeline_posts'>
              <div className='post border-b-4 border-black-100'>
                <div className='post_header'>
                  <div className='post_header_author'>
                    <Avatar>J</Avatar>
                    <h4>jurien_timber</h4><span>16h</span>
                  </div>
                  <MoreHorizIcon />
                </div>
                <div className='post_image'>
                  <img src="https://plus.unsplash.com/premium_photo-1669227514247-0c32960e1689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </div>
                <div className='post_footer mb-6'>
                  <div className="post_footericons">
                    <div className="post_iconsmain">
                      <FavoriteBorderIcon className='postIcon' />
                      <ChatBubbleOutlineIcon className='postIcon' />
                      <SendIcon className='postIcon' />
                    </div>
                    <div className="post_iconsave">
                      <BookmarkBorderIcon className='postIcon' />
                    </div>
                  </div>
                  Liked by 45 people
                </div>
              </div>
              <div className='post border-b-4 border-black-100'>
                <div className='post_header'>
                  <div className='post_header_author'>
                    <Avatar>J</Avatar>
                    <h4>jurien_timber</h4><span>16h</span>
                  </div>
                  <MoreHorizIcon />
                </div>
                <div className='post_image'>
                  <img src="https://plus.unsplash.com/premium_photo-1669227514247-0c32960e1689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </div>
                <div className='post_footer mb-6'>
                  <div className="post_footericons">
                    <div className="post_iconsmain">
                      <FavoriteBorderIcon className='postIcon' />
                      <ChatBubbleOutlineIcon className='postIcon' />
                      <SendIcon className='postIcon' />
                    </div>
                    <div className="post_iconsave">
                      <BookmarkBorderIcon className='postIcon' />
                    </div>
                  </div>
                  Liked by 45 people
                </div>
              </div>
              <div className='post border-b-4 border-black-100'>
                <div className='post_header'>
                  <div className='post_header_author'>
                    <Avatar>J</Avatar>
                    <h4>jurien_timber</h4><span>16h</span>
                  </div>
                  <MoreHorizIcon />
                </div>
                <div className='post_image'>
                  <img src="https://plus.unsplash.com/premium_photo-1669227514247-0c32960e1689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </div>
                <div className='post_footer mb-6'>
                  <div className="post_footericons">
                    <div className="post_iconsmain">
                      <FavoriteBorderIcon className='postIcon' />
                      <ChatBubbleOutlineIcon className='postIcon' />
                      <SendIcon className='postIcon' />
                    </div>
                    <div className="post_iconsave">
                      <BookmarkBorderIcon className='postIcon' />
                    </div>
                  </div>
                  Liked by 45 people
                </div>
              </div>
              <div className='post border-b-4 border-black-100'>
                <div className='post_header'>
                  <div className='post_header_author'>
                    <Avatar>J</Avatar>
                    <h4>jurien_timber</h4><span>16h</span>
                  </div>
                  <MoreHorizIcon />
                </div>
                <div className='post_image'>
                  <img src="https://plus.unsplash.com/premium_photo-1669227514247-0c32960e1689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </div>
                <div className='post_footer mb-6'>
                  <div className="post_footericons">
                    <div className="post_iconsmain">
                      <FavoriteBorderIcon className='postIcon' />
                      <ChatBubbleOutlineIcon className='postIcon' />
                      <SendIcon className='postIcon' />
                    </div>
                    <div className="post_iconsave">
                      <BookmarkBorderIcon className='postIcon' />
                    </div>
                  </div>
                  Liked by 45 people
                </div>
              </div>
              <div className='post border-b-4 border-black-100'>
                <div className='post_header'>
                  <div className='post_header_author'>
                    <Avatar>J</Avatar>
                    <h4>jurien_timber</h4><span>16h</span>
                  </div>
                  <MoreHorizIcon />
                </div>
                <div className='post_image'>
                  <img src="https://plus.unsplash.com/premium_photo-1669227514247-0c32960e1689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                </div>
                <div className='post_footer mb-6'>
                  <div className="post_footericons">
                    <div className="post_iconsmain">
                      <FavoriteBorderIcon className='postIcon' />
                      <ChatBubbleOutlineIcon className='postIcon' />
                      <SendIcon className='postIcon' />
                    </div>
                    <div className="post_iconsave">
                      <BookmarkBorderIcon className='postIcon' />
                    </div>
                  </div>
                  Liked by 45 people
                </div>
              </div>
            </div>
          </div>

          <div className='timeline_right'>
            <div className='suggestions'>
              <div className='suggestions_title'>Suggestions for you</div>
              <div className="suggestions_usernames">
                <div className="suggestions_username">
                  <div className="username_left">
                    <span className="avatar">
                      <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                      <span className='username'>timber_360</span>
                      <span className='relation'>New to Instagram</span>
                    </div>
                  </div>
                  <button className='flw_btn'>Follow</button>
                </div>
                <div className="suggestions_username">
                  <div className="username_left">
                    <span className="avatar">
                      <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                      <span className='username'>rodri</span>
                      <span className='relation'>New to Instagram</span>
                    </div>
                  </div>
                  <button className='flw_btn'>Follow</button>
                </div>
                <div className="suggestions_username">
                  <div className="username_left">
                    <span className="avatar">
                      <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                      <span className='username'>alvarez_2</span>
                      <span className='relation'>New to Instagram</span>
                    </div>
                  </div>
                  <button className='flw_btn'>Follow</button>
                </div>
                <div className="suggestions_username">
                  <div className="username_left">
                    <span className="avatar">
                      <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                      <span className='username'>kai_havertz</span>
                      <span className='relation'>New to Instagram</span>
                    </div>
                  </div>
                  <button className='flw_btn'>Follow</button>
                </div>
                <div className="suggestions_username">
                  <div className="username_left">
                    <span className="avatar">
                      <Avatar>R</Avatar>
                    </span>
                    <div className="username_info">
                      <span className='username'>jorginho</span>
                      <span className='relation'>New to Instagram</span>
                    </div>
                  </div>
                  <button className='flw_btn'>Follow</button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default page

