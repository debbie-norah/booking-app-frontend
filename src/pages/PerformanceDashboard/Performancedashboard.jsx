import React from 'react';
import {PieChart, Pie, Line, LineChart,BarChart,Bar,Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, FunnelChart} from 'recharts';
import "./Performancedashboard.css";
import PerformanceDashboard from '../../api/PerformanceDashboard/PerformanceDashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import Getexperiences from '../../api/PerformanceDashboard/Getexperiences';
import Getcities from '../../api/PerformanceDashboard/Getcities';



const Grossbookingline = () => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const lifetimegrossbookingbar = [];
  const lifetimegrossbookingline = [];
  const averagebookingline = [];
  const ticketsold = [];
  const tableValues = [];
  const COLORSprim = ['#0088FE', '#00C49F'];
  const COLORSsec = ['#0088FE', '#00C49F','green'];
  const PAXprimary = [];
  const  PAXsecondary = []
  const [arr, setArr] = useState([]);
  const [load, setLoad] = useState(true);
  const [experience, setExperience] = useState("")
  const [city, setCity] = useState("")
  const [expnames, setExp] = useState([]);
  const [citynames,setCitynames] = useState([]);
  const [country, setCountry] = useState([]);

  async function fetchdetails(){
    const res = await PerformanceDashboard().catch((err)=>{
      
      
    })
    return res.data.data;
  
  }
  async function fetchexperiences(a){
   
    const res = await Getexperiences(a).catch((err)=>{
     
    })
    return res.data;
  }
  async function fetchcities(b){
    const res = await Getcities(b).catch((err)=>{
      
    })
    return res.data;
  }

  useEffect(()=>{
    setLoad(true)
    fetchdetails().then((res)=>{
      
      var p = "";
      for(let i = 0; i<res[0].experience.length; i++){
        if(i == res[0].experience.length-1){
          p = p+res[0].experience[i];
        }
        else{
          p = p+res[0].experience[i]+"|";
        }
      }
      setExperience(p);
      fetchexperiences(p).then((resp)=>{
        setExp(resp.names);
        var q = "";
        for(let i = 0; i<resp.data.length; i++){
          if(i == resp.data.length-1){
            q = q+resp.data[i];
          }
          else{
            q = q+resp.data[i]+"|";
          }
        }
        setCity(q);
        fetchcities(q).then((response)=>{
          setCitynames(response.cityNames);
          setCountry(response.countryNames);
          setArr(res);
          setLoad(false);
        })

      })
      
      
      
    })
    
    
  },[])

  var a = arr;
  
  function datacrunch(){
    for(let i = 0; i<12; i++){
      lifetimegrossbookingbar.push({month:months[i],gb:arr[0].totalBookingValue[i]})
      ticketsold.push({month:months[i],tickets:arr[0].monthlyTickets[i]})
      if(i<=5){
        lifetimegrossbookingline.push({month:months[i],primary:arr[0].totalBookingValue[i]})
        averagebookingline.push({month:months[i],primary:arr[0].monthlyTickets[i]});
      }
      else{
        lifetimegrossbookingline.push({month:months[i],secondary:arr[0].totalBookingValue[i]})
        averagebookingline.push({month:months[i],secondary:arr[0].monthlyTickets[i]});
      }
    }
    var sum2 = arr[0].paxdata.nadult+arr[0].paxdata.nchildren+arr[0].paxdata.nothers;
    var sum1 = arr[0].paxdata.nadult+arr[0].paxdata.nchildren;
    var c1 = (arr[0].paxdata.nadult/sum1)*100;
    var c2 = (arr[0].paxdata.nchildren/sum1)*100;
    var c3 = (arr[0].paxdata.nadult/sum2)*100;
    var c4 = (arr[0].paxdata.nchildren/sum2)*100;
    var c5 = (arr[0].paxdata.nothers/sum2)*100;
    PAXprimary.push({"type":"Adult", "qt":c1})
    PAXprimary.push({"type":"Children", "qt":c2});
    PAXsecondary.push({"type":"Adult", "qt":c3})
    PAXsecondary.push({"type":"Children", "qt":c4})
    PAXsecondary.push({"type":"Others", "qt":c5})
    for(let i = 0; i<arr[0].experience.length;i++){
      tableValues.push({experience:expnames[i],city:citynames[i],country:country[i],bookings:arr[0].expBookings[i],tickets:arr[0].expTickets[i],average:arr[0].expBookings[i]/arr[0].totalamount});
    }
  }
  
  

  

  
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


  if(load==true){
    return(
      <><p>Loading....</p></>
    )
  }
  else{
    datacrunch();

  return (
    <>
    

    <div className="topbar">
      <div>
        <p>Primary Period</p>
        <p className='date'>21/01/2022</p>
        <p className='date'>21/06/2022</p>
      </div>
      <div>
        <p>Comparison Period</p>
        <p className='date'>21/07/2022</p>
        <p className='date'>21/12/2022</p>

      </div>
    </div>

    <h2>Partner Performance Dashbooard</h2>
    
    <div className="stat">
      <div>
        <p className='number'>${arr[0].totalamount}</p>
        <p className='title'>Gross Booking</p>
      </div>
      <div>
        <p className='number'>-</p>
        <p className='title'>Booking Completion Rate</p>
      </div>
      <div>
        <p className='number'>{arr[0].noTickets}</p>
        <p className='title'>Tickets sold</p>
      </div>
      <div>
        <p className='number'>{arr[0].noTickets}</p>

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

    {tableValues && tableValues.map((item)=>{
      return (
        <>
        <tr><td>{tableValues.indexOf(item)+1}</td><td>{item.experience}</td><td>{item.city}</td><td>{item.country}</td><td>{item.bookings}</td><td>-</td><td>{item.average}</td><td>-</td><td>{item.tickets}</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
        </>
      )
    })

    }
  </table>
 
</div>
</>
  )

      }

}





export default Grossbookingline;