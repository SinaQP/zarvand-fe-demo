//import styles
import { ContainerCardProps } from './index.interface';
import './scss/_index.scss';

const ContainerCard: React.FC<ContainerCardProps> = ({
  children,
  className,
  title,
  titleClassName,
  isInner,
  isTransparent,
  isTitleTransparent,
  fitContentWidth,
  isDirectionColumn,
}) => {
  return (
    <fieldset
      className={`cardContainer ${className} ${isInner && 'innerCard'} ${
        isTransparent && 'transparent'
      } ${fitContentWidth && 'fitContent'} ${isDirectionColumn && 'column'}`}
    >
      {title && (
        <legend
          className={`legend ${titleClassName} ${isInner && 'innerCard'} ${
            isTitleTransparent && 'transparent'
          }`}
        >
          {title}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
export default ContainerCard;
