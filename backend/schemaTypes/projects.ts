import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: "name", type: "string", title: "Project Name" }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "link", type: "url", title: "Project Link" }),
    defineField({ name: "preview", type: "image" }),
    defineField({name:"repo",type:"url",title:"Github Repo URL"})
  ],
})