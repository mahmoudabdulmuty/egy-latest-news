import './Menu.css';
const Menu = ({ handleClick }) => {
	return (
		<menu className="menubar">
			<ul className="menu-items">
				<li>
					<a
						className="menu-link business"
						name="business"
						onClick={(e) => handleClick(e)}
						href="/"
					>
						مــال وأعمـال
					</a>
				</li>
				<li>
					<a
						className="menu-link entertainment"
						name="entertainment"
						onClick={(e) => handleClick(e)}
						href="/"
					>
						ترفيــة
					</a>
				</li>
				<li>
					<a
						className="menu-link health"
						name="health"
						onClick={(e) => handleClick(e)}
						href="/"
					>
						صحـة
					</a>
				</li>
				<li>
					<a
						className="menu-link science"
						name="science"
						onClick={(e) => handleClick(e)}
						href="/"
					>
						علـوم
					</a>
				</li>
				<li>
					<a
						className="menu-link sports"
						name="sports"
						onClick={(e) => handleClick(e)}
						href="/"
					>
						رياضـة
					</a>
				</li>
				<li>
					<a
						className="menu-link technology"
						name="technology"
						onClick={(e) => handleClick(e)}
						href="/"
					>
						تكنولوجيـا
					</a>
				</li>
			</ul>
		</menu>
	);
};

export default Menu;
