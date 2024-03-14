import Slider from 'react-slick';
import skillsList from '../data-json/skills.json';
import '../styles/Technologies.css';

const Technologies = () => {
  //Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => <ul>{dots.slice(0, 4)}</ul>,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <article id="technologies">
      <Slider {...settings}>
        {/* Mapping over skills list to render skill icons */}
        {skillsList.map((skill) => (
          <div key={skill.icon} className="tech-icon">
            <img src={skill.icon} alt={skill.altText} />
          </div>
        ))}
      </Slider>
    </article>
  );
};
export default Technologies;
