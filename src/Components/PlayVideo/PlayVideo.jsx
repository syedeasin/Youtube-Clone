import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

const PlayVideo = () => {
    return (
        <div className="play-video">
            <video src={video1} controls autoPlay muted></video>
            <h3>Mix - I Jal The Band I Woe Lamhey I Album Adat</h3>
            <div className="play-video-info">
                <p>15k views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt=""/>125</span>
                    <span><img src={dislike} alt=""/>13</span>
                    <span><img src={share} alt=""/>Share</span>
                    <span><img src={save} alt=""/>Save</span>
                </div>
            </div>
                <hr/>
                <div className="publisher">
                    <img src={jack} alt=""/>
                    <div>
                        <p>Bike BD</p>
                        <span>1M Subscribers</span>
                    </div>
                    <button>Subscribe</button>
                </div>
                <div className="video-description">
                    <p>Channel that makes learning easy</p>
                    <p>In this single Tutorial you will learn to build and deploy 3 React.js Projects from scratches.
                        These projects can be customize to use in Resume and personal portfolio. In this tutorial you
                        will learn to build modern and complex web apps using React. We will be building 3 react
                        projects.
                        Our first project is Netflix clone using React js. Where we will build the user authentication
                        using Firebase, and we will display the movies details using TMDB API. So you will learn to
                        integrate Firebase authentication and API in the react projects.
                        Our next project is YouTube clone, Where we will build the user interface same as YouTube and we
                        will fetch the video and video details from official YouTube API.
                        Then we will move to third Project using React, where we will build and deploy a crypto price
                        tracking application. Here we are going to use CoinGecko API to display the crypto currency
                        price and other details on our react app.
                        Buy the end of this tutorial you will build not only 3, but you can build any react project with
                        modern and complex user interface.</p>
                    <hr/>
                    <h4>130 Comments</h4>
                    <div className="comment">
                        <img src={user_profile} alt=""/>
                        <div>
                            <h3>Jack Nikolsen <span>8 hours ago</span></h3>
                            <p>I thank you enormously for level in React now, Sir, I am a pure Linguist but I am
                                mastering web dev easily thanks to your tutorials</p>
                            <div className="comment-action">
                                <img src={like} alt=""/><span>12</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt=""/>
                        <div>
                            <h3>Jack Nikolsen <span>8 hours ago</span></h3>
                            <p>I thank you enormously for level in React now, Sir, I am a pure Linguist but I am
                                mastering web dev easily thanks to your tutorials</p>
                            <div className="comment-action">
                                <img src={like} alt=""/><span>12</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt=""/>
                        <div>
                            <h3>Jack Nikolsen <span>8 hours ago</span></h3>
                            <p>I thank you enormously for level in React now, Sir, I am a pure Linguist but I am
                                mastering web dev easily thanks to your tutorials</p>
                            <div className="comment-action">
                                <img src={like} alt=""/><span>12</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>



        </div>
    );
};

export default PlayVideo;