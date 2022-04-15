import React from 'react'
import './VideoList.css'

export default function VideoList() {
  return (
    <div className='videolist'>
    <div className="videos">
    <section className="video-section">
    <article className="video-container">
    <a href="#" className="thumbnail" data-duration="12:24">
      <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
    </a>
    <div className="video-bottom-section">
      <a href="#">
        <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
      </a>
      <div className="video-details">
        <a href="#" className="video-title">Video Title</a>
        <a href="#" className="video-channel-name">Channel Name</a>
        <div className="video-metadata">
          <span>12K views</span>
          •
          <span>1 week ago</span>
        </div>
      </div>
    </div>
  </article>
  </section>
  </div>
  </div>
  )
}
