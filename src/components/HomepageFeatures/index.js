import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About me',
    Svg: require('@site/static/img/self.svg').default,
    description: (
      <>
      Hi guys, I’m Phuong Duong, a graduated student from National Economics University, 
      majority of Data Science in Economics and Business. I am now developing as a Data Analyst,
      which has so much work to do, yet kinda fun ^^
      </>
    ),
  },
  {
    title: 'Focus on my favorites',
    Svg: require('@site/static/img/fav.svg').default,
    description: (
      <>
        I really like cute little things !!!! I also fond of reading and the best book to loop is "Giấc Mơ Mỹ - Đường Đến Stanford" by Huyen Chip. 
        For video entertainment, Giang Oi and Diep Minh channels are two of the best. 
        I always dream about printing a step in Switzerland. What a peaceful paradise!
      </>
    ),
  },
  {
    title: 'My 2nd Brain',
    Svg: require('@site/static/img/workk.svg').default,
    description: (
      <>
        I'm a very woolgathering person. That's why my 2nd brain was born. 
        I will note down what I've learned here so that we can both conquer the knowledge together.
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
