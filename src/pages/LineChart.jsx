import { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
   
} from 'recharts';

const data = [
    {
        name: 'Post',
        posts: 590,
        users: 800,
        views: 1400,
        comments: 490,
    },
    {
        name: 'Comment',
        posts: 868,
        users: 967,
        views: 1506,
        comments: 590,
    },
    {
        name: 'Views',
        posts: 139,
        users: 109,
        views: 98,
        comments: 350,
    },
    {
        name: 'Education',
        posts: 1480,
        users: 1200,
        views: 1228,
        comments: 480,
    },

];

export default class BarChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

    render() {
        return (
        
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="views" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="users" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="posts" stroke="#ff7300" />
                    <Scatter dataKey="comments" fill="red" />
                </ComposedChart>
         
        );
    }
}