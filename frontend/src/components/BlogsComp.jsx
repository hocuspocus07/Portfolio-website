import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client.ts';

const BlogsComp = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "blog"]{
      title,
      content,
      publishedAt
    }`)
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const openPopup = (blog) => setSelectedBlog(blog);
  const closePopup = () => setSelectedBlog(null);

  return (
    <div className="w-screen mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-12 text-center font-mono text-green-400 tracking-widest drop-shadow-[0_0_5px_#00ff00]">
        <span className="text-green-600">[</span>BLOGS<span className="text-green-600">]</span>
      </h1>
      
      <div className="flex flex-col items-center">
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md rounded-xl border border-green-700/30 p-6 relative transition-all duration-500 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              style={{ height: '400px', overflow: 'hidden' }}
            >
              <h2 className="text-2xl font-mono font-bold text-green-300 mb-3 tracking-tight">&gt; {blog.title}</h2>
              <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed" style={{ maxHeight: '260px', overflow: 'hidden' }}>
                {blog.content}
              </p>
              <p className="text-xs text-gray-500 font-mono absolute bottom-6">
                ⏳ {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              <button
                onClick={() => openPopup(blog)}
                className="absolute bottom-6 right-6 bg-green-900/40 text-green-300 px-4 py-2 rounded-md border border-green-700/40 hover:bg-green-800/60 hover:border-green-400/50 transition-all duration-300 font-mono text-xs tracking-wider"
              >
                [READ_MORE]
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 border border-green-600/50 rounded-xl shadow-lg p-8 w-11/12 md:w-3/4 lg:w-1/2 max-h-screen overflow-y-auto font-mono">
            <h2 className="text-3xl font-bold text-green-300 mb-6">&gt; {selectedBlog.title}</h2>
            <p className="text-gray-200 mb-6 leading-relaxed">{selectedBlog.content}</p>
            <p className="text-sm text-gray-500 mb-6">
              ⏳ {new Date(selectedBlog.publishedAt).toLocaleDateString()}
            </p>
            <button
              onClick={closePopup}
              className="bg-green-900/40 text-green-300 px-5 py-2 rounded-md border border-green-600/40 hover:bg-green-800/60 hover:border-green-400/50 transition-all duration-300 text-sm tracking-wider"
            >
              [CLOSE]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsComp;
