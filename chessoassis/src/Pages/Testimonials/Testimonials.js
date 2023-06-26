import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import TestimonialsSlider from '../../Components/Sliders/TestimonialsSlider';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials__section">
      <SectionHeader
        title={'Guest Testimonials'}
        text={'Hear What Our Visitors Have to Say about ChessOasis!'}
      />
      <div className="testimonials__bg _ibg">
        <img
          src="/Assets/Testimonials/testimonials_bg.jpg"
          alt="testimonials-bg"
        />
        <div className="testimonials__container _container">
          <TestimonialsSlider
            customers={[
              {
                image: '/Assets/Testimonials/cust_1.jpg',
                fname: 'NET REYNOLDS',
                description:
                  "Having collaborated closely with ChessOassis, I can confidently vouch for their outstanding services. Under the leadership of Rick and Liza Looser, their team's dedication and expertise shine through. ChessOassis excels in delivering remarkable marketing communications and public affairs capabilities. Their professionalism, commitment, and ability to generate results are unparalleled. As a long-time partner, I wholeheartedly endorse ChessOassis as a trusted and reliable firm for anyone seeking exceptional marketing and public affairs solutions.",
                noOfStars: 5,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
