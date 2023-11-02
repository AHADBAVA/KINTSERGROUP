import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const MilestoneSection = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-white mb-6 font-semibold text-center">Our Milestones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <MilestoneCard title="Years Of Service" end={3} textColor="text-yellow-300" animationDirection="top-right" />
          <MilestoneCard title="Employees" end={50} textColor="text-blue-500" animationDirection="top-left" />
          <MilestoneCard title="Countries We Are Present In" end={2} textColor="text-gray-200" animationDirection="bottom-right" />
          <MilestoneCard title="Trusting Clients" end={100} textColor="text-green-300" animationDirection="bottom-left" />
        </div>
      </div>
    </section>
  );
};

const MilestoneCard = ({ title, end, textColor, animationDirection }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className={`p-6 rounded-lg shadow-md text-center bg-black animate-${animationDirection}`}>
      <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
        <span
          className={`text-4xl font-bold ${textColor}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <CountUp end={isVisible ? end : 0} duration={3} separator="," useEasing={true} useGrouping={true}>
            {({ countUpRef }) => (
              <span>
                <span ref={countUpRef} />
                <span>+</span>
              </span>
            )}
          </CountUp>
          <h3 className={`text-2xl font-semibold mb-2 ${textColor}`}>{title}</h3>
        </span>
      </VisibilitySensor>
    </div>
  );
};

export default MilestoneSection;
