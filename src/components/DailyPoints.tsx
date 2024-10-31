'use client';
import React, { useEffect, useState } from 'react';
import './_DailyPoints.scss';

const calculateDailyPoints = (date: Date) => {
  const SEASONS_START = {
    winter: { month: 12, day: 1 },
    spring: { month: 3, day: 1 },
    summer: { month: 6, day: 1 },
    fall: { month: 9, day: 1 },
  };

  let seasonStartDay: Date;
  let dayInSeason: number;

  if (date >= new Date(date.getFullYear(), SEASONS_START.winter.month - 1, SEASONS_START.winter.day)) {
    seasonStartDay = new Date(date.getFullYear(), SEASONS_START.winter.month - 1, SEASONS_START.winter.day);
  } else if (date >= new Date(date.getFullYear(), SEASONS_START.fall.month - 1, SEASONS_START.fall.day)) {
    seasonStartDay = new Date(date.getFullYear(), SEASONS_START.fall.month - 1, SEASONS_START.fall.day);
  } else if (date >= new Date(date.getFullYear(), SEASONS_START.summer.month - 1, SEASONS_START.summer.day)) {
    seasonStartDay = new Date(date.getFullYear(), SEASONS_START.summer.month - 1, SEASONS_START.summer.day);
  } else {
    seasonStartDay = new Date(date.getFullYear(), SEASONS_START.spring.month - 1, SEASONS_START.spring.day);
  }

  dayInSeason = Math.floor((date.getTime() - seasonStartDay.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  let points: number;
  if (dayInSeason === 1) {
    points = 2;
  } else if (dayInSeason === 2) {
    points = 3;
  } else {
    const previousDayPoints = 3; 
    const twoDaysAgoPoints = 2;  
    points = Math.ceil(twoDaysAgoPoints * 1.0 + previousDayPoints * 0.6);
  }

  return points >= 1000 ? `${Math.floor(points / 1000)}K` : points.toString();
};

const DailyPoints: React.FC = () => {
  const [todayPoints, setTodayPoints] = useState('');

  useEffect(() => {
    const today = new Date();
    const points = calculateDailyPoints(today);
    setTodayPoints(points);
  }, []);

  return (
    <div className="DailyPoints">
      <h2 className="DailyPoints__title">Daily Points</h2>
      <p className="DailyPoints__points">{todayPoints}</p>
    </div>
  );
};

export default DailyPoints;
