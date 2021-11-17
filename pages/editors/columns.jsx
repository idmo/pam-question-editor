import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { QUESTIONS } from '../../mocks/questions';
import Layout from '../../components/Layout';
import ColumnContainer from '../../components/ColumnContainer/ColumnContainer';

const COLUMNS = [
	{
		id: 0,
		name: 'DevOps',
		questions: QUESTIONS.slice(0, 10),
	},
	{
		id: 1,
		name: 'Project Management',
		questions: QUESTIONS.slice(11, 14),
	},
	{
		id: 2,
		name: 'User Experience',
		questions: QUESTIONS.slice(15, 25),
	},
	{
		id: 2,
		name: 'Engineering',
		questions: QUESTIONS.slice(15, 25),
	},
	{
		id: 2,
		name: 'Mobile',
		questions: QUESTIONS.slice(15, 25),
	},
	{
		id: 2,
		name: 'Project Management',
		questions: QUESTIONS.slice(15, 25),
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
			<DndContext onDragEnd={handleDragEnd}>
				<Layout>
					<div className='flex flex-row p-2 space-x-2'>
						{columnList.map((_c, i) => (
							<ColumnContainer key={i} column={_c} />
						))}
					</div>
				</Layout>
			</DndContext>
		</>
	);
};
export default ColumnEditor;
