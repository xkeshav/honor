import { watchThis } from "@xkeshav/watch";

import { oneDay } from '@xkeshav/day';

console.log({oneDay});

export const Demo = () => {

  const today = new Date();

  watchThis({today});
  watchThis({today}, 'Demo', 'log');
  return (
      <h1>watchThis Demo (see in console)</h1>
  );
};