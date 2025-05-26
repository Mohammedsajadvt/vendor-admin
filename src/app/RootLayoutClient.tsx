'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { memo } from 'react';

const RootLayoutClient = memo(({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
});

RootLayoutClient.displayName = 'RootLayoutClient';

export default RootLayoutClient;
