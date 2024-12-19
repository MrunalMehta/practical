import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const sessionData = [
  { name: 'Assigned', value: 33, color: '#ef4444' },
  { name: 'Not Assigned', value: 33, color: '#22c55e' },
  { name: 'Reassigned', value: 34, color: '#eab308' }
];

function SessionsChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-gray-800 text-lg font-semibold mb-6">Sessions By Channel</h2>
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={sessionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            {sessionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="space-y-3 mt-4">
      {sessionData.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
          <span className="text-sm text-gray-600">{item.value}%</span>
        </div>
      ))}
    </div>

    <div className="mt-6 text-center">
      <div className="text-2xl font-bold text-gray-800">8,234</div>
      <div className="text-sm text-gray-600">Total Sessions</div>
    </div>
  </div>
  )
}

export default SessionsChart
