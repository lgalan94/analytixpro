
export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

// Chart Data Types
export interface MonthlyData {
  month: string;
  value: number;
}

export interface TrafficSourceData {
  source: string;
  users: number;
}

export interface UserActivityData {
  day: string;
  activity: number;
}
