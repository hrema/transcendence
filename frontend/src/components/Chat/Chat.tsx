import { ChatProps } from './interfaces';
import { 
	ChatWrapper,
	ChatNav,
	ChatId,
	ChatIdImg,
	ChatData,
	ChatNikename,
	ChatMessage,
	ChatDialog,
	ChatDialogWindow,
	ChatDialogMessage,
	DialogData,
	ChatPushMessage,
	ChatForm,
	ChatInput,
	ChatButton
} from './style';


export function Chat(props: ChatProps) {
	const { page } = props;
	return(
		<ChatWrapper page={page}>
			<ChatNav>
				<ChatId>
					<ChatIdImg src={require('../../assets/images/avatarka.png')} />
					<ChatData>
						<ChatNikename>Monie</ChatNikename>
						<ChatMessage>Last Message</ChatMessage>
					</ChatData>
				</ChatId>
				<ChatId>
					<ChatIdImg src={require('../../assets/images/avatarka.png')} />
					<ChatData>
						<ChatNikename>Monie</ChatNikename>
						<ChatMessage>Last Message</ChatMessage>
					</ChatData>
				</ChatId>
			</ChatNav>
			<ChatDialog>
				<ChatDialogWindow>
					<ChatDialogMessage>
						<ChatIdImg src={require('../../assets/images/avatarka.png')} />
						<DialogData>
							<ChatNikename>Monie</ChatNikename>
							<ChatMessage>Message</ChatMessage>
						</DialogData>
					</ChatDialogMessage>
					<ChatDialogMessage>
						<ChatIdImg src={require('../../assets/images/avatarka.png')} />
						<DialogData>
							<ChatNikename>Monie</ChatNikename>
							<ChatMessage>Message</ChatMessage>
						</DialogData>
					</ChatDialogMessage>
				</ChatDialogWindow>
				<ChatPushMessage>
					<ChatForm>
						<ChatInput placeholder='Enter message' type="text"/>
						<ChatButton>SEND</ChatButton>
					</ChatForm>
				</ChatPushMessage>
			</ChatDialog>
		</ChatWrapper>
	);
}

export default Chat;