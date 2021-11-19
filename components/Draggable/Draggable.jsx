import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import classNames from '../../utils/classnames';

const Draggable = (props) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	});
	const style = {
		transform: CSS.Translate.toString(transform),
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className='inline-flex p-8 border border-green-600 rounded'>
			<button {...listeners} {...attributes} className='border border-black'>
				{props.children}
			</button>
		</div>
	);
};

export default Draggable;
