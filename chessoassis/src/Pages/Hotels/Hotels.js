import HotelCard from '../../Components/Cards/HotelCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import './Hotels.css';

export default function Hotels({ openSlider, hotels }) {
  return (
    <section className="hotels__section section" id="hotels-section">
      <div className="hotels__container _container">
        <SectionHeader
          title={'Our hotels'}
          text={`The most searched hotels in ${new Date().toLocaleString(
            'default',
            { month: 'long' }
          )}`}
        />
        <div className="hotels__grid">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} openSlider={openSlider} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}
