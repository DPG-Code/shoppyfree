export const IconCart = ({ active = '', width = '24px', height = '24px' }) => {
  return (
    <svg
      width='24px'
      height='24px'
      strokeWidth='1'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
    >
      <path
        d='M19.26 9.696l1.385 9A2 2 0 0118.67 21H5.33a2 2 0 01-1.977-2.304l1.385-9A2 2 0 016.716 8h10.568a2 2 0 011.977 1.696zM14 5a2 2 0 10-4 0'
        stroke='#000000'
        strokeWidth={`${active === 'active' ? '1.5' : '1'}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export const IconAddToCart = ({ width = '24px', height = '24px' }) => {
  return (
    <svg
      width={width}
      height={height}
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
    >
      <path
        d='M19.26 9.696l1.385 9A2 2 0 0118.67 21H5.33a2 2 0 01-1.977-2.304l1.385-9A2 2 0 016.716 8h10.568a2 2 0 011.977 1.696zM14 5a2 2 0 10-4 0M8.992 15h3m3 0h-3m0 0v-3m0 3v3'
        stroke='#ffffff'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export const IconClearCart = () => {
  return (
    <svg
      width='24px'
      height='24px'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
    >
      <path
        d='M19.26 9.696l1.385 9A2 2 0 0118.67 21H5.33a2 2 0 01-1.977-2.304l1.385-9A2 2 0 016.716 8h10.568a2 2 0 011.977 1.696zM14 5a2 2 0 10-4 0M8.992 15h6'
        stroke='#000000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export const IconHeart = ({ active = '', width = '24px', height = '24px' }) => {
  return (
    <svg
      width={width}
      height={height}
      strokeWidth='1'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
    >
      <path
        d='M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z'
        stroke='#000000'
        strokeWidth={`${active === 'active' ? '1.5' : '1'}`}
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export const IconSearch = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width='16px'
      height='16px'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
    >
      <path
        d='M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z'
        stroke='#000000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export const IconPayment = () => {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
    >
      <path
        d='M22 9v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v2zm0 0H6M16.5 13.382a1.5 1.5 0 110 2.236M16.5 13.382a1.5 1.5 0 100 2.236'
        stroke='#ffffff'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}
