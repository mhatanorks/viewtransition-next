import React from "react";
import Image from "next/image";
import styles from "@/styles/about.module.scss";
const about = () => {
  return (
    <div className={styles.card}>
      <Image
        src={`/author.png`}
        width={360}
        height={360}
        alt="Picture of the author"
        className={styles.img}
        style={{
          borderRadius: "99px",
          viewTransitionName: "author-image",
        }}
      />
      <div className={styles.content}>
        <p>View Transition APIのアウトプットサイトです。</p>
        <p>View Transition APIはWeb APIの一種で、簡単に画面遷移時にアニメーションを付与する事ができます。</p>
        <ul>
          <li style={{viewTransitionName: "fade-in",}}>要素ごとにアニメーションの変更が可能</li>
          <li style={{viewTransitionName: "fade-in-2",}}>遷移前後の要素を繋げたアニメーションも実装可能</li>
          <li style={{viewTransitionName: "fade-in-3",}}>FireFox等の未対応のブラウザでは動作しない(2023/10現在)</li>
        </ul>
        <p>写真の子は海遊館から連れてきたワモンアザラシのユキです。</p>
        <div className={styles.author}>Written by <a className={styles.redirect} href="https://github.com/mhatanorks" target="_blank" rel="noopener noreferrer">@mhatanorks</a></div>
      </div>
    </div>
  );
};

export default about;
