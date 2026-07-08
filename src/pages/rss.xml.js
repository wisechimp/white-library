import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const issues = await getCollection("issues");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: issues.map((issue) => ({
      ...issue.data,
      link: `/issues/white-dwarf${issue.data.issue}/`,
    })),
  });
}
