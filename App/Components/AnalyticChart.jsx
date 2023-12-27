import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


export default ChartComponent = ({color,dets}) => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: dets,
          color: (opacity = 1) => `${color})`, // Line color
          strokeWidth: 2, // Line width
        },
      ],
    };
  
    return (
      <View>
        <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: dets
        }
      ]
    }}
    width={320} // from react-native
    height={320}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "white",
      backgroundGradientTo: "white",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `${color}`,
      labelColor: (opacity = 1) => `${color}`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    );
  };
  