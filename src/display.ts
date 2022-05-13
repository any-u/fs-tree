import createTreeNode, { TreeNode } from "./tree"
import { blue, gray } from "picocolors"

function renderTreeNodes(
  nodes: TreeNode[],
  indent = "",
  prevLast = false,
  root = false,
  deep: number
): string[] {
  return nodes.flatMap((child, i) => {
    const last = i === nodes.length - 1
    return renderTreeNode(
      child,
      root ? "" : prevLast ? `${indent}   ` : `${indent}│  `,
      last ? "└─" : "├─",
      last,
      deep
    )
  })
}

function renderTreeNode(
  node: TreeNode,
  indent = "",
  prefix = "|-",
  prevLast = false,
  deep = 9999
) {
  return [
    node.name ? `${gray(`${indent}${prefix} `)}${node.name}` : "",
    ...(deep > 0
      ? renderTreeNodes(node.children, indent, prevLast, false, deep - 1)
      : []),
  ]
}

export default function displayTree(path: string, deep = 9999) {
  const node = createTreeNode(path)

  console.log()
  console.log(blue(node.path))
  console.log(renderTreeNodes(node.children, "", false, true, deep).join("\n"))
}
