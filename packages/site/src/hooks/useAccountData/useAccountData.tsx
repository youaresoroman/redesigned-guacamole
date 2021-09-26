import { useEffect } from 'react';
import axios from "axios"
import { mbtabledata, TableDataCompiledType, TableDataType, TableDataTypeTypes } from './useAccountData.types';
import { useStore } from 'react-context-hook';

export const compileAccountsData = (accounts: TableDataType[], types: TableDataTypeTypes[]): TableDataCompiledType[] => {
    const newTable: TableDataCompiledType[] = accounts.map((row) => {
        return {
            ...row,
            accountType: types.filter(({ id }) => row.accountType === id)[0]
        } as TableDataCompiledType
    })
    return newTable
}

export const compileAccountsDataToTable = (data: TableDataCompiledType[]): mbtabledata => {
    return {
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
        rows: data.map(({ accountType: { title }, name, currency, profitLoss }) => {
            return {
                name,
                profitloss: `${currency} ${profitLoss}`,
                type: title
            }
        })
    }
}

function useAccountData(baseURL: string = "https://recruitmentdb-508d.restdb.io/rest"): void {
    const [, setAccountsData] = useStore('userAccountsData', null) as [TableDataType[] | null, (value: TableDataType[] | null) => void, () => void]
    const [, setAccountsDataTypes] = useStore('userAccountsDataTypes', null) as [TableDataTypeTypes[] | null, (value: TableDataTypeTypes[] | null) => void, () => void]

    useEffect(() => {
        axios({
            url: '/accounts',
            baseURL,
            headers: baseURL === "https://recruitmentdb-508d.restdb.io/rest" ? {'x-apikey': 'edf2a6114dde6136eb7db095302e37415c606'} : {}
        })
            .then((res) => res.data)
            .then((accountsData: TableDataType[]) => {
                axios({
                    url: '/accounttypes',
                    baseURL
                })
                    .then((res) => res.data)
                    .then((accountTypes: TableDataTypeTypes[]) => {
                        setAccountsData(accountsData)
                        setAccountsDataTypes(accountTypes)
                    })
                    .catch(() => {
                        setAccountsData(accountsData)
                        setAccountsDataTypes([])
                    })
            })
            .catch(() => {
                setAccountsDataTypes([])
                setAccountsData([])
            })
        
// eslint-disable-next-line 
    }, [])
}

export function GetAccountData(): {
    accountsData: TableDataType[] | null,
    accountsDataTypes: TableDataTypeTypes[] | null
} {
    const [accountsData] = useStore('userAccountsData', null) as [TableDataType[] | null, (value: TableDataType[] | null) => void, () => void]
    const [accountsDataTypes] = useStore('userAccountsDataTypes', null) as [TableDataTypeTypes[] | null, (value: TableDataTypeTypes[] | null) => void, () => void]

    return {
        accountsData,
        accountsDataTypes
    }
}

export default useAccountData;