import React from 'react'
import styles from './PostUser.module.css'
const userInfo = async (slug)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
    const data = await response.json();
    if(!data.ok){
      return data
    }
    else{
      throw new Error("Couldn't find the article");
    }
  }

const postuser = async ({userId}) => {
    const user= await userInfo(userId);
  return (
        <div className={styles.detailText}>
              <span className={styles.detailAuther}>Author: {user.name}</span>
              <span className={styles.detailTitle}>UserName: {user.username}</span>
              <span className={styles.detailValue}>
                Email : {user.email}
              </span>
        </div>
  )
}

export default postuser