import axios from 'axios';
import 'noto-sans-arabic/css/300.css';
import 'noto-sans-arabic/css/400.css';
import 'noto-sans-arabic/css/700.css';
import { useEffect, useState } from 'react';
import Article from './components/Article';
import Header from './components/Header/';
import Menu from './components/Menu';

function App() {
	const [articles, setArticles] = useState([]);
	const [url, setUrl] = useState(
		'http://newsapi.org/v2/top-headlines?country=eg&apiKey=3bd4753c68144c04b3eb73e44b7da657'
	);
	const handleClick = (e) => {
		e.preventDefault();
		const { name: category } = e.target;
		setUrl(
			`https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=3bd4753c68144c04b3eb73e44b7da657`
		);
	};
	useEffect(() => {
		const getArticles = async () => {
			const data = await axios(url);
			const { articles } = data.data;
			setArticles(articles);
		};
		getArticles();
	}, [url]);

	return (
		<>
			<Header
				handleDefault={() =>
					setUrl(
						'http://newsapi.org/v2/top-headlines?country=eg&apiKey=3bd4753c68144c04b3eb73e44b7da657'
					)
				}
			/>
			<Menu handleClick={handleClick} />
			<Article articles={articles} />
		</>
	);
}
export default App;
