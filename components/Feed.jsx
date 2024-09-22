"use client";
import React from "react";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([])
  useEffect(() => {  
    const fetchPost = async () => {
      const res = await fetch('/api/prompt/');
      const data = await res.json();
      setPosts(data);
    }
    fetchPost();
  }, [])
  
  const handleSearchChange = (e) => {

  };

  const PromptCardList = ({ data, handleTagClick }) => {
    return <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}

    </div>;
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a Tag or a Username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
