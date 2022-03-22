import React from 'react';

import { Spinner } from '../Spinner';

import StyledPageLoader from './Styles';

export const PageLoader = () => (
  <StyledPageLoader>
    <Spinner size={70} />
  </StyledPageLoader>
);
