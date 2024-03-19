/* eslint-disable react/prop-types */
export const DashboardIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="#fff"
      d="M3.75 10.5A.75.75 0 0 1 3 9.75V3.752a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75V3.752a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-.75.75H14.25ZM3.75 21a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H14.25Z"
    />
  </svg>
);

export const MessageIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="#7B7B7B"
      fillRule="evenodd"
      d="M3.879 5.879C3 6.757 3 8.172 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879Zm2.676 2.289a1 1 0 0 0-1.11 1.664l5.446 3.63a2 2 0 0 0 2.218 0l5.446-3.63a1 1 0 1 0-1.11-1.664L12 11.798l-5.445-3.63Z"
      clipRule="evenodd"
    />
  </svg>
)

export const Dashboard = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="#7B7B7B"
      d="M.75 7.5A.75.75 0 0 1 0 6.75V.751a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75V6.75a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75V.751a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75V6.75a.75.75 0 0 1-.75.75H11.25ZM.75 18a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H11.25Z"
    />
  </svg>
)
