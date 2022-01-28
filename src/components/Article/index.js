import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import './Article.css';
export class Article extends Component {
	render() {
		const { articles } = this.props;

		return articles.map((article) => {
			const { title, description, url, urlToImage } = article;
			return (
				<article key={nanoid()} className="article">
					<div className="article-img">
						<img
							src={
								!urlToImage ||
								urlToImage.includes('muhtwaplus') ||
								urlToImage.includes('aljazeera.net')
									? './img/No-Image-Available.jpg'
									: urlToImage
							}
							alt={title}
						/>
					</div>
					<div className="article-heading">
						<h2 className="article-title">{title}</h2>
						<p className="article-description">{description ?? ''}</p>
					</div>
					<a
						className="article-link"
						target="_blank"
						rel="noreferrer"
						href={url}
					>
						قراءة المزيد
					</a>
				</article>
			);
		});
	}
}

export default Article;
