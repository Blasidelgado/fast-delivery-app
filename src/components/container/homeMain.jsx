import React from 'react';
import ImageSlider from '../pure/imageSlider';

const HomeMain = () => {
	const slides = [
    { url: '/images/image-1.jpg', title: 'beach' },
    { url: '/images/image-2.jpg', title: 'boat' },
    { url: '/images/image-3.jpg', title: 'forest' },
    { url: '/images/image-4.jpg', title: 'city' },
    { url: '/images/image-5.jpg', title: 'italy' },
  ];
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  };
	return (
		<section>
			<div className="main-titles">
				<h1 className="title primary">Tu delivery de agua</h1>
				<h1 className="title secondary">Siempre</h1>
			</div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
		</section>
);
};

export default HomeMain;
