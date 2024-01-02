import React from 'react';
import { PropInterface } from './props.interface';
import './scss/index.scss';
const Loading: React.FC<PropInterface> = ({
  loading,
  loadingClassName,
  circleClassName,
  contentClassName,
  id,
  massage,
  massageClass,
  children,
}) => {
  return (
    <div>
      {loading && (
        <div
          className={`fullscreen-loading-component ${loadingClassName}`}
          id={id}
        >
          <div
            className={`fullscreen-loading-component__content ${contentClassName}`}
          >
            <div
              className={`animate-me second first-circle ${circleClassName}`}
            />
            <div className={`animate-me first ${circleClassName}`} />
            <div className={`animate-me ${circleClassName}`} />
            <div className={`animate-me first ${circleClassName}`} />
            <div className={`animate-me second ${circleClassName}`} />
          </div>
          <div
            className={`fullscreen-loading-component__massage ${massageClass}`}
          >
            <p
              className={`fullscreen-loading-component__massage__content-massage ${massageClass}`}
            >
              {massage
                ? massage
                : 'ممنون که کمی صبر می کنید تا برنامه درخواست شما را انجام دهد...'}
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Loading;
