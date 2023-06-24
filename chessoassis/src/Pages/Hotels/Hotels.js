import HotelCard from '../../Components/Cards/HotelCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import './Hotels.css';

export default function Hotels() {
  return (
    <section className="hotels__wrapper">
      <div className="hotels__container _container">
        <SectionHeader
          title={'Our hotels'}
          text={'The most searched hotels in March'}
        />
        <div className="hotels__grid">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </section>
  );
}
