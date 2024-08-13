import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Cloud, CloudRain } from "lucide-react";

const fetchWeather = async () => {
  // For demo purposes, we'll use a mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: 22,
        condition: 'Sunny',
      });
    }, 1000);
  });
};

const WeatherWidget = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });

  if (isLoading) return <div>Loading weather...</div>;
  if (error) return <div>Error fetching weather</div>;

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Weather
          {getWeatherIcon(data.condition)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{data.temperature}°C</p>
        <p>{data.condition}</p>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;