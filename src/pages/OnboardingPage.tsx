import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import button_g from '../images/button_g.svg';
import useTapSound from '../components/UseSound';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const OnboardingPage: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const playTapSound = useTapSound(0.5);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(/ghana_decides_back.png)`, // Use the relative path directly
          backgroundSize: 'cover',
        }}
      >
        <div className="text-black text-5xl font-black mb-1">Ghana Decides</div>
        <div className="text-black text-9xl font-black mb-4">2024</div>
        <div className="text-center bg-white px-3 py-1 rounded mb-4">
          <p className="font-bold">Powered by SamaLTE</p>
        </div>



        
        <Link to="/login">
                <img className="h-20" onClick={()=>
                playTapSound()
                } src={button_g} alt="Button" />
            </Link>

            <div className="absolute top-10 right-10">
                <FontAwesomeIcon icon={faBell} className="text-2xl text-white" />
            </div>
            <div className="absolute bottom-10 left-10 p-2 rounded">
                <p className='font-bold text-4xl' style={{ textShadow: '3px 3px 0 white, -2px -2px 0 white, 3px -3px 0 white, -3px 3px 0 white' }}>
                    <span>{dateTime.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    <br />
                    <span>{dateTime.toLocaleTimeString()}</span>
                </p>
            </div>

      </div>
    </>
  );
};

export default OnboardingPage;
