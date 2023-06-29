import React, { useState } from 'react';
import './FixedPopup.css';

export default function FixedPopup({
  data,
  previewIsActive,
  setPreviewIsActive,
  children,
}) {
  const closePreviewCardOnClick = e => {
    e.preventDefault();
    setPreviewIsActive(false);
  };
  return (
    <div
      className={`booknow__preview_wrapper ${previewIsActive ? '' : 'close'}`}
    >
      <div className="close__button_wrapper">
        <button className="close__button" onClick={closePreviewCardOnClick}>
          <span className="close__button_line"></span>
          <span className="close__button_line"></span>
        </button>
      </div>
      {children}
    </div>
  );
}
