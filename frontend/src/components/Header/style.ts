import styled from 'styled-components';
import color from '../../colors';

interface PropsElement {
	color?: string,
}

export const HeaderWrapper = styled.header`
	display: flex;
	height: 4rem;
	justify-content: space-between;
	align-items: center;
	background: ${color.darkBackgroundNormal};
`;

export const HeaderNameProject = styled.h1`
	flex-shrink: 0;
	width: 23rem;
	margin: 0 0 0 1rem;
	cursor: pointer;
`;

export const HeaderNavigation = styled.ul`
	flex-shrink: 0;
	display: flex;
	align-items: center;
`;

export const HeaderNavigationElement= styled.li<PropsElement>`
	display: flex;
	align-items: center;
	margin: 0 1rem 0 1rem;
	padding: .5rem;
	cursor: pointer;
	color: ${({color}) => color ? color : 'white'};
`;

export const HeaderAvatarka = styled.img`
	height: 3rem;
	border-radius: 100%;
	margin-left: 1rem;
`;