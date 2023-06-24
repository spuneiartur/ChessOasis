import { useState } from 'react';
import './Controller.css';
import Welcome from '../Pages/Welcome/Welcome';
import Hotels from '../Pages/Hotels/Hotels';
import ModalSlider from '../Components/ModalWindows/ModalSlider';

function Controller() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const openSlider = () => {
    setIsSliderOpen(true);
  };

  const closeSlider = e => {
    if (e.currentTarget === e.target) {
      setIsSliderOpen(false);
    }
  };

  return (
    <div className="App wrapper min-h-screen block">
      {isSliderOpen && <ModalSlider closeSlider={closeSlider} />}
      <Welcome />
      <Hotels openSlider={openSlider} />
    </div>
  );
}

export default Controller;
