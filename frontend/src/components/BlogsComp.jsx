import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client.ts';

const BlogsComp = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // Track the selected blog for the popup

  useEffect(() => {
    client.fetch(`*[_type == "blog"]{
      title,
      content,
      publishedAt
    }`)
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Function to open the popup
  const openPopup = (blog) => {
    setSelectedBlog(blog);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="w-screen mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Blogs</h1>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-3/4 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg border-2 border-lime-400 shadow-md p-6 relative"
              style={{ height: '400px', overflow: 'hidden' }}
            >
              <h2 className="text-xl font-semibold text-lime-400 mb-2">{blog.title}</h2>
              <p className="text-gray-300 mb-4" style={{ maxHeight: '280px', overflow: 'hidden' }}>
                {blog.content}
              </p>
              <p className="text-sm text-gray-400 absolute bottom-6">
                Published on: {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              <button
                onClick={() => openPopup(blog)}
                className="absolute bottom-6 right-6 bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition-colors"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg border-2 border-lime-400 shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold text-lime-400 mb-4">{selectedBlog.title}</h2>
            <p className="text-gray-300 mb-4">{selectedBlog.content}</p>
            <p className="text-sm text-gray-400 mb-4">
              Published on: {new Date(selectedBlog.publishedAt).toLocaleDateString()}
            </p>
            <button
              onClick={closePopup}
              className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsComp;