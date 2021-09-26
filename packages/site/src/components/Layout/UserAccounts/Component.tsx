import React from 'react';
import { GetAccountData } from '../../../hooks/useAccountData/useAccountData';
import './Component.scss';
import Account from "../../Display/UserAccount"

function Component() {
  const { accountsDataTypes } = GetAccountData()

  const skeletons = [1,2,3]

  return (
    <div className="user-accounts">
      <div className="user-accounts-list">
        <div className="delimeter"></div>
        {accountsDataTypes ? accountsDataTypes.map(({ title }) => {
          return <Account title={title} />
        }) : skeletons.map(()=>{
          return <Account title="" skeleton/>
        })}
      </div>
    </div>
  );
}

export default Component;




