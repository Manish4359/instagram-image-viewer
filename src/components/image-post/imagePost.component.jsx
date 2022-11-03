import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './../../common.css'
import './imagePost.styles.css'
import CustomInput from '../customInput/customInput.component';
function ImagePost() {
    return (
        <div className='post-container'>
            <div className='post-heading'></div>
            <img src="https://picsum.photos/600/500" alt="post-image" className="post-image" />
            <hr />
            <p className="post-caption">Hello world</p>
            <div className='post-hashtags'><span>#jhvj</span></div>
            <div className="post-likes">
                <FavoriteBorderIcon fontSize='large' /><span>9 likes</span>
            </div>
            <div className="post-comments"></div>
            <div className="post-add-comment">

                <CustomInput />
                <button>Add</button>
            </div>
        </div>
    )
}

export default ImagePost
