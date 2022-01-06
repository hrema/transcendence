import { 
	HeaderWrapper,
	HeaderNameProject,
	HeaderNavigation,
	HeaderNavigationElement,
	HeaderAvatarka
} from './style';
import color from '../../colors'

const ButtonDrop = () => {
	return (
		console.log('hi')
	)
}

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderNameProject>Transcendence</HeaderNameProject>
			<HeaderNavigation>
				<HeaderNavigationElement>Home</HeaderNavigationElement>
				<HeaderNavigationElement>Chat</HeaderNavigationElement>
				<HeaderNavigationElement>Game</HeaderNavigationElement>
				<HeaderNavigationElement
					color={color.decorationFocus}
					onClick={ButtonDrop}
				>
					Monie
					<HeaderAvatarka src={require('../../assets/images/avatarka.png')}/>
				</HeaderNavigationElement>
			</HeaderNavigation>
		</HeaderWrapper>
	);
}

export default Header;