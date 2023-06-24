import './Controller.css';
import Welcome from '../Pages/Welcome/Welcome';
import Hotels from '../Pages/Hotels/Hotels';

function Controller() {
  return (
    <div className="App wrapper min-h-screen block">
      <Welcome />
      <Hotels />
    </div>
  );
}

export default Controller;
