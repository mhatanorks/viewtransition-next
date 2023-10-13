import styles from "@/styles/blog.module.scss";
import Image from "next/image";
import ViewTransition from "../components/ViewTransition";

const blog = ({ limitedData }: { limitedData: any }) => {
  function truncate(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  function getLastDigit(num: number) {
    return num % 10;
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          {limitedData.map((i: any) => (
            <article key={i.id} className={styles.card}>
              <ViewTransition href={`/blog/${i.id}`}>
                <Image
                  src={`/blog/article-${getLastDigit(i.id)}.png`}
                  width={342}
                  height={260}
                  alt="Picture of the author"
                  style={{
                    viewTransitionName: `article-${i.id}`,
                  }}
                />
                <h3
                  className={styles.title}
                  style={{
                    viewTransitionName: `title-${i.id}`,
                  }}
                >
                  {i.title}
                </h3>
                <p className={styles.text}>{truncate(i.body, 20)}</p>
              </ViewTransition>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 60, tags: ["collection"] },
  });
  const post = await res.json();
  const limitedData = post.slice(0, 30);

  return { props: { limitedData } };
}

export default blog;
