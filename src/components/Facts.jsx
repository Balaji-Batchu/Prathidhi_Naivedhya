import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const points = [
  'According to the United Nations, more than 690 million people worldwide are hungry or malnourished, and this number is expected to increase due to the impact of COVID-19.',
  'Hunger is a widespread problem that affects both developing and developed countries. In fact, hunger and malnutrition are the leading risk factors for global morbidity and mortality.',
  'Children are the most vulnerable to hunger and malnutrition, with 144 million children under the age of five suffering from stunting due to malnutrition.',
  'Hunger is not just about lack of food, but also about lack of access to nutritious food. In many parts of the world, people suffer from hunger even though there is enough food to go around. This is because poverty and inequality prevent people from accessing the food they need.',
  'Hunger has long-term impacts on health, education, and economic development. Malnutrition can lead to stunted growth, poor cognitive development, and increased risk of disease. This can in turn impact a person\'s ability to learn and work, perpetuating the cycle of poverty and hunger.',
  'Despite the scale of the problem, hunger is a solvable issue. With the right investments in agriculture, social protection programs, and nutrition interventions, we can end hunger and malnutrition.',
  'Donating food or funds to a food bank or other hunger relief organization is a simple and effective way to help those in need. Your support can make a big difference in the lives of people who are struggling with hunger.'
];

const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '10px',
    cssEase: 'linear'
  };

const HungerFacts = () => {
  return (
    <div>
        <h1 className='text-orange-500 text-4xl font-bold px-24 hover:underline underline-offset-2'>Hunger Facts. . .</h1>
        <div className='flex items-center justify-center'>
            <div className='w-3/6 p-4 bg-slate-100 rounded-lg hover:drop-shadow-2xl shadow-lg my-4'>
                <Slider {...settings}>
                    {points.map((point, index) => (
                    <div key={index} >
                        <p className='p-8 text-lg self-center leading-loose'>{point}</p>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  );
};

export default HungerFacts;
