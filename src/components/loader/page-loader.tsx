import classes from './page-loader.module.css';

import { Loader } from '@mantine/core';

export default function PageLoader() {
  return (
    <div className={classes.pageLoaderBackground}>
      <Loader style={{ alignSelf: 'center' }} color="blue" type="bars" />
    </div>
  );
}
