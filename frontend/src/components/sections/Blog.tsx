// src/components/sections/Blog.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import axios from "axios";

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"view" | "add">("view");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<BlogPost[]>("http://localhost:5000/api/blogs");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/blogs/${editingId}`, {
          title,
          content,
        });
      } else {
        await axios.post("http://localhost:5000/api/blogs", {
          title,
          content,
        });
      }

      resetForm();
      fetchPosts();
    } catch (error) {
      console.error("Error saving blog", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${id}`);
        fetchPosts();
      } catch (error) {
        console.error("Error deleting blog", error);
      }
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingId(post._id);
    setActiveTab("add");
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setEditingId(null);
    setActiveTab("view");
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.section
      id="blog"
      className="py-20 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          My <span className="text-blue-600">Blog</span>
        </h2>

        <div className="mb-8 flex border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium text-sm flex items-center ${
              activeTab === "view"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("view")}
          >
            View Posts
          </button>

          <button
            className={`px-4 py-2 font-medium text-sm flex items-center ${
              activeTab === "add"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              resetForm();
              setActiveTab("add");
            }}
          >
            <FiEdit2 className="mr-1" /> New Post
          </button>
        </div>

        {activeTab === "add" ? (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {editingId ? "Edit Post" : "Create New Post"}
            </h3>
            <form onSubmit={handleAddPost} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={resetForm}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Processing..."
                  ) : editingId ? (
                    "Update Post"
                  ) : (
                    "Publish Post"
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
                <p className="mt-4 text-gray-600">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">No blog posts yet.</p>
                <button
                  onClick={() => setActiveTab("add")}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Create Your First Post
                </button>
              </div>
            ) : (
              posts.map((post) => (
                <motion.article
                  key={post._id}
                  className="border-b border-gray-100 pb-8 last:border-0 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-gray-500 mb-2">{formatDate(post.createdAt)}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{post.content}</p>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="text-sm text-primary-600 hover:text-primary-800 flex items-center transition-colors"
                    >
                      <FiEdit2 className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeletePost(post._id)}
                      className="text-sm text-red-500 hover:text-red-700 flex items-center transition-colors"
                    >
                      <FiTrash2 className="mr-1" /> Delete
                    </button>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Blog;