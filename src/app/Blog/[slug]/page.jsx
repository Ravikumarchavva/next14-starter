import React, { Suspense } from "react";
import styles from "./posts.module.css";
import Image from "next/image";
import PostUser from "@/Components/postUser/PostUser";

const article = async (slug)=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const data = await response.json();
  if(!data.ok){
    return data
  }
  else{
    throw new Error("Couldn't find the article");
  }
}


const SinglePostPage = async ({params}) => {
  const {slug} = params;
  const post = await article(slug);
  return (
    <div className={styles.postContainer}>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.the-allen-group.com/sites/default/files/styles/565_300/public/2019-03/006.JPG?itok=n5IEYLh6"
          alt="blog photo"
          fill
          className={styles.img}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
          <Image
          src="https://www.the-allen-group.com/sites/default/files/styles/565_300/public/2019-03/006.JPG?itok=n5IEYLh6"
          alt="blog photo"
          width={"50"}
          height={"50"}
          className={styles.avatar}
        ></Image>
        <Suspense fallback={<div>Loading ...</div>}>
            <PostUser userId={post.userId}/>
        </Suspense>
          </div>
      </div>
      <div className={styles.descContainer}>
        <p>{post.body} <br/> {post.body}
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
