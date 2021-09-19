import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // Send a request to the backend API
  // to fetch the news item with newsID

  return <h1>The {newsId} Dynamic Route</h1>;
}

export default DetailPage;
