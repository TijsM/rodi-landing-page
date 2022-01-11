const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.notion_token,
});

export default async function handler(req, res) {
  const getBlog = async () => {
    const response = await notion.databases.query({
      database_id: process.env.notion_database_id,
    });
    res.status(200).json(response);
  };

  getBlog();
}
