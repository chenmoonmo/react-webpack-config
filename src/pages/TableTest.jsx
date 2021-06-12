import { Table, Button } from "antd"
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from './tableReducer'
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
    ];

    const dataSource = useSelector((store) => store.table.dataSource)
    const data = useMemo(() => {
        const key = dataSource.length + 1
        return {
            key,
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }
    }, [dataSource])
    
    const dispatch = useDispatch()
    return (
        <>
            <Button onClick={() => dispatch(increment({ data }))}>add</Button>
            <Table dataSource={dataSource} columns={columns}></Table>
        </>
    )
}
export default table
