import { GameProps } from './interfaces';
import {
	GameWrapper,
	PlayingFieldOne,
	PlayingFieldTwo,
	RacketOne,
	RacketTwo,
	Ball
} from './style';

export function Game(props: GameProps) {
	const { page } = props;
	return(
		<GameWrapper page={page} >
			<PlayingFieldOne>
				<RacketOne />
			</PlayingFieldOne>
			<PlayingFieldTwo>
				<RacketTwo />
			</PlayingFieldTwo>
			<Ball />
		</GameWrapper>
	)
}

export default Game;