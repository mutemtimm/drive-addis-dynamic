import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Steering Wheel Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full"></div>
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full absolute inset-0 animate-spin-slow"></div>
          {/* Steering wheel spokes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-accent rotate-0"></div>
            <div className="w-8 h-0.5 bg-accent rotate-90 absolute"></div>
          </div>
        </div>
        <p className="text-foreground font-medium animate-pulse">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;