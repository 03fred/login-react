import React from 'react';
import {curveCatmullRom} from 'd3-shape';

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas
} from 'react-vis';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Card, CardBody } from 'reactstrap';

import './Home.css';
import api from 'utils/api';

class Home extends React.Component {
  
  state = {
    useCanvas: false
  };

  constructor(props){
    super(props);
      this.processData();
  }

  
  processData(){
    try {
    api.get('http://localhost:4000/goal-control?dateInitial=2021-01-01 00:00&dateFinal=2021-12-12 00:00')
          .then((response) => {
           const data  = response.data.data.map((e, i) => ({
              x: i,
              y: e.status
            }));
            this.setState({ processData: data });
         })
         .catch((error) => {
           console.log(error);
           
         });
        } catch (err) {
          alert(err);
      }
    
  }
  
  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
   /* <ShowcaseButton
          onClick={() => this.setState({useCanvas: !useCanvas})}
          buttonContent={content}
        />*/
    return (
      <div>
        <Header/>
          <Card className="scroll">
            <CardBody>
              <XYPlot width={600} height={300}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis />
                <YAxis />
                <ChartLabel 
                  text="X Axis"
                  className="alt-x-label"
                  includeMargin={false}
                  xPercent={0.025}
                  yPercent={1.01}
                  />

                <ChartLabel 
                  text="Y Axis"
                  className="alt-y-label"
                  includeMargin={false}
                  xPercent={0.06}
                  yPercent={0.06}
                  style={{
                    transform: 'rotate(-90)',
                    textAnchor: 'end'
                  }}
                  />
                <Line
                  className="first-series"
                  data={this.state.processData}
                />
               
              </XYPlot>
           </CardBody>
         </Card>
        <Footer/>
      </div>
    )
 }
}

export default Home;
/*

 <Line className="second-series" data={null} />
                <Line
                  className="third-series"
                  curve={'curveMonotoneX'}
                  data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
                  strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
                />
                <Line
                  className="fourth-series"
                  curve={curveCatmullRom.alpha(0.5)}
                  style={{
                    // note that this can not be translated to the canvas version
                    strokeDasharray: '2 2'
                  }}
                  data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
                />

*/