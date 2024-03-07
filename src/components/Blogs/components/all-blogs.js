import React from 'react'

import PropTypes from '../index.css' 

import BlogPostCard2 from './sub-components/all-blogs/blog-post-card2'
import styles from './all-blogs.module.css'  

const AllBlogs = (props) => {
  return (
    <div className={styles['all-blogs']}>
      <div className={styles['container']}>
        <a
          href={props.linkComponent}
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link']}
        >
          <BlogPostCard2
            rootClassName="root-class-name6"
            className={styles['component']}
          ></BlogPostCard2>
        </a>
      </div>
      <div className={styles['container1']}>
        <a
          href={props.linkComponent1}
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link1']}
        >
          <BlogPostCard2
            rootClassName="root-class-name5"
            className={styles['component1']}
          ></BlogPostCard2>
        </a>
      </div>
      <div className={styles['container2']}>
        <a
          href={props.linkComponent2}
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link2']}
        >
          <BlogPostCard2
            rootClassName="root-class-name4"
            className={styles['component2']}
          ></BlogPostCard2>
        </a>
      </div>
      <div className={styles['container3']}>
        <a
          href={props.linkComponent3}
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link3']}
        >
          <BlogPostCard2
            rootClassName="root-class-name7"
            className={styles['component3']}
          ></BlogPostCard2>
        </a>
      </div>
    </div>
  )
}

AllBlogs.defaultProps = {
  linkComponent: 'https://rasoriitm.vercel.app/blog',
  linkComponent1: 'https://rasoriitm.vercel.app/blog',
  linkComponent2: 'https://rasoriitm.vercel.app/blog',
  linkComponent3: 'https://rasoriitm.vercel.app/blog',
}

AllBlogs.propTypes = {
  linkComponent: PropTypes.string,
  linkComponent1: PropTypes.string,
  linkComponent2: PropTypes.string,
  linkComponent3: PropTypes.string,
}

export default AllBlogs
