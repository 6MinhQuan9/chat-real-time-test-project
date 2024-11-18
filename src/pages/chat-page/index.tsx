import { useState } from 'react';
import RichText from '../../components/editor/rich-text';

function ChatWrapper() {
  const [count, setCount] = useState(0);

  return (
    <div className="chat-wrapper">
      <div className="chat-container"></div>

      <div className='editor'>
        <RichText />
      </div>
    </div>
  );
}

export default ChatWrapper;
