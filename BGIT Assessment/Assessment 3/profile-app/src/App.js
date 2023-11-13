
import './App.css';
import UserProfileCard from './UserProfileCard';

function App() {
  return (
    <div className="App">
      <h1>User Profile Card</h1>
      <UserProfileCard
      name="Sarah Smith"
      age="26"
      location="London"
       />
       
    </div>
  );
}
export default App;
