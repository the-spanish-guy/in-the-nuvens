import('dotenv')
import path from 'path'
import { homedir } from 'os'

import { IResolvePath } from '@interfaces/FolderInterface'

export class FolderService {
  private storage: string
  constructor() {
    if (!process.env.FILE_STORAGE) {
      console.error('Pasta de armazenamento não definida')
      process.exit(1)
    }

    this.storage = `${homedir}/${process.env.FILE_STORAGE}`
  }

  public resolvePath(url: string): IResolvePath {
    const relative = !url ? '/' : url.replace(/--/g, '/')
    const absolute = path.join(this.storage, relative)

    return { absolute, relative }
  }
}
