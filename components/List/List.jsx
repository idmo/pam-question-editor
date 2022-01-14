const List = ({ list }) => {
	return (
		<div>
			{list.map((_l, i) => (
				<div key={i}>{_l}</div>
			))}
		</div>
	);
};

export default List;
