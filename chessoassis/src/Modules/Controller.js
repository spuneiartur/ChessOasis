import './Controller.css';
import Welcome from '../Pages/Welcome/Welcome';
import Hotels from '../Pages/Hotels/Hotels';
import HotelSlider from '../Components/ModalWindows/HotelSlider';

function Controller() {
  return (
    <div className="App wrapper min-h-screen block">
      <HotelSlider />
      <Welcome />
      <Hotels />
    </div>
  );
}

export default Controller;
