import * as React from "react";

interface IconProps {
  icon: React.ReactNode | string;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  
  return (
      <div className={className}>
        {typeof icon === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          icon
        )}
      </div>
  );
};
