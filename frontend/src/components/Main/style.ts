import styled from 'styled-components';

interface StyleProps {
	page?: string;
}

export const MainWrapper = styled.div<StyleProps>`
	display: ${({ page }) => page === 'home' ? 'flex' : 'none'};
	flex: 1 0 auto;
	flex-direction: column;
	align-items: center;
`;

export const MainHeader = styled.h3`
	margin: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
`;

export const MainText = styled.p`
	margin: .3rem;
	font-size: 1rem;
`;

export const MainImg = styled.img`
	height: 40rem;
	width: 70rem;
`;