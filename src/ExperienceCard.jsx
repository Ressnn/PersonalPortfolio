// ExperienceCard.jsx

import React from 'react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <img src={experience.logo} alt={experience.company} className="company-logo" />
      <h3>{experience.company}</h3>
      <p>{experience.responsibilities}</p>
    </div>
  );
}

export default ExperienceCard;
