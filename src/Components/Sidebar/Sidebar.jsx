import React from 'react';
import './Sidebar.css'
import home from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blog from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import gerard from '../../assets/gerard.png'
import megan from '../../assets/megan.png'
import tom from '../../assets/tom.png'
import simon from '../../assets/simon.png'

const Sidebar = ({sidebar}) => {
    return (
        <>
            <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
                <div className="sortcut-links">
                    <div className="side-link">
                        <img src={home} alt="Home Icon"/>
                        <p>Home</p>
                    </div>
                    <div className="side-link">
                        <img src={game} alt="game Icon"/>
                        <p>Gaming</p>
                    </div>
                    <div className="side-link">
                        <img src={automobiles} alt="automobiles Icon"/>
                        <p>Automobiles</p>
                    </div>
                    <div className="side-link">
                        <img src={sports} alt="Sports Icon"/>
                        <p>Sports</p>
                    </div>
                    <div className="side-link">
                        <img src={entertainment} alt="entertainment Icon"/>
                        <p>Entertainment</p>
                    </div>
                    <div className="side-link">
                        <img src={tech} alt="tech Icon"/>
                        <p>Technology</p>
                    </div>
                    <div className="side-link">
                        <img src={music} alt="Music Icon"/>
                        <p>Music</p>
                    </div>
                    <div className="side-link">
                        <img src={blog} alt="blog Icon"/>
                        <p>Blog</p>
                    </div>
                    <div className="side-link">
                        <img src={news} alt="news Icon"/>
                        <p>News</p>
                    </div>
                    <hr/>
                </div>
                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-link">
                        <img src={jack} alt="news Icon"/>
                        <p>Jamuna News</p>
                    </div>
                    <div className="side-link">
                        <img src={gerard} alt="news Icon"/>
                        <p>Gerard Code</p>
                    </div>
                    <div className="side-link">
                        <img src={simon} alt="news Icon"/>
                        <p>Bike Bd</p>
                    </div>
                    <div className="side-link">
                        <img src={tom} alt="news Icon"/>
                        <p>Channel 24</p>
                    </div>
                    <div className="side-link">
                        <img src={megan} alt="megan Icon"/>
                        <p>Coder Trust</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;