import { PureComponent } from 'react';
import { Radar, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Sports',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Entertainment',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Business',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Education',
    A: 99,
    B: 100,
    fullMark: 150,
  }
];

export default class Chartradar extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/radar-chart-specified-domain-mfl04';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <Radar cx="50%" cy="50%" outerRadius="80%" data={data}>
          
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
       
        </Radar>
      </ResponsiveContainer>
    );
  }
}
