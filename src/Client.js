import  SanityClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const Client = new SanityClient({
  projectId:'9jq1nfyg',
  dataset: "production",
  apiVersion: "2023-10-17",
  useCdn: true,
  token:'skPLbbrutyRObvJjwicAMG0oV0ppHCXfiAaVqVgu6HuIwbQMNUi8YJy8KxReDbE6YwkojxzB06MFPDFMNrDlcVOrPXGwpjLuYrIhHZ8VagHwGZTtrJmfdQCk2t84jE3RKQJ0dTRKxoOg8N2Y15yEbe0Bjb1hbdOxsXH9J1hGMxbOBCy1efC2'
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);


