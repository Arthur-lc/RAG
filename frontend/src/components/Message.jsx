import styled from "styled-components"

const Msg = styled.div`
	display: flex;
	align-items: center;
	text-align: right;

	background-color: #88304E;
	min-height: 2em;
	padding: 10px 20px 10px 20px;
	margin-top: 10px;
	margin-bottom: 10px;

	border-radius: 15px 15px 15px 0;

	width: fit-content;
	min-width: 10em;

	box-shadow: -5px 5px 10px #1d1d1d;
`;

const UserMsg = styled(Msg)`
	align-self: flex-start;
	margin-right: 50px;
`;

const AiMsg = styled(Msg)`
	border-radius: 15px 15px 0 15px;
	align-self: flex-end;
	margin-left: 50px;
	background-color: #522546;
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
			<Content>{msg.content}</Content>
		</AiMsg>
	)
}

export default Message