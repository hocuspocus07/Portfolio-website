import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import dotenv from "dotenv"

dotenv.config()
export default defineConfig({
  name: 'default',
  title: 'Portfolio-website',

  projectId: `${process.env.PROJECT_ID}`,
  dataset: `${process.env.DATASET}`,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
