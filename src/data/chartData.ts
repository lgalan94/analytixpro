
import type { MonthlyData, TrafficSourceData, UserActivityData } from '../types';

export const mrrData: MonthlyData[] = [
  { month: 'Jan', value: 2400 },
  { month: 'Feb', value: 2210 },
  { month: 'Mar', value: 2290 },
  { month: 'Apr', value: 2000 },
  { month: 'May', value: 2181 },
  { month: 'Jun', value: 2500 },
  { month: 'Jul', value: 2100 },
  { month: 'Aug', value: 2800 },
  { month: 'Sep', value: 3200 },
  { month: 'Oct', value: 3500 },
  { month: 'Nov', value: 3800 },
  { month: 'Dec', value: 4200 },
];

export const newUsersData: MonthlyData[] = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 150 },
  { month: 'Mar', value: 170 },
  { month: 'Apr', value: 210 },
  { month: 'May', value: 250 },
  { month: 'Jun', value: 230 },
  { month: 'Jul', value: 280 },
  { month: 'Aug', value: 310 },
  { month: 'Sep', value: 300 },
  { month: 'Oct', value: 340 },
  { month: 'Nov', value: 390 },
  { month: 'Dec', value: 410 },
];

export const trafficSourceData: TrafficSourceData[] = [
  { source: 'Organic', users: 4500 },
  { source: 'Referral', users: 3000 },
  { source: 'Direct', users: 1500 },
  { source: 'Social', users: 1000 },
];

export const userActivityData: UserActivityData[] = [
    { day: 'Mon', activity: 200 },
    { day: 'Tue', activity: 300 },
    { day: 'Wed', activity: 250 },
    { day: 'Thu', activity: 400 },
    { day: 'Fri', activity: 350 },
    { day: 'Sat', activity: 500 },
    { day: 'Sun', activity: 450 },
];
