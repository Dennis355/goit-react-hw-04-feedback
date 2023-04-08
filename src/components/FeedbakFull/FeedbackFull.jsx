import { useState } from 'react';

import PropTypes from 'prop-types';

import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Buttons } from 'components/Buttons/Buttons';

import css from 'components/FeedbakFull/FeedbackFull.module.css';

function FeedbackFull() {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const handleClick = e => {
    switch (e.target.name) {
      case 'good':
        setCounterGood(counterGood + 1);
        break;
      case 'neutral':
        setCounterNeutral(counterNeutral + 1);
        break;
      case 'bad':
        setCounterBad(counterBad + 1);
        break;
      default:
        return;
    }
  };

  const totalCountFeedback = () => counterGood + counterNeutral + counterBad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((counterGood * 100) / totalCountFeedback());

  return (
    <div className={css.div_feedback_full}>
      <div className={css.feedback_title}>
        <h2 className={css.feedback_h2}>
          Please leave feedback from visiting our cafe
        </h2>
      </div>
      <Buttons fullBtn={['good', 'neutral', 'bad']} onClick={handleClick} />
      <div className={css.feedback_title}>
        <h2 className={css.feedback_h2}> Statictics</h2>
      </div>
      {totalCountFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistics
          good={counterGood}
          neutral={counterNeutral}
          bad={counterBad}
          total={totalCountFeedback()}
          positiv={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
}
export { FeedbackFull };

FeedbackFull.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
