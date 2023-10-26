import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';


const data = [
{ name: 'React', vacancies: 300 },
{ name: 'Python', vacancies: 200 },
{ name: 'PHP', vacancies: 100 },
{ name: 'java', vacancies: 50 },
{ name: '.net', vacancies: 25 },
];


function BarChartComponent() {
return (
  <BarChart width={366} height={177} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="vacancies" fill="#8884d8" />
  </BarChart>
);
}


export default BarChartComponent;