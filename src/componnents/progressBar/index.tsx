import { FC, useEffect, useState } from 'react';
import onClickNextArrow from './method/onClickNextArrow';
import onClickOptions from './method/onClickOptions';
import onClickPreviuseArrow from './method/onClickPreviouseArrow';
import { Props } from './props.interface';
import './scss/progressBar.scss';

const ProgressBar: FC<Props> = ({ className, options, onChange }) => {
  const [path, setPath] = useState<boolean[]>([]);

  useEffect(() => setPath(options), [options]);
  useEffect(() => {
    if (onChange) {
      const selectedOptionIndex = path.findIndex((option) => option) + 1;
      onChange(selectedOptionIndex);
    }
  }, [path]);

  let head = false;
  return (
    <div className={`progress-bar ${className}`}>
      <span
        className="progress-bar__arrow progress-bar__arrow--previous"
        onClick={() => onClickPreviuseArrow(path, setPath)}
        key={Math.random()}
      ></span>
      <div className="progress-bar__main">
        {path.map((option, index) => {
          let optionClassName = 'progress-bar__option ';
          let optionState: 'DONE' | 'CURRENT' | 'UNREACHED' = 'UNREACHED';
          let lineClassName = 'progress-bar__connect-line ';

          if (option) {
            head = true;
            optionClassName += 'progress-bar__option--current';
            optionState = 'CURRENT';
          }

          if (head === false && option === false) {
            optionClassName += 'progress-bar__option--done';
            lineClassName += 'progress-bar__connect-line--progressed';
            optionState = 'DONE';
          }

          return (
            <>
              <span
                className={optionClassName}
                onClick={() => onClickOptions(path, setPath, index)}
              >
                {index + 1}
              </span>
              {path.length - 1 > index ? (
                <div
                  className={lineClassName}
                  style={{
                    width: `${70 / (options.length - 1)}%`,
                  }}
                ></div>
              ) : null}
            </>
          );
        })}
      </div>
      <span
        className="progress-bar__arrow progress-bar__arrow--next"
        onClick={() => onClickNextArrow(path, setPath)}
      ></span>
    </div>
  );
};

export default ProgressBar;
