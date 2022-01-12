const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.notion_token,
});

export const getBlog = async () => {
  const response = await notion.databases.query({
    database_id: process.env.notion_database_id,
  });

  return response;
};

export default async function handler(req, res) {
  const pages = await getBlog();

  res.status(200).json(pages);
}
