import { Table, Button } from "antd"
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, deleteItem } from './tableReducer'
const table = () => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'x',
            render: (_, e, index) => <a onClick={() => { dispatch(deleteItem({ index })) }}>Delete</a>,
        },
    ];

    const dataSource = useSelector((store) => store.table.dataSource)
    const dispatch = useDispatch()

    const data = useMemo(() => {
        const key = dataSource.length + 1
        return {
            key,
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }
    }, [dataSource])

    return (
        <>
            <Button onClick={() => dispatch(increment({ data }))}>add</Button>
            <Table dataSource={dataSource} columns={columns}></Table>
        </>
    )
}
export default table