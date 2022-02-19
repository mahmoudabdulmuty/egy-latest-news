import './Header.css';
const Header = ({ handleDefault }) => {
	return (
		<header className="header">
			<h1 className="header-title">
				<a href="/" onClick={handleDefault}>
					{' '}
					أخبار مصر
				</a>
			</h1>
		</header>
	);
};

export default Header;
