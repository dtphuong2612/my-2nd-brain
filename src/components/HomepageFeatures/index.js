import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About me',
    Svg: require('@site/static/img/self.svg').default,
    description: (
      <>
       My name is Phuong Duong. I majored in Data Science in Economics and Business at the National Economics University.
       I am currently a Machine Learning Engineer and I'm here to share what I've learned.
      </>
    ),
  },
  {
    title: 'Focus on my favorites',
    Svg: require('@site/static/img/fav.svg').default,
    description: (
      <>
        I really like cute little things !!!! 
        I also love read and the best book to re-read is "Giấc Mơ Mỹ - Đường Đến Stanford" by Huyen Chip.
        I usually watch youtube in my free time, my favorite channels are Giang Oi and Diep Minh. And my dream is to set foot in Switzerland, an extremely peaceful country.
      </>
    ),
  },
  {
    title: 'My 2rd Brain',
    Svg: require('@site/static/img/workk.svg').default,
    description: (
      <>
        I am a very forgetful person. 
        That's why my 2rd brain was born. 
        I will write what I learn here with two main purposes that I can easily review when needed and to share with everyone.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
