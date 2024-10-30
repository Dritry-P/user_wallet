'use client';
import React from 'react';
import './_DailyPoints.scss'

const DailyPoints = () => {
  const todayPoints = Math.floor(Math.random() * 100);

  return (
    <div className="DailyPoints">
      <h2 className="DailyPoints__title">Daily Points</h2>
      <p className="DailyPoints__points">{todayPoints}K</p>
    </div>
  );
};

export default DailyPoints;
