import React from 'react';
import Avatar from 'material-ui/Avatar';
import GridList from 'material-ui/GridList';
import GridTile from 'material-ui/GridList/GridTile';

const Header = () => {
	const styles = {
		root: {
			display: 'flex',
			justifyContent: 'space-between'
		},
		avatar: {
			alignSelf: 'center',
			marginRight: '5px'
		},
		logo: {
			alignSelf: 'center'
		}
	};

	return (
		<header className="header">
			<GridList className="container" cellHeight={50} cols={1}>
				<GridTile style={styles.root}>
					<a style={styles.logo} href="http://localhost:3000/">
						<h1>UkrAirHotel</h1>
					</a>
					<div style={styles.avatar}>
						<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
					</div>
				</GridTile>
			</GridList>
		</header>
	);
};

export default Header;
