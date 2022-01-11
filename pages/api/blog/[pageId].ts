const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.notion_token,
});

export default async function handler(req, res) {
  const { pageId } = req.query;

  const getBlog = async () => {
    console.log(pageId);
    const response = await notion.pages.retrieve({ page_id: pageId });
    res.status(200).json(response);
  };

  getBlog();
}
