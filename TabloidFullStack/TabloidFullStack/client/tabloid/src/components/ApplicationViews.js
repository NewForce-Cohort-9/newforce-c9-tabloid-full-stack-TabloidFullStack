import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { Category } from "./Category/CategoryList";
import { CategoryForm } from "./Category/CategoryForm";
import TagList from "./Tags/TagList";
import TagAdd from "./Tags/TagAdd";
import PostList from "./Post/PostList";

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route index path="categories" element={<Category />} />
      <Route path="/tags" element={<TagList />} />
      <Route path="/tags/add" element={<TagAdd />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="categories/create" element={<CategoryForm />} />
    </Routes>
  );
}
