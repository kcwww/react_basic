import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id : 1,
    author : '김철수',
    content : '오늘은 날씨가 좋네요',
    emotion : 4,
    created_date : new Date().getTime()
  },
  {
    id : 2,
    author : '김하은',
    content : '오늘은 날씨가 좋아요',
    emotion : 5,
    created_date : new Date().getTime()
  },
  {
    id : 3,
    author : '김산',
    content : '오늘은 날씨가 안좋네요',
    emotion : 2,
    created_date : new Date().getTime()
  },
  {
    id : 4,
    author : '김민아',
    content : '오늘은 날씨가 별로요',
    emotion : 3,
    created_date : new Date().getTime()
  }
]

const App = () => {
  return (
    <div className="App">

      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
