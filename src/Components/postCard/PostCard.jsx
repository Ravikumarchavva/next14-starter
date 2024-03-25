import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = ({post}) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.the-allen-group.com/sites/default/files/2017-05/2.A-PM-CM-Services---BART-HMC-Staff-On-Site.jpg"
            alt="blog photo"
            fill
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.date}>01.01.2024</div>
      </div>
      <div className={styles.bottom}>
      <h1>{post.title}</h1>
        <p className={styles.desc}>
          {post.body}
        </p>
        <Link href={`/Blog/${post.id}`} className={styles.Link}>Read more</Link>
      </div>
    </div>
  );
};

export default PostCard;
