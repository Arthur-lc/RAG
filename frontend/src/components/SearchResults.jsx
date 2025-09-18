import Markdown from "react-markdown";
import styled from "styled-components";

const Results = styled.div`
	overflow-y: scroll;
	margin-bottom: 20px;
	background-color: #2c2f33;
	width: 40vw;
	height: 100vh;
	padding: 20px;
	box-sizing: border-box;
	box-shadow: -5px 0px 10px #1b1b1b7f;
	//box-shadow: -5px 0px 50px #1b1b1b;
`;

const Result = styled.div`
	margin: 10px;
	text-justify: newspaper;
	padding: 20px;
	text-align: justify;
	border: solid 2px;
  	border-radius: 1em;
`;

const Info = styled.div`
	font-weight: 100;
	font-size: small;
`

function SearchResults({ results }) {
	return (
		<Results>
			{!results ? (
				<div>Waiting for search...</div>
			) : results.length === 0 ? (
				<div>Searching...</div>
			) : (
				results.map((result, index) => (
					<Result key={index}>
						<Markdown>{result.content}</Markdown>
						<Info>document: {result.source_file}, section: {result.section}</Info>
						<Info>distance: {result.similarity}</Info>
					</Result>
				))
			)}
		</Results>
	)
}

export default SearchResults