import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "content", type: "text", title: "Content" }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published Date" }),
  ],
})