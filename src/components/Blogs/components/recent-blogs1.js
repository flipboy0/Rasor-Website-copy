import React from 'react'

import PropTypes from '../index.css' 

import BlogPostCard1 from './sub-components/recent-box/blog-post-card1'
import styles from "./recent-blogs1.module.css" 

const RecentBlogs1 = (props) => {
  return (
    <div className={styles['recent-blogs']}>
      <div className={styles['container']}>
        <h1 className={styles['text']}>{props.heading}</h1>
        <div className={styles['container1']}></div>
      </div>
      {/* <span className={styles['left-scroll-btn']}>{props.leftScrollBtn}</span>
      <span className={styles['right-scroll-btn']}>{props.rightScrollBtn}</span> */}
      <div className={styles['container2']}>
        <div className={styles['container3']}>
          <BlogPostCard1
            rootClassName="rootClassName11"
            className={styles['component']}
          ></BlogPostCard1>
        </div>
        <div className={styles['container4']}>
          <BlogPostCard1
            imageSrc="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName12"
            className={styles['component1']}
          ></BlogPostCard1>
        </div>
        <div className={styles['container5']}>
          <BlogPostCard1
            imageSrc="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName13"
            className={styles['component2']}
          ></BlogPostCard1>
        </div>
      </div>
    </div>
  )
}

RecentBlogs1.defaultProps = {
  heading: 'Recents',
}

RecentBlogs1.propTypes = {
  leftScrollBtn: PropTypes.string,
  rightScrollBtn: PropTypes.string,
  heading: PropTypes.string,
}

export default RecentBlogs1