"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/navlink";
import Image from "next/image";
const Links = () => {
  const [open,setOpen]=useState(false)
  const link = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/Contact",
    },
    {
      title: "Blog",
      path: "/Blog",
    },
  ];
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      
      <div className={styles.links}>
      {link.map((item) => (
        <NavLink item={item} key={item.title}/>
        ))}

      {session ? (
        <>
            {isAdmin ? (
              <>
                <NavLink
                  item={{ title: "Admin", path: "/Admin" }}
                  />
                <button className={styles.logout}>LogOut</button>
              </>
            ) : (
              
              <button className={styles.logout}>LogOut</button>
              
              )}
          </>
      ) : (
        
        <NavLink item={{ title: "Login", path: "/Login" }} />
        
        )}
      </div>
      <button onClick={()=>setOpen((prev)=>!prev)} className={styles.menuButton}>
        <Image className={styles.icon} src="/menu.png" alt="Menu" width={"30"} height={"30"}></Image>
      </button>
      {open && <div className={styles.mobileLinks}>
        {link.map((item) =>(
          <div key={item.title} onClick={()=>setOpen((prev)=>!prev)} style={styles.linkButton}>
          <NavLink item={item} />
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Links;
