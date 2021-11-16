import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { useDroppable } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { QUESTIONS } from '../../mocks/questions';
import Layout from '../../components/Layout';

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
		name: 'C',
		questions: QUESTIONS.slice(15, 25),
	},
	{
		id: 2,
		name: 'C',
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
					<div className='flex flex-row justify-between'>
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

const ColumnContainer = ({ column }) => {
	const [questionList, setQuestionList] = useState(column.questions);

	const { isOver, setNodeRef } = useDroppable({
		id: column.id,
	});

	function addQuestion(obj) {
		setQuestionList((arr) => [...arr, obj]);
	}

	console.log(questionList);
	const style = {
		color: isOver ? 'green' : undefined,
	};
	return (
		<div className='mx-2' ref={setNodeRef}>
			<div className='flex flex-row justify-between pt-2 mb-2'>
				<div>{column.name}</div>
				<div>+</div>
			</div>
			<div className='flex flex-col space-y-2'>
				{questionList.map((_q, i) => (
					<QuestionContainer key={i} question={_q} />
				))}
			</div>
			<button
				onClick={() =>
					addQuestion({ id: questionList.length + 1, notes: 'Nothing' })
				}
				className='py-1.5 text-center'>
				+ Add a question
			</button>
		</div>
	);
};

const QuestionContainer = ({ question }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: question.id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;
	return (
		<div
			style={style}
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className='p-2 text-sm bg-white border-l-4 shadow'>
			<div dangerouslySetInnerHTML={{ __html: question.notes }} />
		</div>
	);
};
