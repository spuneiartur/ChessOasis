import './Deals.css';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import ButtonForImages from '../../Components/Buttons/ButtonForImages';

export default function Deals() {
  return (
    <section className="deals__section section" id="deals-section">
      <SectionHeader
        title={'Exclusive Deals and Irresistible Discounts'}
        text={'Unlock Exceptional Savings at ChessOasis!'}
      />
      <div className="deals__bg _ibg">
        <img src="/Assets/Deals/deals_bg.jpg" alt="deals-bg" />
        <div className="deals__container _container">
          <div className="deals__content">
            <div className="deals__title">Discount 10-30% Off</div>
            <div className="deals__text">
              Discover the enchantment of ChessOasis with our limited-time
              seasonal discount. Immerse yourself in luxury, while enjoying
              incredible savings on your next unforgettable getaway.
            </div>
            <ButtonForImages text={'book now'} scrollTo={'#booknow-section'} />
          </div>
        </div>
      </div>
    </section>
  );
}
