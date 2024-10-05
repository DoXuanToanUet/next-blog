'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="m-[30px]" style={{ maxWidth: 'calc(100% - 30px)' }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-4 shadow-sm rounded-lg text-center">
          <h2 className="text-xl">Total Post</h2>
          {loading ? (
            <p className="text-black text-[1rem]">Loading...</p>
          ) : blogs?.length > 0 ? (
            <p className="text-green-600 text-[2rem]">{blogs.length}</p>
          ) : (
            <p className="text-green-600 text-[2rem]">No Blogs</p>
          )}
        </div>
        <div className="border p-6 shadow-sm rounded-lg text-center">
          <h2 className="text-xl">Total Category</h2>
          <p className="text-green-600 text-[2rem]">2</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
