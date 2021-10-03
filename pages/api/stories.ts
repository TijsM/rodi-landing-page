import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.airtable_api_key }).base(
  process.env.airtable_base_id
);

export interface Story {
  title: string;
  context: string;
  images: string[];
  id: number;
}

interface ImageSze {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  small: ImageSze;
  large: ImageSze;
  full: ImageSze;
}

interface Attachment {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

export default async function handler(req, res) {
  let stories: Story[] = [];

  base("stories")
    .select({
      maxRecords: 25,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          const fullImages: Attachment[] = record.get("attachments");

          const imgUrls = fullImages.map((img) => img.url);

          const rec = {
            title: record.get("title"),
            context: record.get("context"),
            id: record.get("id"),
            images: imgUrls,
          };

          stories.push(rec);
        });

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        res.status(200).json(stories);
      }
    );
}
