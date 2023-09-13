"use client"
import React from 'react'
import "../../globals.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { FavoriteBorder } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const page = () => {
  return (
    <div className="w-[80vw] h-screen overflow-x-auto ml-[20vw] px-[0vh] py-[10vh] absolute border-l-[grey] border-l border-solid">
      <div className='timeline flex gap-[20vh]'>
        <div className='timeline_left '>
          <div className='timeline_posts'>
            <div className='post'>
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
              <div className='post_footer'>
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
  )
}

export default page