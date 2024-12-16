import { FC } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}
const Markdown: FC<MarkdownProps> = ({ content }) => {
  const renderers: Components = {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
    p: ({ children }) => <p className="my-2">{children}</p>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    a: ({ children, href }) => (
      <a href={href} target="_blank" className="text-blue-600">
        {children}
      </a>
    ),
  };
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={renderers}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
