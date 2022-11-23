import React from 'react';
import {PieChart, Pie, Line, LineChart,BarChart,Bar,Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import "./Performancedashboard.css";

const Grossbookingline = () => {
  const lifetimegrossbookingbar = [{month:"March",gb:4000},{month:"April",gb:8000},{month:"May",gb:2000},{month:"June",gb:1000},{month:"July",gb:900},{month:"August",gb:4000},{month:"September",gb:8000},{month:"October",gb:8000},{month:"November",gb:9000}];
  const lifetimegrossbookingline = [{month:"March",primary:4000},{month:"April",primary:8000},{month:"May",primary:2000},{month:"June",primary:1000},{month:"July",primary:900},{month:"August",secondary:4000},{month:"September",secondary:8000},{month:"October",secondary:8000},{month:"November",secondary:9000}];
  const averagebookingline = [{month:"March",primary:2000},{month:"April",primary:800},{month:"May",primary:2000},{month:"June",primary:9000},{month:"July",primary:900},{month:"August",secondary:400},{month:"September",secondary:8000},{month:"October",secondary:7000},{month:"November",secondary:9000}];
  const ticketsold = [{month:"March",tickets:500},{month:"April",tickets:5000},{month:"May",tickets:7000},{month:"June",tickets:4300},{month:"July",tickets:500},{month:"August",tickets:500},{month:"September",tickets:5000},{month:"October",tickets:5000},{month:"November",tickets:8000}];
  const COLORSprim = ['#0088FE', '#00C49F'];
  const COLORSsec = ['#0088FE', '#00C49F','green'];
  const PAXprimary = [{"type":"Adult","qt":97.26},{"type":"Child","qt":2.74}];
  const  PAXsecondary = [{"type":"Adult","qt":79.53},{"type":"Child","qt":11.02},{"type":"Others","qt":9.45}]
  
  //  const CustomTooltipPAXprimary = ({ active, payload, label }) => {
  //       if (active) {
  //           return (
  //               <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
  //                   <label>{`${payload[0].type} : ${payload[0].qt}%`}</label>
  //               </div>
  //           );
  //       }

  //       return null;
  //   };
  //   const CustomTooltipPAXsecondary = ({ active, payload, label }) => {
  //     if (active) {
  //         return (
  //             <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
  //                 <label>{`${payload[0].type} : ${payload[0].qt}%`}</label>
  //             </div>
  //         );
  //     }

  //     return null;
  // };




  return (
    <>
    

    <div className="topbar">
      <div>
        <p>Primary Period</p>
        <p className='date'>21/08/2022</p>
        <p className='date'>21/11/2022</p>
      </div>
      <div>
        <p>Comparison Period</p>
        <p className='date'>21/05/2022</p>
        <p className='date'>21/08/2022</p>
      </div>
    </div>

    <h2>Partner Performance Dashbooard</h2>
    
    <div className="stat">
      <div>
        <p className='number'>$3,990.45</p>
        <p className='title'>Gross Booking</p>
      </div>
      <div>
        <p className='number'>80.34%</p>
        <p className='title'>Booking Completion Rate</p>
      </div>
      <div>
        <p className='number'>100</p>
        <p className='title'>Tickets sold</p>
      </div>
      <div>
        <p className='number'>94</p>
        <p className='title'>Number of Bookings</p>
      </div>
    </div>
    
    <div className="linebar1">
      <div>
        <h4>Gross Booking Value(USD)</h4>
    <LineChart
          width={500}
          height={300}
          data={lifetimegrossbookingline}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="primary"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="secondary"
            stroke="pink"
            fill="pink"
          />
        </LineChart>
        </div>
        <div>
          <h4>Lifetime Gross Booking Value(USD)</h4>
    <BarChart 
    width={500}
    height={300}
    data={lifetimegrossbookingbar}
    margin={{top:5,right:30,left:20,bottom:5}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="month" />
      <YAxis/>
      <Tooltip/>
      <Bar dataKey="gb" fill="blue"/>
    </BarChart>
    </div>
    </div>
    <div className="linebar2">
      <div>
        <h4>Average Booking Value(USD)</h4>
    <LineChart
          width={500}
          height={300}
          data={averagebookingline}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="primary"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="secondary"
            stroke="pink"
            fill="pink"
          />
        </LineChart>
        </div>
        <div>
          <h4>Tickets sold</h4>
    <BarChart 
    width={500}
    height={300}
    data={ticketsold}
    margin={{top:5,right:30,left:20,bottom:5}}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="month" />
      <YAxis/>
      <Tooltip/>
      <Bar dataKey="tickets" fill="red"/>
    </BarChart>
    </div>
    </div>
    <div className="chart3">
      <div>
        <h4>PAX Distribution(Primary Period)</h4>
    <PieChart width={730} height={300}>
                <Pie data={PAXprimary} color="#000000" dataKey="qt" nameKey="type" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        PAXprimary.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSprim[index % COLORSprim.length]} />)
                    }
                </Pie>
                {/* <Tooltip content={<CustomTooltipPAXprimary active={true} payload={PAXprimary} />} /> */}
                <Legend />
            </PieChart>
            </div>
            <div>
            <h4>PAX Distribution(Comparison Period)</h4>
    <PieChart width={730} height={300}>
    <Pie data={PAXsecondary} color="#000000" dataKey="qt" nameKey="type" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
        {
            PAXsecondary.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSsec[index % COLORSsec.length]} />)
        }
    </Pie>
    {/* <Tooltip content={<CustomTooltipPAXsecondary />} /> */}
    <Legend />
</PieChart>
</div>
</div>
<div className="table">
  <table>
    <tr><th>Sl.No</th><th>Experience Name</th><th>City</th><th>Country</th><th>Current Bookings(Primary)</th><th>Bookings Completion Rate(Primary)</th><th>Avg Booking Value(Primary)</th><th>GBV(Primary)</th><th>Count Bookings(Comparison)</th><th>Booking Completion Rate(Comparison)</th><th>Avg Booking Value(Comparison)</th><th>GBV(Comparison)</th><th>Delta GBV (PrimRY VS Comparison)</th></tr>
  </table>
 
</div>
</>
  )
}





export default Grossbookingline;