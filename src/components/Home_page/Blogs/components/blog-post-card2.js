import React from 'react';
import PropTypes from 'prop-types';
import './blog-post-card2.css';

const BlogPostCard2 = (props) => {
  return (
    <a href={props.link} className={`blog-post-card2-blog-post-card ${props.rootClassName}`}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
          <span className="blog-post-card2-text1">{props.when}</span>
        </div>
        <h3 className="blog-post-card2-text2">{props.title}</h3>
        <span className="blog-post-card2-text3">{props.description}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className="blog-post-card2-image1"
            />
            <span className="blog-post-card2-text4">{props.author}</span>
          </div>
          <span className="blog-post-card2-text5">Read More -&gt;</span>
        </div>
      </div>
    </a>
  );
};

BlogPostCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1300',
  rootClassName: '',
  image_alt: 'image',
  label: 'ENTERPRISE',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
  title: 'Lorem ipsum dolor sit amet',
  profile_alt: 'profile',
  when: '3 days ago',
  author: 'Jane Doe',
  link: 'https://example.com',
};

BlogPostCard2.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  profile_src: PropTypes.string,
  title: PropTypes.string,
  profile_alt: PropTypes.string,
  when: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
};

export default BlogPostCard2;
