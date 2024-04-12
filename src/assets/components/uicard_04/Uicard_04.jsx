import './uicard_04.css'
import SearchIcon from '../../../../public/search.svg';
import React from 'react'

function Uicard_04() {
  return (
    <div className="ui_wrapper_04">
      <div className="form_ui">
        <form action="" className="search_bar">
          <input type="text" name="" id="search_input" placeholder='Search for articles'/>
          <button className='search-btn'>
            <img className='search_icon' src={SearchIcon} alt="" />
          </button>
        </form>
        <div className="search_cat"></div>
      </div>
    </div>
  )
}

export default Uicard_04