
import { ChartData, PaletteType } from "./types";

export const generateRandomData = (): ChartData[] => {
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  
  return categories.map(category => ({
    name: category,
    value: Math.floor(Math.random() * 100),
    secondValue: Math.floor(Math.random() * 100)
  }));
};

export const palettes: Record<PaletteType, string[]> = {
  default: ['#4361EE', '#3A0CA3', '#7209B7', '#F72585', '#4CC9F0'],
  vibrant: ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF'],
  pastel: ['#FFD6E0', '#FFEF9F', '#C1FBA4', '#7BF1A8', '#9ADCFF'],
  monochrome: ['#0D1B2A', '#1B263B', '#415A77', '#778DA9', '#E0E1DD'],
  warm: ['#FF595E', '#FF924C', '#FFCA3A', '#C5CA30', '#8AC926'],
  cool: ['#0466C8', '#0353A4', '#023E7D', '#002855', '#001845']
};
