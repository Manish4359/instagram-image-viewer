import React from 'react'
import './profile.styles.css'

function UserProfile() {
  return (
    <>
    <div className="profile-container">
      <img src="" alt="" className='profile-image' />
      <div className="profile-details">
        <p className='profile-name'>manish</p>
        <div className="profile-stats">
          <span className='profile-posts'>Posts: 6</span>
          <span className='profile-follows'>Follows : 6</span>
          <span className='profile-followed'>Followed: 6</span>
        </div>
        <div className="profile-desc">
          <span className="desc">upgrad edu</span>
          <button className='edit-profile-desc'>edit</button>
        </div>
      </div>
    </div>
    <div className="profile-post-images">
      images
    </div>
    </>
  )
}

export default UserProfile