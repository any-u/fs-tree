import { basename, join } from "path"
import { readdirSync } from "fs-extra"
import { isFile } from "./file"

export interface TreeNode {
  name: string
  path: string
  type: "file" | "folder"
  children: TreeNode[]
}

function getChildren(path: string) {
  const children = readdirSync(path)
  return children.map((child) => {
    const childPath = join(path, child)
    return createTreeNode(childPath)
  })
}

export default function createTreeNode(path: string) {
  const res = {} as TreeNode

  const isFilePath = isFile(path)

  res.name = basename(path)
  res.path = path
  res.type = isFilePath ? "file" : "folder"
  res.children = isFilePath ? [] : getChildren(path)

  return res
}
