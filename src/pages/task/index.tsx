import { Tree, TreeDataNode } from 'antd';
import {
  CarryOutOutlined,
  MoreOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
function Task() {
  const treeData: TreeDataNode[] = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined /> },
            {
              title: 'test',
              key: '0-0-0-1',
              icon: <CarryOutOutlined />,
            },
            { title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined /> },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined /> },
          ],
        },
        {
          title: 'parent 1-2',
          key: '0-0-2',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined /> },
            {
              title: 'leaf',
              key: '0-0-2-1',
              icon: <CarryOutOutlined />,
            },
          ],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '0-1',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'parent 2-0',
          key: '0-1-0',
          icon: <CarryOutOutlined />,
          children: [
            { title: 'leaf', key: '0-1-0-0', icon: <CarryOutOutlined /> },
            { title: 'leaf', key: '0-1-0-1', icon: <CarryOutOutlined /> },
          ],
        },
      ],
    },
  ];

  const tasks = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Task title ${index + 1}`,
  }));

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <div className="task-wrapper">
      <div className="task-menu">
        <Tree
          showLine={true}
          showIcon={true}
          defaultExpandedKeys={['0-0-0']}
          onSelect={onSelect}
          treeData={treeData}
        />
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SnippetsOutlined />
              <div className="task-title">{task.title}</div>
            </div>
            <MoreOutlined />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
