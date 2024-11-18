import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { SendOutlined } from '@ant-design/icons';

const RichText = () => {
  return (
    <div className='editor-wrapper'>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [],
          },
          plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
          licenseKey: '<YOUR_LICENSE_KEY>',
          initialData: '<p>Hello from CKEditor 5 in React!</p>',
        }}
      />

      <SendOutlined />
    </div>
  );
};

export default RichText;
