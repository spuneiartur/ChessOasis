import ButtonForWhite from '../Buttons/ButtonForWhite';
import './BookForm.css';

export default function BookForm(props) {
  return (
    <form className="book__form">
      <h2 className="book__form_title">Book Now</h2>
      <label htmlFor="f-name">Full Name</label>
      <input type="text" id="f-name" name="fname" required />
      <label htmlFor="select-hotels">Select preferred hotel:</label>
      <select name="hotels" id="select-hotels" required defaultValue={''}>
        <option value="">--Please choose an option--</option>
        <option value="chess">Chess Hotel</option>
        <option value="santorini">Santorini Hotel</option>
      </select>
      <label htmlFor="check-in">Check-in:</label>
      <input type="date" id="input-date" name="date" required />
      <label htmlFor="select-nights">Number of nights:</label>
      <select name="nights" id="select-nights" required defaultValue={'7'}>
        <option value="3">3</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value="14">14</option>
        <option value="30">30</option>
      </select>
      <label htmlFor="input-guests">Number of guests</label>
      <input
        type="number"
        id="input-guests"
        required
        defaultValue={2}
        min="1"
        max="3"
      />
      <div className="checkbox__container">
        <label htmlFor="breakfast-checkbox">
          <input type="checkbox" id="breakfast-checkbox" />
          <span className="checkbox__custom"></span>Breakfast
        </label>
      </div>
      <ButtonForWhite
        text={'Submit'}
        style={{ margin: '50px 0 0 0', width: '100%' }}
      />
    </form>
  );
}
