
import { useState, useEffect } from "react";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import ChartDisplay from "@/components/ChartDisplay";
import ChartSettings from "@/components/ChartSettings";
import DataControls from "@/components/DataControls";
import { generateRandomData, palettes } from "@/lib/data";
import { ChartData, PaletteType } from "@/lib/types";

const Index = () => {
  const [activeChart, setActiveChart] = useState<string>("bar");
  const [data, setData] = useState<ChartData[]>(generateRandomData());
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [selectedPalette, setSelectedPalette] = useState<PaletteType>("default");
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showLegend, setShowLegend] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    toast("Welcome to Chartopia Palette Verse!", {
      description: "Select a chart type and customize your visualization.",
    });
  }, []);

  const handleRandomize = () => {
    setData(generateRandomData());
    toast("Data randomized!", {
      description: "Your chart now displays a new random dataset.",
    });
  };

  const handleChartChange = (chart: string) => {
    setActiveChart(chart);
    toast(`Switched to ${chart.charAt(0).toUpperCase() + chart.slice(1)} Chart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar 
        activeChart={activeChart} 
        setActiveChart={handleChartChange} 
        onOpenSettings={() => setSettingsOpen(true)} 
      />
      
      <main className="container py-8 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ChartDisplay
              chartType={activeChart}
              data={data}
              palette={palettes[selectedPalette]}
              showGrid={showGrid}
              showLegend={showLegend}
              animate={animate}
            />
          </div>
          
          <div className="md:col-span-1">
            <DataControls
              chartType={activeChart}
              data={data}
              setData={setData}
              onRandomize={handleRandomize}
            />
          </div>
        </div>
      </main>
      
      <ChartSettings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        selectedPalette={selectedPalette}
        setSelectedPalette={setSelectedPalette}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        showLegend={showLegend}
        setShowLegend={setShowLegend}
        animate={animate}
        setAnimate={setAnimate}
      />
    </div>
  );
};

export default Index;
