import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { QUESTIONS } from '../../mocks/questions';
import Layout from '../../components/Layout';
import ColumnContainer from '../../components/ColumnContainer/ColumnContainer';
import QuestionContainer from '../../components/QuestionContainer';

export const COLUMNS = [
	{
		id: 0,

		questions: QUESTIONS.slice(11, 34),
	},
	{
		id: 6,
		name: 'DevOps',
		questions: QUESTIONS.slice(0, 6),
	},
	{
		id: 1,
		name: 'Project Management',
		questions: QUESTIONS.slice(11, 14),
	},
	{
		id: 2,
		name: 'User Experience',
		questions: QUESTIONS.slice(15, 21),
	},
	{
		id: 3,
		name: 'Engineering',
		questions: QUESTIONS.slice(22, 30),
	},
	{
		id: 4,
		name: 'Mobile',
		questions: QUESTIONS.slice(31, 35),
	},
	{
		id: 5,
		name: 'Project Management',
		questions: QUESTIONS.slice(36, 44),
	},
];

const ColumnEditor = () => {
	const [columnList, setColumnList] = useState(COLUMNS);
	const [parent, setParent] = useState(null);

	function handleDragEnd(e) {
		const { over } = e;
		setParent(over ? over.id : null);
	}

	return (
		<>
			<Layout>
				<DndContext onDragEnd={handleDragEnd}>
					<div className='flex flex-col p-2 space-x-2 md:flex-row'>
						{columnList.map((_c, i) => (
							<ColumnContainer key={i} column={_c}>
								{_c.questions.map((_q, i) => (
									<QuestionContainer
										key={i}
										question={_q}
										index={i}
										category={_c.name}
									/>
								))}
							</ColumnContainer>
						))}
					</div>
				</DndContext>
			</Layout>
		</>
	);
};
export default ColumnEditor;
