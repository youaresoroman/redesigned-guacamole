export type TableDataTypeTypes = {
    _id: string,
    id: string,
    title: string
}

export type TableDataType = {
    _id: string,
    id: number,
    name: string,
    default: boolean,
    funds: number,
    profitLoss: number,
    accountType: string,
    isDemo: boolean,
    currency: string
}

export type TableDataCompiledType = TableDataType & {
    accountType: TableDataTypeTypes | undefined
}


export type mdbtablecolumns = {
    label: string,
    field: string,
    sort: "asc" | "desc",
    width: number
}

export type mbtabledata = {
    columns: mdbtablecolumns[]
    rows: any[]
}