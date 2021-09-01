import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job545-wit-56_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ec3ef5fbd6338493f4cab901659c8b72" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Filip Risteski</h2>
                <h4>Frontend Dev</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">231</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className="sidebar__statNumber">441</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('C#')}
                {recentItem('JavaScript')}
                {recentItem('To the moon')}
            </div>
        </div>  
    )
}

export default Sidebar
