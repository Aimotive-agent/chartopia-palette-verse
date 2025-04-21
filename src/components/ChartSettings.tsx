
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette } from "lucide-react";
import { PaletteType } from "@/lib/types";
import { palettes } from "@/lib/data";

interface ChartSettingsProps {
  open: boolean;
  onClose: () => void;
  selectedPalette: PaletteType;
  setSelectedPalette: (palette: PaletteType) => void;
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
  showLegend: boolean;
  setShowLegend: (show: boolean) => void;
  animate: boolean;
  setAnimate: (animate: boolean) => void;
}

const ChartSettings: React.FC<ChartSettingsProps> = ({
  open,
  onClose,
  selectedPalette,
  setSelectedPalette,
  showGrid,
  setShowGrid,
  showLegend,
  setShowLegend,
  animate,
  setAnimate
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chart Settings</DialogTitle>
          <DialogDescription>
            Customize the appearance of your chart
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="palette">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="palette">Color Palette</TabsTrigger>
            <TabsTrigger value="display">Display Options</TabsTrigger>
          </TabsList>
          
          <TabsContent value="palette" className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(palettes).map(([key, palette]) => (
                <div 
                  key={key}
                  className={`
                    cursor-pointer rounded-md p-2 border-2 transition-all
                    ${selectedPalette === key 
                      ? 'border-chart-purple ring-2 ring-chart-purple/30' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                  onClick={() => setSelectedPalette(key as PaletteType)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium capitalize">{key}</span>
                    {selectedPalette === key && <Palette className="h-4 w-4 text-chart-purple" />}
                  </div>
                  <div className="flex space-x-1">
                    {palette.map((color, i) => (
                      <div 
                        key={i}
                        className="h-4 w-full rounded-sm" 
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="display" className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="show-grid" className="cursor-pointer">Show Grid</Label>
              <Switch 
                id="show-grid" 
                checked={showGrid}
                onCheckedChange={setShowGrid}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="show-legend" className="cursor-pointer">Show Legend</Label>
              <Switch 
                id="show-legend" 
                checked={showLegend}
                onCheckedChange={setShowLegend}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="animate" className="cursor-pointer">Animation</Label>
              <Switch 
                id="animate" 
                checked={animate}
                onCheckedChange={setAnimate}
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={onClose}>
            Apply Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChartSettings;
