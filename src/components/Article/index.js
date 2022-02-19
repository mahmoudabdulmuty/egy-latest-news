import { nanoid } from 'nanoid';
import noImgAvailable from '../../images/No-Image-Available.jpg';
import './index.css';
function Article({ articles }) {
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
								? noImgAvailable
								: urlToImage
						}
						alt={title}
					/>
				</div>
				<div className="article-heading">
					<h2 className="article-title">{title}</h2>
					<p className="article-description">{description ?? ''}</p>
				</div>
				<a className="article-link" target="_blank" rel="noreferrer" href={url}>
					قراءة المزيد
				</a>
			</article>
		);
	});
}

export default Article;
