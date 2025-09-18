import styled from "styled-components"
import Markdown from "react-markdown";

const Msg = styled.div`
	display: flex;
	align-items: center;
	text-align: right;
	
	padding: 10px 20px 10px 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	
	
	width: fit-content;
	min-width: 10em;
	
	box-shadow: -5px 5px 10px #1b1b1b7f;
`;

const UserMsg = styled(Msg)`
	max-width: 60%;
	background-color:#7289da;
	align-self: flex-end;
	border-radius: 15px 15px 0 15px;
	margin-left: 50px;
`;

const AiMsg = styled(Msg)`
	background-color: #33363b;
	margin-right: 50px;
	align-self: flex-start;
	border-radius: 15px 15px 15px 0;
`;

const Content = styled.p`
	color: white;
	text-align: start;
`;


function Message({ msg }) {
	if (msg.isFromUser) {
		return (
			<UserMsg>
				<Content>{msg.content}</Content>
			</UserMsg>
		)
	}

	return (
		<AiMsg>
			<Content>
				<Markdown>
					{msg.content}
				</Markdown>
			</Content>
		</AiMsg>
	)
}

export default Message