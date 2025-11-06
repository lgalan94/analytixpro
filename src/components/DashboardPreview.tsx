import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Bar,
  Area,
} from 'recharts';
import {
  mrrData,
  newUsersData,
  trafficSourceData,
  userActivityData,
} from '../data/chartData';

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">{title}</h3>
    <div className="h-64">{children}</div>
  </div>
);

const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard" className="bg-slate-50 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Business At a Glance
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            A clean, intuitive, and powerful dashboard to monitor your key
            metrics.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Monthly Recurring Revenue */}
          <ChartCard title="Monthly Recurring Revenue (MRR)">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={mrrData}
                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" tick={{ fill: '#64748b' }} />
                <YAxis tick={{ fill: '#64748b' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563EB"
                  fillOpacity={1}
                  fill="url(#colorMrr)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* New Users */}
          <ChartCard title="New Users">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={newUsersData}
                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" tick={{ fill: '#64748b' }} />
                <YAxis tick={{ fill: '#64748b' }} />
                <Tooltip
                  cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                  }}
                />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Traffic Sources */}
          <div className="md:col-span-2 lg:col-span-1">
            <ChartCard title="Traffic Sources">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                 <Pie
  data={trafficSourceData as any} // cast as any to remove red underline
  dataKey="users"
  nameKey="source"
  cx="50%"
  cy="50%"
  outerRadius={100}
  fill="#8884d8"
  label
>
   {trafficSourceData.map((_entry: any, index: number) => ( // entry typed as any
    <Cell key={index} fill={COLORS[index % COLORS.length]} />
  ))}

</Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Weekly User Activity */}
          <div className="md:col-span-2 lg:col-span-1">
            <ChartCard title="Weekly User Activity">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={userActivityData}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="day" tick={{ fill: '#64748b' }} />
                  <YAxis tick={{ fill: '#64748b' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="activity"
                    stroke="#1D4ED8"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
