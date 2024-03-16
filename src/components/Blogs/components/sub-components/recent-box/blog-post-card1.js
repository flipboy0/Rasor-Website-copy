import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card1.module.css'

const BlogPostCard1 = (props) => {
  return (
    <div
      className={` ${styles['blog-post-card']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span className={styles['text']}>{props.title}</span>
        <span className={styles['text1']}>{props.description}</span>
        <span className={styles['text2']}>{props.readmore}</span>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  imageAlt: 'image',
  title: 'Blog Title Here',
  imageSrc:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1500',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem',
  rootClassName: '',
  readmore: 'Read More ->',
}

BlogPostCard1.propTypes = {
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  readmore: PropTypes.string,
}

export default BlogPostCard1
