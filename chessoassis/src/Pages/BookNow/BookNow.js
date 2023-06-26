import BookForm from '../../Components/Forms/BookForm';
import './BookNow.css';

export default function BookNow() {
  return (
    <section className="booknow__section">
      <div className="booknow__container _container">
        <div className="booknow__content">
          <div className="book__now_image _ibg">
            <img src="/Assets/BookNow/form_img.jpg" alt="booknow" />
          </div>
          <div className="booknow__form_box">
            <BookForm />
          </div>
        </div>
      </div>
    </section>
  );
}
