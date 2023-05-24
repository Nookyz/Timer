import { FC } from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const MindIcon: FC<Props> = ({
  width = 30,
  height = 26,
  color = '#471515',
}) => (
  <svg width={width} height={height} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 13.5C30.0001 12.1753 29.6242 10.8777 28.9162 9.75808C28.2081 8.63846 27.1969 7.74274 26 7.175V6C25.9991 4.71141 25.5834 3.45735 24.8144 2.42339C24.0454 1.38943 22.9639 0.630521 21.73 0.258963C20.4962 -0.112595 19.1755 -0.0770556 17.9634 0.360323C16.7513 0.797701 15.7123 1.61368 15 2.6875C14.2877 1.61368 13.2486 0.797701 12.0365 0.360323C10.8244 -0.0770556 9.50374 -0.112595 8.26989 0.258963C7.03603 0.630521 5.95458 1.38943 5.18557 2.42339C4.41656 3.45735 4.00085 4.71141 3.99996 6V7.175C2.80288 7.74261 1.79146 8.63827 1.08322 9.7579C0.374986 10.8775 -0.000976562 12.1752 -0.000976562 13.5C-0.000976562 14.8248 0.374986 16.1225 1.08322 17.2421C1.79146 18.3617 2.80288 19.2574 3.99996 19.825V20C4.00085 21.2886 4.41656 22.5426 5.18557 23.5766C5.95458 24.6106 7.03603 25.3695 8.26989 25.741C9.50374 26.1126 10.8244 26.0771 12.0365 25.6397C13.2486 25.2023 14.2877 24.3863 15 23.3125C15.7123 24.3863 16.7513 25.2023 17.9634 25.6397C19.1755 26.0771 20.4962 26.1126 21.73 25.741C22.9639 25.3695 24.0454 24.6106 24.8144 23.5766C25.5834 22.5426 25.9991 21.2886 26 20V19.825C27.1959 19.2561 28.2063 18.36 28.9142 17.2407C29.6221 16.1213 29.9986 14.8244 30 13.5ZM9.99996 24C9.01309 23.9994 8.06126 23.634 7.3275 22.9741C6.59373 22.3142 6.12982 21.4063 6.02496 20.425C6.34746 20.4758 6.67349 20.5009 6.99996 20.5H7.99996C8.26518 20.5 8.51953 20.3946 8.70707 20.2071C8.89461 20.0196 8.99996 19.7652 8.99996 19.5C8.99996 19.2348 8.89461 18.9804 8.70707 18.7929C8.51953 18.6054 8.26518 18.5 7.99996 18.5H6.99996C5.82161 18.498 4.68183 18.0799 3.78171 17.3194C2.88158 16.559 2.27896 15.5051 2.08015 14.3436C1.88134 13.1821 2.09913 11.9878 2.69508 10.9712C3.29104 9.9547 4.22686 9.18131 5.33746 8.7875C5.53179 8.71591 5.6995 8.58645 5.81796 8.41658C5.93642 8.24671 5.99995 8.0446 5.99996 7.8375V6C5.99996 4.93913 6.42139 3.92172 7.17154 3.17157C7.92168 2.42143 8.9391 2 9.99996 2C11.0608 2 12.0782 2.42143 12.8284 3.17157C13.5785 3.92172 14 4.93913 14 6V15.5375C12.9052 14.5439 11.4784 13.9955 9.99996 14C9.73475 14 9.48039 14.1054 9.29286 14.2929C9.10532 14.4804 8.99996 14.7348 8.99996 15C8.99996 15.2652 9.10532 15.5196 9.29286 15.7071C9.48039 15.8946 9.73475 16 9.99996 16C11.0608 16 12.0782 16.4214 12.8284 17.1716C13.5785 17.9217 14 18.9391 14 20C14 21.0609 13.5785 22.0783 12.8284 22.8284C12.0782 23.5786 11.0608 24 9.99996 24ZM23 18.5H22C21.7348 18.5 21.4804 18.6054 21.2929 18.7929C21.1053 18.9804 21 19.2348 21 19.5C21 19.7652 21.1053 20.0196 21.2929 20.2071C21.4804 20.3946 21.7348 20.5 22 20.5H23C23.3264 20.5009 23.6525 20.4758 23.975 20.425C23.8928 21.1937 23.5897 21.9222 23.1022 22.5222C22.6147 23.1223 21.9638 23.5682 21.2282 23.806C20.4926 24.0438 19.7038 24.0634 18.9573 23.8624C18.2108 23.6613 17.5386 23.2482 17.0219 22.6731C16.5053 22.0979 16.1664 21.3854 16.0462 20.6217C15.9261 19.858 16.0298 19.0758 16.3449 18.3699C16.6599 17.6639 17.1728 17.0643 17.8215 16.6437C18.4702 16.2231 19.2269 15.9995 20 16C20.2652 16 20.5195 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15C21 14.7348 20.8946 14.4804 20.7071 14.2929C20.5195 14.1054 20.2652 14 20 14C18.5215 13.9955 17.0948 14.5439 16 15.5375V6C16 4.93913 16.4214 3.92172 17.1715 3.17157C17.9217 2.42143 18.9391 2 20 2C21.0608 2 22.0782 2.42143 22.8284 3.17157C23.5785 3.92172 24 4.93913 24 6V7.8375C24 8.0446 24.0635 8.24671 24.182 8.41658C24.3004 8.58645 24.4681 8.71591 24.6625 8.7875C25.7731 9.18131 26.7089 9.9547 27.3048 10.9712C27.9008 11.9878 28.1186 13.1821 27.9198 14.3436C27.721 15.5051 27.1183 16.559 26.2182 17.3194C25.3181 18.0799 24.1783 18.498 23 18.5ZM6.49996 13C6.23475 13 5.98039 12.8946 5.79286 12.7071C5.60532 12.5196 5.49996 12.2652 5.49996 12C5.49996 11.7348 5.60532 11.4804 5.79286 11.2929C5.98039 11.1054 6.23475 11 6.49996 11C7.16199 10.9967 7.79597 10.7323 8.2641 10.2641C8.73223 9.796 8.99668 9.16203 8.99996 8.5V7.5C8.99996 7.23478 9.10532 6.98043 9.29286 6.79289C9.48039 6.60536 9.73475 6.5 9.99996 6.5C10.2652 6.5 10.5195 6.60536 10.7071 6.79289C10.8946 6.98043 11 7.23478 11 7.5V8.5C11 9.69347 10.5259 10.8381 9.68194 11.682C8.83803 12.5259 7.69344 13 6.49996 13ZM24.5 12C24.5 12.2652 24.3946 12.5196 24.2071 12.7071C24.0195 12.8946 23.7652 13 23.5 13C22.3065 13 21.1619 12.5259 20.318 11.682C19.4741 10.8381 19 9.69347 19 8.5V7.5C19 7.23478 19.1053 6.98043 19.2929 6.79289C19.4804 6.60536 19.7348 6.5 20 6.5C20.2652 6.5 20.5195 6.60536 20.7071 6.79289C20.8946 6.98043 21 7.23478 21 7.5V8.5C21.0033 9.16203 21.2677 9.796 21.7358 10.2641C22.204 10.7323 22.8379 10.9967 23.5 11C23.7652 11 24.0195 11.1054 24.2071 11.2929C24.3946 11.4804 24.5 11.7348 24.5 12Z" fill={color} />
  </svg>
);

export default MindIcon;