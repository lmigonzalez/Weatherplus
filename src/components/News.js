import React from "react";
import NewsCard from "./NewsCard";


const News = ({news}) => {
	// console.log(news)
  return (
    <section className="news-section">
		<h2>Latest news in miami</h2>
		<div className='news-container'>
		<NewsCard />
    	<NewsCard />
    	<NewsCard />
    	<NewsCard />
    	<NewsCard />
    	<NewsCard />
    	<NewsCard />
    	<NewsCard />
    	<NewsCard />
		</div>
    	
    </section>
  );
};

export default News;
