import React from 'react';
import styles from './Stars.module.css';

interface StarsProps {
  rate: string;
  uniqueId: string;
}

const Stars: React.FC<StarsProps> = ({ rate, uniqueId }) => {
  return (
    <div className={`${styles.rate} ${rate}`}>
      <input type="radio" id={`${uniqueId}-star5`} name={uniqueId} value="5" />
      <label htmlFor={`${uniqueId}-star5`} title="text">
        5 stars
      </label>
      <input type="radio" id={`${uniqueId}-star4`} name={uniqueId} value="4" />
      <label htmlFor={`${uniqueId}-star4`} title="text">
        4 stars
      </label>
      <input type="radio" id={`${uniqueId}-star3`} name={uniqueId} value="3" />
      <label htmlFor={`${uniqueId}-star3`} title="text">
        3 stars
      </label>
      <input type="radio" id={`${uniqueId}-star2`} name={uniqueId} value="2" />
      <label htmlFor={`${uniqueId}-star2`} title="text">
        2 stars
      </label>
      <input type="radio" id={`${uniqueId}-star1`} name={uniqueId} value="1" />
      <label htmlFor={`${uniqueId}-star1`} title="text">
        1 star
      </label>
    </div>
  );
};

export default Stars;
