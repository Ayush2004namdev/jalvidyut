import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

export default function ChartComponent({color,dets}){
    const screenWidth = Dimensions.get("window").width;
    const data = {
      labels: ['Jan', 'Feb', 'Mar','Jan', 'Feb', 'Mar'],
      datasets: [
        {
          data: dets,
        },
      ],
    };
  
    return (
      <View>
        <BarChart
        data={data}
        width={330}
        height={360}
        className='h-full w-full bg-blue-400'
        yAxisLabel=""
        chartConfig={{   
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `${color}`,
          labelColor: (opacity = 1) => `${color}`,
        }}
        verticalLabelRotation={0}
        style={styles.chart}
      />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 10, 
    // Add elevation for Android shadow
    },
    chart: {
        marginRight:10,
      marginVertical: 8,
      borderRadius: 50,
    },
  });