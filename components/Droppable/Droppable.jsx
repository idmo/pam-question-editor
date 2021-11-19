import { useDroppable } from '@dnd-kit/core';
import classNames from '../../utils/classnames';

const Droppable = (props) => {
	const { isOver, setNodeRef } = useDroppable({
		id: props.id,
	});
	const style = {
		color: isOver ? 'green' : undefined,
	};

	return (
		<div
			className={classNames(
				isOver ? 'green' : undefined,
				'inline-flex p-8 border border-black rounded'
			)}
			ref={setNodeRef}>
			{props.children}
		</div>
	);
};
export default Droppable;
