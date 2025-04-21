
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  AreaChart, 
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
import { ChartData, PaletteType } from "@/lib/types";

interface ChartDisplayProps {
  chartType: string;
  data: ChartData[];
  palette: string[];
  showGrid: boolean;
  showLegend: boolean;
  animate: boolean;
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ 
  chartType, 
  data, 
  palette, 
  showGrid,
  showLegend,
  animate
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {showLegend && <Legend />}
              <Bar 
                dataKey="value" 
                fill={palette[0]} 
                animationDuration={animate ? 1000 : 0} 
              />
              <Bar 
                dataKey="secondValue" 
                fill={palette[1]} 
                animationDuration={animate ? 1000 : 0} 
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {showLegend && <Legend />}
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={palette[0]} 
                activeDot={{ r: 8 }} 
                animationDuration={animate ? 1000 : 0}
              />
              <Line 
                type="monotone" 
                dataKey="secondValue" 
                stroke={palette[1]} 
                animationDuration={animate ? 1000 : 0}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label
                animationDuration={animate ? 1000 : 0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
                ))}
              </Pie>
              <Tooltip />
              {showLegend && <Legend />}
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              {showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {showLegend && <Legend />}
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={palette[0]} 
                fill={palette[0]} 
                fillOpacity={0.3}
                animationDuration={animate ? 1000 : 0}
              />
              <Area 
                type="monotone" 
                dataKey="secondValue" 
                stroke={palette[1]} 
                fill={palette[1]} 
                fillOpacity={0.3}
                animationDuration={animate ? 1000 : 0}
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      default:
        return <div>Select a chart type</div>;
    }
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardContent className="pt-6">
        {renderChart()}
      </CardContent>
    </Card>
  );
};

export default ChartDisplay;
