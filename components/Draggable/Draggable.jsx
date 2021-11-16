import { useDraggable } from '@dnd-kit/core';

const Draggable = (props) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;
	return (
		<div className='inline-flex p-8 border border-green-600 rounded'>
			<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
				{props.children}
			</button>
		</div>
	);
};

export default Draggable;
