import React, { useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
    return (
        <div className='mainbar'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="mainbar-container">
                <div className="greet">
                    <p><span>Hello, huzii</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>As a social trent expert, explain a term</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Finish my gaming podcast tagline: play, win, and ...</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>List power words for my resume that show teamwork</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm a tagline for my online store</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="mainbar-botton">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main