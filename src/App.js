import 'noto-sans-arabic/css/300.css';
import 'noto-sans-arabic/css/400.css';
import 'noto-sans-arabic/css/700.css';
import { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';

function App() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetch(
			'http://newsapi.org/v2/top-headlines?country=eg&apiKey=3bd4753c68144c04b3eb73e44b7da657'
		)
			.then((res) => res.json())
			.then((data) => setArticles(data.articles));
	}, []);

	return (
		<>
			<header className="header">
				<h1 className="header-title">أخبار مصر</h1>
			</header>
			<div className="app">
				<Article articles={articles} />
			</div>
		</>
	);
}
export default App;
