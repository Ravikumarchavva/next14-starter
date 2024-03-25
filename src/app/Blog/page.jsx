import React from 'react'
import styles from './Blog.module.css'
import PostCard from '@/Components/postCard/PostCard'

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  if(response.ok===true) {
  return data;
  }
  else{
    throw new Error("Couldn't find post")
  }
}

const Blog = async () => {
  const posts = await getData()
  return (
    <div className={styles.blogContainer}>

      {posts.map((post)=>{
        return (
          <div className={styles.blogItem} key={post.id}>
            <PostCard post={post}/>
          </div>
        )
      })}

    </div>
  )
}

export default Blog