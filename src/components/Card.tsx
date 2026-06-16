import * as React from "react";

interface CardProps {
  icon: React.ReactNode | string;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const CardLegacy = ({ icon, title, description, className, iconClassName, titleClassName, descriptionClassName }: CardProps) => {
  // Convert empty strings to undefined so React doesn't add empty className attributes
  const containerClass = className?.trim() || undefined;
  const iconClass = iconClassName?.trim() || undefined;
  const titleClass = titleClassName?.trim() || undefined;
  const descClass = descriptionClassName?.trim() || undefined;

  return (
    <div className={containerClass}>
      <div className={iconClass}>
        {typeof icon === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          icon
        )}
      </div>
      <h3 className={titleClass}>{title}</h3>
      <p className={descClass}>{description}</p>
    </div>
  );
};
