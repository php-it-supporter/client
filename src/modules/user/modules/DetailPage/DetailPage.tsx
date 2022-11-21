import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { postApis } from 'src/apis/admin';

export default function DetailPage() {
  const [mainContent, setMainContent] = useState<any>();

  useEffect(() => {
    (async () => {
      const res = await postApis.findOne(2);
      const data = res.data?.data;

      const content = JSON.parse(data.content);
      setMainContent(content);
    })();
  }, []);

  return (
    <div className="max-w-[888px] mx-auto">
      {mainContent && (
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          initialContentState={mainContent}
          readOnly
          toolbarHidden
        />
      )}
    </div>
  );
}
