import { getBlog } from "./getPages";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.notion_token,
});

export const getPage = async (url: string) => {
  const allPosts = await getBlog();

  const blogId = allPosts.results.find(
    (blog) => blog.properties.Url.rich_text[0].plain_text === url
  )?.id;

  const page = await notion.pages.retrieve({ page_id: blogId });
  const title = page.properties.Name.title[0].plain_text;
  const intro = page.properties.Intro.rich_text[0].plain_text;

  const response = await notion.blocks.children.list({
    block_id: blogId,
    page_size: 100,
  });

  return {
    title,
    intro,
    content: response.results,
  };
};

export default async function handler(req, res) {
  const { blogUrl } = req.query;
  const blog = await getPage(blogUrl);

  res.status(200).json(blog);
}
