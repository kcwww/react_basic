import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
	console.log(diaryList);
	return (
		<div className="DiaryList">
			<h2>일기 목록</h2>
			<h4>{diaryList.length} 개의 일기가 있습니다.</h4>
			<div>
				{diaryList.map((it) => ( // 중괄호와 괄호의 차이는 코드와 표현식의 차이
				// 고유한 key값을 주어 에러 방지 2번째 파라미터 index 사용하여도 됨
				<DiaryItem key={it.id} {...it}/>

				))}
			</div>
		</div>
	);
};

// 디폴트값을 주어 undefined 방지 이로인해 diary가 없어도 오류가 나지 않음
DiaryList.defaultProps = {
	diaryList: [],
};

export default DiaryList;
