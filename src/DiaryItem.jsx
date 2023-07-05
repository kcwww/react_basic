const DiaryItem = ({id, author, content, created_date, emotion}) => {
	return (
		<div className="DiaryItem">
			<div className="info">
				<span>
					작성자 : {author} | 감정지수 : {emotion}
				</span>
				<br></br>
				<span className="date"> {new Date(created_date).toLocaleDateString()}</span>
				<div className="content">{content}</div>
			</div>
		</div>
	);
};

export default DiaryItem;
