import { useEffect, useState } from "react";
import "./App.css";
import NavInShorts from "./components/NavInShorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      const news = await response.json();
      setNewsArray(news.articles);
      setNewsResults(news.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <NavInShorts setCategory={setCategory} />

      <NewsContent
        loadmore={loadmore}
        setLoadmore={setLoadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />

      <Footer />
    </div>
  );
}

export default App;
