
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartData } from "@/lib/types";
import { RefreshCcw, Download } from "lucide-react";

interface DataControlsProps {
  chartType: string;
  data: ChartData[];
  setData: (data: ChartData[]) => void;
  onRandomize: () => void;
}

const DataControls: React.FC<DataControlsProps> = ({ 
  chartType, 
  data, 
  setData, 
  onRandomize 
}) => {
  const handleSliderChange = (index: number, value: number[]) => {
    const newData = [...data];
    newData[index] = { 
      ...newData[index], 
      value: value[0]
    };
    setData(newData);
  };

  const handleSecondSliderChange = (index: number, value: number[]) => {
    const newData = [...data];
    newData[index] = { 
      ...newData[index], 
      secondValue: value[0]
    };
    setData(newData);
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Data Controls</h3>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={onRandomize}>
              <RefreshCcw className="h-4 w-4 mr-2" />
              Randomize
            </Button>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="series1">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="series1">Series 1</TabsTrigger>
            <TabsTrigger value="series2">Series 2</TabsTrigger>
          </TabsList>
          
          <TabsContent value="series1">
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={`value-${index}`} className="space-y-2">
                  <div className="flex justify-between">
                    <Label>{item.name}</Label>
                    <span className="text-sm text-muted-foreground">{item.value}</span>
                  </div>
                  <Slider
                    value={[item.value]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => handleSliderChange(index, value)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="series2">
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={`secondvalue-${index}`} className="space-y-2">
                  <div className="flex justify-between">
                    <Label>{item.name}</Label>
                    <span className="text-sm text-muted-foreground">{item.secondValue}</span>
                  </div>
                  <Slider
                    value={[item.secondValue]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => handleSecondSliderChange(index, value)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataControls;
