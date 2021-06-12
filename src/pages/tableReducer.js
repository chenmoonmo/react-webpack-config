import { createSlice } from '@reduxjs/toolkit'
export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        dataSource: [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ]
    },
    reducers: {
        increment: (state, { payload: { data } }) => {
            console.log(data)
            state.dataSource.push(data)
        },
        deleteItem: (state, { payload: { index } }) => {
            state.dataSource.splice(index, 1)
        }
    },
})

export const { increment,deleteItem } = tableSlice.actions

export default tableSlice.reducer