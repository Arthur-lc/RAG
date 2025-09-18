import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useSendQuery, useSendRagQuery } from './hooks/sendQuey'
import SearchResults from './components/SearchResults'
import Message from './components/Message'
import { CiSearch } from "react-icons/ci";

const Chat = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`

const MsgContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  padding-right: 5rem;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Form = styled.form`
  display: flex;
  margin: 20px;
  width: 100%;
  justify-content: center;
`

const Input = styled.input`
  max-width: 40em;
  width: 100%;
  margin: 0;
  padding: 1em;
  border: 0;
  border-radius: 10px 0 0 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`

const Button = styled.button`
  height: 100%;
  background-color: #7289da;
  border-radius: 0 10px 10px 0;
`

const StyledBody = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
`

const Error = styled.div`
  color: #fd5d5d;
  font-weight: bolder;
`

function App() {
  const [input, setInput] = useState('');
  const msgContainerRef = useRef(null);
  const { sendQuery, loading, error, data } = useSendRagQuery();
  const [msgs, setMsgs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsgs([...msgs, { content: input, isFromUser: true }])
    await sendQuery(input);
  };

  useEffect(() => {
    if (data && data.answer) {
      setMsgs([...msgs, { content: data.answer , isFromUser: false } ]);
    }
    console.log(data);
    
  }, [data]);

  useEffect(() => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  }, [msgs]);

  return (
    <StyledBody>
      <Chat>
        {error && (<Error>Error sending the request.</Error>)}
        <MsgContainer ref={msgContainerRef}>
          {msgs.map((msg, index) => (
            <Message key={index} msg={msg} />
          ))}

        </MsgContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='faça sua busca'
          />
          <Button><CiSearch /></Button>
        </Form>
      </Chat>
      <SearchResults results={data?.results}/>
    </StyledBody>
  )
}

export default App
