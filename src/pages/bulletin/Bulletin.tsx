import '../../App.css';
import birthdayBanner from '../../assets/banner-birthday.jpg';
import { SnippetsOutlined, MoreOutlined } from '@ant-design/icons';

function Bulletin() {
  const tasks = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    title: `Task title ${index + 1}`,
  }));

  return (
    <div className="bulletin-container">
      <div className="birthday-banner">
        <img src={birthdayBanner}></img>
      </div>

      <div className="announcements">
        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <SnippetsOutlined />
                <div className="task-title">{task.title}</div>
              </div>
              <MoreOutlined />
            </div>
          ))}
        </div>
        <div className="event-list">
          {tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <SnippetsOutlined />
                <div className="task-title">{task.title}</div>
              </div>
              <MoreOutlined />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bulletin;
