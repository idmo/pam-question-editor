import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { DndContext } from '@dnd-kit/core';
import Draggable from '../../components/Draggable/Draggable';
import Droppable from '../../components/Droppable/Droppable';
import { QUESTIONS } from '../../mocks/questions';

const Sortable = () => {
	const [parent, setParent] = useState(null);
	const containers = QUESTIONS;
	function handleDragEnd(event) {
		console.log(event);
		const { over } = event;
		setParent(over ? over.id : null);
	}
	return (
		<>
			<Layout>
				<DndContext onDragEnd={handleDragEnd}>
					{parent === null ? (
						<Draggable id='draggable'>Drag Me</Draggable>
					) : null}

					{containers.map((container) => (
						<Droppable key={container.id} id={container.id}>
							{parent === container.id ? (
								<Draggable id='draggable'>Drag Me</Draggable>
							) : (
								'Drop Here'
							)}
						</Droppable>
					))}
				</DndContext>
			</Layout>
		</>
	);
};
export default Sortable;
