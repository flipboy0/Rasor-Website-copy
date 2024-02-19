import React from 'react';
import Heading from './components/heading';
import BlogPostCard2 from './components/blog-post-card2';

const Blog = (props) => {
  const backgroundImageUrl = '/bgyellow.png'; // Replace with your actual image URL

  // Array of blog post data
  const blogPosts = [
    {
      profile_src: "https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200",
      rootClassName: "mb-8",
    },
    {
      image_src: "https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000",
      profile_src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200",
      rootClassName: "mb-8",
    },
    {
      image_src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000",
      profile_src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200",
      rootClassName: "mb-8",
    }
  ];

  // Check if the screen width is small
  const isSmallScreen = window.innerWidth <= 600;

  return (
    <div id="blog" className="flex flex-col items-left min-h-screen bg-white" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
      <Heading className=""></Heading>
      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto px-8 md:px-16 lg:px-32 py-8">
        {blogPosts.slice(0, isSmallScreen ? 2 : blogPosts.length).map((post, index) => (
          <div className="flex flex-col items-center" key={index}>
            <BlogPostCard2
              image_src={post.image_src}
              profile_src={post.profile_src}
              rootClassName={post.rootClassName}
            ></BlogPostCard2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
