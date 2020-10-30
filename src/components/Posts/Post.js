import React, { useState } from 'react'
import './Post.css'
import Comments from './Comments/Comments'
import Card from '@material-ui/core/Card'
import { Avatar } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'

const Post = () => {
  return (
    <Card className="post">
      <div className="post__header">
        <div className="header__userInfo">
          <Avatar />
          <h5>jatin Singh</h5>
        </div>
        <DeleteOutlinedIcon />
      </div>
      <div className="post__img">
        <img
          src="https://cdn.pixabay.com/photo/2020/04/30/20/14/sky-5114499_1280.jpg"
          alt=""
        />
      </div>
      <div className="post__option ">
        <div className="post__leftOptions">
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <ModeCommentOutlinedIcon fontSize="large" />
          <NearMeOutlinedIcon fontSize="large" />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="post__lower">
        <div className="post__likes">
          <p>1,078 likes</p>
        </div>
        <div className="post__caption ">
          <h4>Jatin Singh</h4>
          <p>
            Here is a list of how much the largest companies make per second.
          </p>
        </div>
        <div className="post__comments">
          <p className="post__view ">View all 21 comments</p>
          <Comments />
          <Comments />
        </div>
      </div>
      <div className="post__input">
        <input placeholder="Add a comment" />
        <p>Post</p>
      </div>
    </Card>
  )
}

export default Post
