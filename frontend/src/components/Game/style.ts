import styled from 'styled-components';
import color from '../../colors'

interface StyleProps {
	page?: string;
}

export const GameWrapper = styled.div<StyleProps>`
	display: ${({ page }) => page === 'game' ? 'flex' : 'none'};
	flex: 1 0 auto;
	flex-direction: row;
`;

export const PlayingFieldOne = styled.div`
	position: real
	display: flex;
	flex: 1 0 auto;
	border: 1px solid ${color.foregroundLink};
	border-left: none;
`;

export const PlayingFieldTwo = styled.div`
	display: flex;
	flex: 1 0 auto;
	border: 1px solid ${color.foregroundPositive};
	border-right: none;
`;

export const RacketOne = styled.div`
	position: absolute;
	left: 0;
	height: 20vh;
	width: 2vh;
	background-color: ${color.foregroundLink};
	border-radius: 0 .3rem .3rem 0;
`;

export const RacketTwo = styled.div`
	position: absolute;
	right: 0;
	height: 20vh;
	width: 2vh;
	justify-content: end;
	background-color: ${color.foregroundPositive};
	border-radius: .3rem 0 0 .3rem;
`;

export const Ball = styled.div`
	position: absolute;
	left: 30vw;
	top: 72vh;
	height: 5vh;
	width: 5vh;
	border-radius: 100%;
	border: 1px solid ${color.foregroundNeutral};
	background: ${color.darkBackgroundNormal};
`;