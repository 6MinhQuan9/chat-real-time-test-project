import "quill/dist/quill.snow.css";
import Quill from "quill";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";
import "./_styles.scss";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const SAVE_INTERVAL = 2000;
function TextEditor() {
  const [socket, setSocket] = useState<Socket>();
  const [quill, setQuill] = useState<Quill>();
  const { id: documentId } = useParams();

  const containerRef = useCallback((container: HTMLDivElement) => {
    if (container === null) return;

    container.innerHTML = "";
    const editor = document.createElement("div");

    container.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS,
      },
    });

    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  useEffect(() => {
    if (socket === undefined || quill === undefined) return;

    socket.once("load-document", (document: any) => {
      quill.setContents(document);
      quill.enable();
    })

    socket.emit("get-document", documentId);
  }, [documentId, quill, socket]);

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket === undefined || quill === undefined) return;

    const handler = (delta: { ops: [] }, _oldDelta: any, source: string) => {
      if (source !== "user") return;

      socket?.emit("send-changes", delta);
    };
    quill?.on("text-change", handler);

    return () => {
      quill?.off("text-change", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket === undefined || quill === undefined) return;

    const handler = (delta: any) => {
      quill.updateContents(delta);
    };
    socket?.on("receive-changes", handler);

    return () => {
      socket?.off("receive-changes", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket === undefined || quill === undefined) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL)

    return () => {
      clearInterval(interval);
    }
  }, [socket, quill])
  return <div className="container" ref={containerRef}></div>;
}

export default TextEditor;
