import { theme } from './../../../constants/theme';

export interface LoaderProps {
  wrapperClass?: string;
  height?: string | number;
  width?: string | number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  wrapperClass = '',
  height = 100,
  width = 100,
  color = theme.colors.primary,
}) => {
  return (
    <div className={wrapperClass} data-testid="loader">
      <svg
        version="1.1"
        height={`${height}`}
        width={`${width}`}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        data-testid="line-wave-svg"
      >
        <rect x="38" y="50" width="4" height="10" fill={color} /** First bar */>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect x="48" y="50" width="4" height="10" fill={color}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect x="58" y="50" width="4" height="10" fill={color} /** last bar */>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Loader;
