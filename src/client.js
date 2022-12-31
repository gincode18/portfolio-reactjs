import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '3grbi8ba',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skahCSCOmV0axBlKaY8vaqZLQI7MI0CPZPPvnF8AsssUWgxEktsK6F38UngXklzins08INddxyfeAI8CJPlJaL8ibYDos1Qw8heeM7HBKdGWdlPhSHWlZaUK5sV8vk09WPtU5VlwdbOHnjMq4OGV9jn3C3A1pKnGi7l3FqWg7aG66fXXugNF',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
