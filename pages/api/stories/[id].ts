import Airtable from "airtable";
import { Attachment } from "../stories";

const base = new Airtable({ apiKey: process.env.airtable_api_key }).base(
  process.env.airtable_base_id
);

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: "no id was provided" });
    return;
  }

  base("stories")
    .select({
      maxRecords: 25,
      view: "Grid view",
      filterByFormula: `id = '${id}'`,
    })
    .eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        records;
        const fullImages: Attachment[] = record.get("attachments");

        const imgUrls = fullImages.map((img) => img.url);

        if (record.get("title")) {
          const rec = {
            title: record.get("title"),
            context: record.get("context"),
            id: record.get("id"),
            images: imgUrls,
          };

          res.status(200).json(rec);
        } else {
          res.status(400).json({ error: "could not find story with id " + id });
        }
      });
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        res.status(400).json({ error: "could not find story with id " + id });
      }
    });
}
