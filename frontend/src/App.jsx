import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSendQuery, useSendRagQuery } from './hooks/sendQuey'
import SearchResults from './components/SearchResults'
import Message from './components/Message'

const Chat = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  padding-top: 50px;
`

const Input = styled.input`
  width: 100%;
`

const MsgContainer = styled.div`
  box-sizing: border-box;
  width: 70%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  margin: 0 5px 0 5px;
  height: 100%;
`

const Form = styled.form`
  display: flex;
  margin: 20px;
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
  const { sendQuery, loading, error, data } = useSendRagQuery();
  const [msgs, setMsgs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsgs([...msgs, { content: input, isFromUser: true }])
    await sendQuery(input);
  };

  useEffect(() => {
    if (data && data.answer) {
      setMsgs([...msgs, { content: data.answer , isFromUser: false} ]);
    }
    console.log(data);
    
  }, [data]);

  return (
    <StyledBody>
      <Chat>
        {error && (<Error>Error sending the request.</Error>)}
        <MsgContainer>
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
          <Button>Search</Button>
        </Form>
      </Chat>
      <SearchResults results={data?.results}/>
    </StyledBody>
  )
}

export default App
