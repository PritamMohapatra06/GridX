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

// Get backend URL from .env
const API_BASE_URL = import.meta.env.VITE_API_URL;

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
      const res = await axios.get<BlogPost[]>(`${API_BASE_URL}/blogs`);
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
        await axios.put(`${API_BASE_URL}/blogs/${editingId}`, { title, content });
      } else {
        await axios.post(`${API_BASE_URL}/blogs`, { title, content });
      }
      resetForm();
      fetchPosts();
    } catch (error: any) {
      console.error("Error saving blog", error.response?.data || error.message);
      alert(`Failed to save: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`${API_BASE_URL}/blogs/${id}`);
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
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.section
      id="blog"
      className="mt-10 py-16 px-4 bg-black text-white"
      initial={{ opacity: 0 , y: 20 }}
      animate={{ opacity: 1 , y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-primary">Blog</span>
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "view" ? "text-primary border-b-2 border-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("view")}
          >
            View Posts
          </button>

          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "add" ? "text-primary border-b-2 border-primary" : "text-gray-500"
            }`}
            onClick={() => {
              resetForm();
              setActiveTab("add");
            }}
          >
            <FiEdit2 className="inline mr-1" /> New Post
          </button>
        </div>

        {/* Add/Edit Post */}
        {activeTab === "add" ? (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold ">
              {editingId ? "Edit Post" : "Create New Post"}
            </h3>
            <form onSubmit={handleAddPost} className="space-y-4 text-black">
              <input
                type="text"
                placeholder="Post Title"
                className="w-full px-4 py-2 border rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                rows={6}
                placeholder="Post Content"
                className="w-full px-4 py-2 border rounded-lg"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>

              <div className="flex justify-end space-x-4">
                <button type="button" onClick={resetForm} className="px-4 py-2 bg-red-500 text-black rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg">
                  {isLoading ? "Processing..." : editingId ? "Update Post" : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            {isLoading ? (
              <p className="text-center">Loading posts...</p>
            ) : posts.length === 0 ? (
              <p className="text-center">No blog posts yet.</p>
            ) : (
              posts.map((post) => (
                <motion.article
                  key={post._id}
                  className="border-b pb-8 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-gray-500 mb-2">{formatDate(post.createdAt)}</p>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{post.content}</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="text-primary flex items-center"
                    >
                      <FiEdit2 className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeletePost(post._id)}
                      className="text-red-500 flex items-center"
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
