import { Transcendence } from './style'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Chat from '../Chat/Chat';
import { useState } from 'react';

function App() {
	const [ page, setPage] = useState('home');

	return (
		<Transcendence>
			<Header />
			<Main />
			{/* <Chat /> */}
			<Footer />
		</Transcendence>
	);
}

export default App;
