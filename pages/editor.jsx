import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';

const questions = [
	{
		body: 'What is their stack?',
	},
	{
		body: 'Ex amet commodo ex ut est aliqua amet dolor voluptate eiusmod exercitation laboris minim.',
	},
	{
		body: 'Sit cupidatat ipsum dolore incididunt exercitation magna ea laborum ad eu fugiat anim ex.',
	},
	{
		body: `<p>Duis adipisicing quis et duis do magna ea excepteur aliquip minim nostrud. Reprehenderit dolor anim incididunt magna in reprehenderit in magna Lorem do tempor commodo non magna. Pariatur fugiat velit veniam duis magna ipsum labore et ea nisi laborum officia. Officia aute elit ullamco quis laborum ad fugiat.</p></p>Anim laborum duis velit minim anim aliquip mollit sunt culpa cillum. Nisi non officia proident irure deserunt ea ut aliqua officia sunt quis sunt dolor. Labore aute consequat sunt id est nisi dolor cupidatat fugiat aliqua in enim cupidatat qui. Tempor aliqua officia proident labore proident officia commodo dolor velit ex nulla ea eiusmod.</p>`,
	},
	{
		body: `<p>Eu voluptate voluptate enim in magna aliqua sunt Lorem.</p><p>Commodo cupidatat enim irure reprehenderit est veniam enim aliqua.</p>`,
	},
	{
		body: `<p>Elit veniam commodo laboris laborum minim sunt proident mollit eu commodo.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et quibusdam asperiores minus ullam adipisci distinctio tempore natus, eos laudantium maiores debitis exercitationem nisi sequi magni soluta quisquam cum atque?</p>`,
	},
];

const Editor = () => {
	let textInput = useRef();
	const [questionList, setQuestionList] = useState(questions);

	const updateList = () => {
		console.log(textInput.current.value);
		let foo = { body: textInput.current.value };
		setQuestionList((currentList) => [...currentList, foo]);
		textInput.current.value = '';
	};

	return (
		<Layout>
			<Container>
				<Card>
					<input
						type='text'
						ref={textInput}
						name='question'
						onKeyPress={(event) => {
							if (event.key === 'Enter') {
								updateList();
							}
						}}
					/>
				</Card>
				<ol>
					{questionList.map((_, i) => (
						<Card key={i}>
							<li>
								{i}

								<div dangerouslySetInnerHTML={{ __html: _.body }} />
							</li>
						</Card>
					))}
				</ol>
			</Container>
		</Layout>
	);
};

export default Editor;

const Card = ({ children }) => {
	return (
		<div className='p-3 my-2 border-b-2 border-gray-300 border-dashed'>
			{children}
		</div>
	);
};
