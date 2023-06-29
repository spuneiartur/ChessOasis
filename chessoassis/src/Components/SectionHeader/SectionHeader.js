import './SectionHeader.css';

export default function SectionHeader(props) {
  return (
    <div className="section-header _container">
      <h2 className="section-header__title">{props.title}</h2>
      <p className="section-header__text">{props.text}</p>
    </div>
  );
}
