import React from 'react';
import styled from 'styled-components';

import { Router } from './router/Router';
import { COLOR } from './utils/const';

export const App = () => {
  return (
    <SRoot>
      <Router />
    </SRoot>
  );
};

const SRoot = styled.div`
  min-height: 100vh;
  background-color: ${COLOR.BACK_GROUND};
  text-align: center;
`;
