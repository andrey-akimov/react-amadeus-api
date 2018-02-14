import React from 'react';
import Avatar from 'material-ui/Avatar';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<a className="logo" href="/">
					<h1>UkrAirHotel</h1>
				</a>
				<a className="avatar" href="/">
					{/* Let it be for now */}
					<Avatar src="../img/user.jpg" />
				</a>
			</div>
		</header>
	);
};

export default Header;
