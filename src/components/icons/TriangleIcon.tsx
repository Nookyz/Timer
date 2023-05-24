import { FC } from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const TriangleIcon: FC<Props> = ({
  width = 12,
  height = 8,
  color = '#471515',
}) => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill={color} />
  </svg>
);

export default TriangleIcon;
