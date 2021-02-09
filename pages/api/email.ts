import Airtable from "airtable";
const base = new Airtable({ apiKey: process.env.airtable_api_key }).base(
  process.env.airtable_base_id
);

export default async function handler(req, res) {
  const {email} = JSON.parse(req.body)

  base("email").create({
    email: email,
    date: new Date(),
  });
}
