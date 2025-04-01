import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../lib/markdownToHtml';

export default function Home({ content }) {
  return (
    <main style={{ padding: '2rem', backgroundColor: '#111', color: 'white' }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'madbanana.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    props: {
      content: htmlContent,
    },
  };
}
