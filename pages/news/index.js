import Link from "next/link";

function News() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else</Link>
        </li>
        <li>
          <Link href="/news/third-link">Third Link</Link>
        </li>
        <li>
          <Link href="/news/last_new">Last new</Link>
        </li>
      </ul>
    </>
  );
}

export default News;
