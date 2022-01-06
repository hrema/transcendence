import { MainProps } from './interfaces';
import {
	MainWrapper,
	MainHeader,
	MainText,
	MainImg,
} from './style'

export function App(props: MainProps) {
	const { page } = props;
	return (
		<MainWrapper page={page}>
			<MainImg src={require('../../assets/images/logo.png')}/>
			<MainHeader>Soon you will know that you’ve already known thingsthat you thought you didn’t know</MainHeader>
			<MainText>Summary:  This is not C or C++ basic functions! To do something that you’ve never done</MainText>
			<MainText>before without a piscine. Remind yourself at the beginning of your journey</MainText>
			<MainText>in computer science. Now, look where you are standing. Time to shine</MainText>
		</MainWrapper>
	);
}

export default App;