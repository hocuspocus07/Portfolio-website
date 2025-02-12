import {defineCliConfig} from 'sanity/cli'
import dotenv from "dotenv"

dotenv.config()
export default defineCliConfig({
  api: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET
  },
  autoUpdates: true,
})
