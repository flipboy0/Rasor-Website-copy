import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card2.module.css'

const BlogPostCard2 = (props) => {
  return (
    <div
      className={` ${styles['blog-post-card']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className={styles['image']}
        />
      </div>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.when}</span>
          <h1 className={styles['text1']}>{props.title}</h1>
          <span className={styles['text2']}>{props.description}</span>
          <span className={styles['text3']}>Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  imageAlt: 'image',
  when: '3 days ago',
  rootClassName: '',
}

BlogPostCard2.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  when: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard2
