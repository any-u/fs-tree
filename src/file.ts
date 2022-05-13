import fs from "fs-extra"
import path from "path"

export function isFile(path: string): boolean {
  return fs.existsSync(path) && fs.statSync(path).isFile()
}

function getFiles(
  src: string,
  fileList: string[] = [],
  level: number = -1
): string[] {
  if (isFile(src)) return []
  const files = fs.readdirSync(src)
  for(let file of files) {
    const filePath = path.join(src, file)
    if (isFile(filePath)) {
      fileList.push(filePath)
    } else {
      if (level === 0) return fileList
      let nextLevel = level === -1 ? -1 : level - 1
      getFiles(filePath, fileList, nextLevel)
    }
  }
  return fileList
}

function getFolderTree(path: string, level: number = 0) {
  
}
