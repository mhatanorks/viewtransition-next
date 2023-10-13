import styles from "@/styles/nav.module.scss";
import Image from "next/image";
import ViewTransition from "../components/ViewTransition";

// 表示するデータ
export default function Post({ post }: { post: any }) {
  function getLastDigit(num: number) {
    return num % 10;
  }
  console.log(post)
  return (
    <>
      <h1
        style={{
          viewTransitionName: `title-${post.id}`,
        }}
      >
        {post.title}
      </h1>
      <Image
        src={`/blog/article-${getLastDigit(post.id)}.png`}
        width={620}
        height={480}
        alt="Picture of the author"
        style={{
          viewTransitionName: `article-${post.id}`,
        }}
      />
      <p>{post.body}</p>
      <p>{post.body}</p>
      <ViewTransition href={"/blog"}>
        <li className={styles.tag} style={{marginTop: "2rem"}}>
          <button>一覧に戻る</button>
        </li>
      </ViewTransition>
    </>
  );
}

// パスの指定
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}

// 描画するデータの取得
export async function getStaticProps({ params }: { params: any }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 60, tags: ["collection"] } }
  );
  const post = (await res.json()) as {
    title: string;
    body: string;
    id: number;
  };

  return { props: { post } };
}
