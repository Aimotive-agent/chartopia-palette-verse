
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  AreaChart, 
  Settings, 
  Palette, 
  Info
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavBarProps {
  activeChart: string;
  setActiveChart: (chart: string) => void;
  onOpenSettings: () => void;
}

const NavBar = ({ activeChart, setActiveChart, onOpenSettings }: NavBarProps) => {
  const charts = [
    { id: 'bar', name: 'Bar Chart', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'line', name: 'Line Chart', icon: <LineChart className="h-5 w-5" /> },
    { id: 'pie', name: 'Pie Chart', icon: <PieChart className="h-5 w-5" /> },
    { id: 'area', name: 'Area Chart', icon: <AreaChart className="h-5 w-5" /> },
  ];

  return (
    <header className="w-full bg-background border-b border-border py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-chart-purple" />
          <h1 className="text-xl font-bold">
            <span className="text-chart-purple">Chartopia</span>
            <span className="text-gray-500"> Palette Verse</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-1 md:space-x-2">
          <TooltipProvider>
            {charts.map((chart) => (
              <Tooltip key={chart.id}>
                <TooltipTrigger asChild>
                  <Button
                    variant={activeChart === chart.id ? "default" : "outline"}
                    size="sm"
                    className={`${activeChart === chart.id ? 'bg-chart-purple text-white' : ''}`}
                    onClick={() => setActiveChart(chart.id)}
                  >
                    {chart.icon}
                    <span className="ml-2 hidden md:inline">{chart.name}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{chart.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" onClick={onOpenSettings}>
                  <Settings className="h-5 w-5" />
                  <span className="ml-2 hidden md:inline">Settings</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chart Settings</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <Info className="h-5 w-5" />
                  <span className="ml-2 hidden md:inline">Help</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Help & Documentation</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
