import styled from 'styled-components';
import color from '../../colors'

interface StyleProps {
	page?: string;
}

export const Transcendence = styled.div<StyleProps>`
	height: 100%;
	display: flex;
	flex-direction: column;
	color: ${color.darkForegroundNormal};
	background: ${color.darkBackgroundAlternate};
`;