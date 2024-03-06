import React from 'react';
import PropTypes from 'prop-types';

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} relative mt-3 overflow-hidden hover:ring-4 ring-red-800 border-0 shadow-sm shadow-black/30 transition-transform ease-in transform-gpu hover:shadow-lg hover:scale-[1.02] sm:ml-4 rounded-3xl`}>
      <div className="sm:flex bg-white hover:bg-white/70"> 
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card2-image w-full sm:w-36 h-40 sm:h-auto object-cover border-10 border-white rounded sm:rounded-l-none sm:rounded-r-md transition-transform transform-gpu"
        />
        <div className="p-4 flex flex-col">
          <div className="blog-post-card2-container1 flex items-start justify-between mb-2">
            <span className="blog-post-card2-text text-xs font-bold text-uppercase text-gray-700">
              {props.label}
            </span>
            <span className="blog-post-card2-text1 text-gray-700 font-light">{props.when}</span>
          </div>
          <h3 className="blog-post-card2-text2 mb-2 text-xl">{props.title}</h3>
          <span className="blog-post-card2-text3 text-gray-700 text-lg">{props.description}</span>
          <div className="blog-post-card2-container2 flex self-start mt-4 items-center justify-between">
            <div className="blog-post-card2-profile flex items-center">
              <img
                alt={props.profile_alt}
                src={props.profile_src}
                className="blog-post-card2-image1 w-8 h-8 object-cover rounded-full"
              />
              <span className="blog-post-card2-text4 ml-2 font-semibold">{props.author}</span>
            </div>
            <a className="pl-2 blog-post-card2-text5 text-red-700 font-semibold" href={props.link}>Read More -&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};



BlogPostCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1300',
  rootClassName: '',
  image_alt: 'image',
  label: '',
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