import express from "express";
import {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);

export default router;
