import styled from "styled-components";

import colors from '../../colors'

export const ChatWrapper = styled.div`
	display: flex;
	flex: 1 0 auto;
	flex-direction: row;
`;

export const ChatNav = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25rem;
	border-right: 1px solid ${colors.foregroundVisited};
	background: ${colors.darkBackgroundNormal};
`;

export const ChatId = styled.li`
	display: flex;
	width: 24rem;
	border-radius: .3rem;
	background: ${colors.decorationFocus};
	:hover {
		transition: .3s;
		background: ${colors.foregroundVisited};
		cursor: pointer;
	}
`;

export const ChatIdImg = styled.img`
	padding: .5rem;
	height: 4rem;
	border-radius: 50%;
	
`;

export const ChatData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ChatNikename = styled.p`
	margin: .3rem;
`;

export const ChatMessage = styled.p`
	margin: .3rem;
`;

export const ChatDialog = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const ChatDialogWindow = styled.ul`
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	width: 50rem;
`;

export const ChatDialogMessage = styled.li`
	display: flex;
	align-items: center;
	height: 3rem;
	margin: .5rem;
	border-radius: .3rem;
`;

export const DialogData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: .3rem;
	border-radius: .3rem;
	background: ${colors.darkBackgroundNormal};
	justify-content: start;
`;

export const ChatPushMessage = styled.div`
	display: flex;
	flex-direction: row;
	height: 5rem;
	align-items: center;
	border-top: 1px solid var(--main-backgroundNormal);
	border-radius: .3rem;
`;

export const ChatForm = styled.form`
	display: flex;
	width: 50vw;
	margin: .5rem 0 .5rem 1rem;
	padding: 0 0 0 .5rem;
	box-sizing: border-box;
	border-radius: .3rem 0 0 .3rem;
	font-size: 1.5rem;
	outline: none;
`;

export const ChatInput = styled.input`
	display: flex;
	height: 3rem;
	width: 50vw;
	margin: .5rem 0 .5rem 1rem;
	padding: 0 0 0 .5rem;
	box-sizing: border-box;
	border-radius: .3rem 0 0 .3rem;
	font-size: 1.5rem;
	outline: none;
	background: ${colors.darkBackgroundNormal};
	color: ${colors.darkForegroundNormal};
	border: 1px solid ${colors.darkBackgroundAlternate};`;

export const ChatButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	width: 7rem;
	margin: .5rem 1rem .5rem 0;
	box-sizing: border-box;
	border-radius: 0 .3rem .3rem 0;
	cursor: pointer;
	background: ${colors.darkBackgroundNormal};
	color: ${colors.decorationFocus};
	border: none;
`;