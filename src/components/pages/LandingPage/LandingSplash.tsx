import React from 'react';
import { getInCurTimeZone, makeMoment } from '../../../utils';

interface SplashProps {
  isLogin: boolean;
}

const makeFormattedTime = (h: number, m: number): string => {
  return getInCurTimeZone(makeMoment(h, m)).format('h:mm A');
};

const timeList = [
  {
    title: 'Every Morning (7 days a week!)',
    text: 'Sign in to get the new story-writing prompt and start scribbling',
  },
  {
    title: makeFormattedTime(12, 0),
    text: 'The deadline to upload your single-page story',
  },
  {
    title: makeFormattedTime(12, 30),
    text: 'Finalists are announced and popular voting begins',
  },
  {
    title: makeFormattedTime(15, 0),
    text: 'The winner of the popular vote gets crowned!',
  },
];

const Splash = ({ isLogin }: SplashProps): React.ReactElement => {
  return (
    <div className="splash">
      <h1>Story Squad</h1>
      {isLogin ? <LoginSplash /> : <SignupSplash />}
    </div>
  );
};

const LoginSplash = () => {
  return (
    <h2>
      Sign in for the <span className="b">Free Daily Story Contest!</span>
    </h2>
  );
};

const SignupSplash = () => {
  return (
    <>
      <h2>
        Sign up for our <span className="b">Free Daily Story Contest!</span>
      </h2>
      <h3>How It Works</h3>
      <ul>
        {timeList.map((li, i) => (
          <li key={i}>
            <span className="b">{li.title}:</span> {li.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Splash;
