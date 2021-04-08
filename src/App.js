import { Route } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

//글쓰기, 글삭제, 글목록
function App() {
  return (
    <div>
      <Navigation />
      <Route path="/" exact={true} component={ListPage} />
      <Route path="/write" eact={true} component={WritePage} />
    </div>
  );
}

export default App;
