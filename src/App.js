import React from 'react';
import './App.css';
import Article from './components/Article';

class App extends React.Component {
	state = {
		articles: []
	};
	componentDidMount() {
		fetch(
			'http://newsapi.org/v2/top-headlines?country=eg&apiKey=3bd4753c68144c04b3eb73e44b7da657'
		)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					articles: data.articles
				})
			);
	}
	render() {
		return (
			<>
				<header className="header">
					<h1 className="header-title">أخبار مصر</h1>
				</header>
				<div className="app">
					<Article articles={this.state.articles} />
				</div>
			</>
		);
	}
}
export default App;
