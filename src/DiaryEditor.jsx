import { useRef,useState } from "react";
import "./DiaryEditor.css";

const DiaryEditor = () => {

	const authorInput = useRef(); // html dom 요소를 접근할수 있음
	const contentInput = useRef();

	const [state, setState] = useState({
		author: "",
		content: "",
		emotion: 1,
	});

	const handleChangeState = (e) => {
		console.log(e.target.name);
		console.log(e.target.value);

		setState({
			...state,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = () => {
		// 입력 유효검사
		if (state.author.length < 1) {
			// focus
			authorInput.current.focus();
			return ;
		}
		if (state.content.length < 5) {
			// focus
			contentInput.current.focus();
			return ;
		}
		console.log(state);
		alert("저장되었습니다.");
	}

	// state를 이용하여 value 값이 바뀜
	// 아래 state 를 객채로 묶어줌
	// const [author, setAuthor] = useState("");
	// const [content, setContent] = useState("");
	return (
	<div className="DiaryEditor">
		<h2>오늘의 일기</h2>
		<div>
			<input
			ref={authorInput}
			name="author"
			value={state.author} // onChange 이벤트가 발생하면 value 값이 바뀜
			onChange={handleChangeState}
			// onChange={(e) => {
			// 	setState({
			// 		// 변경할 상태를 빼고 나머지를 펼쳐서 편하게 구현 순서 중요!
			// 		...state,
			// 		author: e.target.value,
			// 	})
			// }}
			/>
		</div>
		<div>
			<textarea
			ref={contentInput}
			name="content"
			value={state.content}
			onChange={handleChangeState}
			// onChange={(e) => {
			// 	setState({
			// 		...state,
			// 		content: e.target.value,
			// 	})
			// }}
			/>
		</div>
		<div>
			<select
			name="emotion"
			value={state.emotion}
			onChange={handleChangeState}
			>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
			</select>
		</div>
		<div>
			<button onClick={handleSubmit}>저장하기</button>
		</div>
	</div>
	);
};
export default DiaryEditor;
