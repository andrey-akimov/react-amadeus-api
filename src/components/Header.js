import React from 'react';
import Avatar from 'material-ui/Avatar';
import GridList from 'material-ui/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
		},
		customWidth: {
			width: 100
		}
	};

	return (
		<header className="header">
			<GridList className="container" cellHeight={50} cols={1}>
				<GridTile style={styles.root}>
					<a style={styles.logo} href="#">
						<h1>UkrAirHotel</h1>
					</a>
					<div style={styles.avatar}>
						<DropDownMenu
							style={styles.customWidth}
							autoWidth={false}
						>
							<MenuItem value={1} primaryText="USD" />
							<MenuItem value={2} primaryText="UAH" />
							<MenuItem value={3} primaryText="RUB" />
						</DropDownMenu>
						<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
					</div>
				</GridTile>
			</GridList>
		</header>
	);
};

export default Header;
