import React from "react";
import NavbarAdm from './NavbarAdm';
import BarChart from '../pages/LineChart';
import TrendsPieChart from '../pages/Piechart';
import Chartradar from '../components/Radar';
import '../pages/Contact.css'
// import { PureComponent } from 'react';
import Footer from '../pages/Footer'

function Charts() {
  return (
    <>
    <div className="Charts">
      <NavbarAdm />
      <div className='chart'>
      <div style={{ width: '500px', height: '300px', marginTop: '8rem' }}>
        <BarChart />
      </div>
      <div style={{ width: '400px', height: '300px', marginTop: '8rem' }}>
        <TrendsPieChart />
        </div>
        <div style={{ width: '400px', height: '300px', marginTop: '8rem' }}>
        <Chartradar />
        </div>
      {/* <div className="contactForm">

      </div> */}
    </div>
    </div>
    <div className="foter-chart">
    <Footer />
    </div>
    </>
  );
}

export default Charts;