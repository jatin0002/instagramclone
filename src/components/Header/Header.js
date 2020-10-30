import React from 'react'
import './Header.css'
// Importing Icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import { Avatar } from '@material-ui/core'

const Header = () => {
  return (
    <div className="header">
      <main>
        <div className="header__logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/500px-Instagram_logo.svg.png" />
        </div>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <div className="header__options">
          <HomeIcon fontSize="large" />
          <NearMeOutlinedIcon fontSize="large" />
          <ExploreOutlinedIcon fontSize="large" />
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <Avatar className="header__avater" />
        </div>
      </main>
    </div>
  )
}

export default Header
