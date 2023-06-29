import React, { useState } from 'react';
import AnimationDots from '../LoadingAnimations/AnimationDots';
import './FormDataCard.css';

export default function FormDataCard({ data, price, currency, hotels }) {
  const format = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let selectedHotel = hotels.find(hotel => hotel.id === data.hotelId);
  return (
    <div className="booknow__preview_content">
      <ul className="booknow__preview_list">
        <li className="booknow__preview_item">
          Guest name:
          <span> {data.name ? data.name : <AnimationDots />}</span>
        </li>
        <li className="booknow__preview_item">
          Hotel name:
          <span> {selectedHotel ? selectedHotel.name : <AnimationDots />}</span>
        </li>
        <li className="booknow__preview_item">
          Number of guests:{' '}
          <span> {data.guests ? data.guests : <AnimationDots />}</span>
        </li>
        <li className="booknow__preview_item">
          Check-in date:
          <span>
            {' '}
            {data.checkIn ? (
              new Date(data.checkIn).toLocaleDateString('en-US', format)
            ) : (
              <AnimationDots />
            )}
          </span>
        </li>
        <li className="booknow__preview_item">
          Number of nights:
          <span> {data.nights ? data.nights : <AnimationDots />}</span>
        </li>
        <li className="booknow__preview_item">
          Breakfast: <span> {data.breakfast ? 'Yes' : 'No'}</span>
        </li>
        <li className="booknow__preview_item">
          Total price:
          <span>
            {price && currency ? price + ' ' + currency : <AnimationDots />}
          </span>
        </li>
      </ul>
    </div>
  );
}
