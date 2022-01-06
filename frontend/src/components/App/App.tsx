import { Transcendence } from './style'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Chat from '../Chat/Chat';
import Game from '../Game/Game';
import { useState } from 'react';

function App() {
	const [ page, setPage] = useState('chat');

	return (
		<Transcendence>
			<Header />
			<Main page={page} />
			<Chat page={page}/>
			<Game page={page}/>
			<Footer />
		</Transcendence>
	);
}

export default App;
