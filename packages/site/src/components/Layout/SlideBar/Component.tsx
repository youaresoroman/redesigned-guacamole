import useSliderState from '../../../hooks/useSliderState/useSliderState';
import './Component.scss';
import { GetAccountData, compileAccountsData, compileAccountsDataToTable } from '../../../hooks/useAccountData/useAccountData';
import Table from "../../Display/Table";
import { mbtabledata } from '../../../hooks/useAccountData/useAccountData.types';


function Component() {
  const [fullSize, toggle] = useSliderState()
  const { accountsData, accountsDataTypes } = GetAccountData()
  const tableDataCompiled = accountsData && accountsDataTypes ? compileAccountsDataToTable(compileAccountsData(accountsData, accountsDataTypes)) : null
  const skeleton: mbtabledata = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 100
      },
      {
        label: "Profit & Loss",
        field: "profitloss",
        sort: "asc",
        width: 100
      },
      {
        label: "Account Type",
        field: "type",
        sort: "asc",
        width: 100
      }
    ],
    rows: []
  }

  return (
    <div className={`footer${fullSize ? " full-height" : ""}`}>
      <div className="handle-container" onClick={toggle}>
        <div className="handle" ></div>
      </div>
      <div className="title">
        Your Accounts Stats
      </div>
      <Table content={tableDataCompiled || skeleton} skeleton={tableDataCompiled ? false : true}/>
    </div>
  );
}

export default Component;