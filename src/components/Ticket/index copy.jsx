const { createRoot } = ReactDOM;

const { Space, Table, Tag } = antd;
const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
];
const App = () => (
    <Table dataSource={data}>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )}
        />
    </Table>
);
const ComponentDemo = App;

createRoot(mountNode).render(<ComponentDemo />);
