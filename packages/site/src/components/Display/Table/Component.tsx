import React from 'react';

import { mbtabledata } from '../../../hooks/useAccountData/useAccountData.types';
import './Component.scss';
import { MDBDataTable } from 'mdbreact';

type TableType = {
  content: mbtabledata | null,
  skeleton?: boolean
}

function Component({ content, skeleton = false }: TableType) {

  return (
    <div className={`accounts-table${skeleton ? " skeleton" : ""}`}>
      {content ? <MDBDataTable scrollY={true} small searching={false} order={['name', 'asc' ]} data={content} /> : <></>}
    </div>
  );
}

export default Component;




