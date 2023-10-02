class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.value, end=" ")
        inorder_traversal(node.right)

def preorder_traversal(node):
    if node:
        print(node.value, end=" ")
        preorder_traversal(node.left)
        preorder_traversal(node.right)

def postorder_traversal(node):
    if node:
        postorder_traversal(node.left)
        postorder_traversal(node.right)
        print(node.value, end=" ")

def build_binary_tree():
    value = input("Enter the value for the root node: ")
    root = TreeNode(value)
    stack = [root]

    while stack:
        current_node = stack.pop()
        left_value = input(f"Enter the left child value of {current_node.value} (or 'None'): ")
        if left_value.lower() != 'none':
            current_node.left = TreeNode(left_value)
            stack.append(current_node.left)
        
        right_value = input(f"Enter the right child value of {current_node.value} (or 'None'): ")
        if right_value.lower() != 'none':
            current_node.right = TreeNode(right_value)
            stack.append(current_node.right)
    
    return root

# Build a binary tree based on user input
root = build_binary_tree()

print("\nInorder Traversal:")
inorder_traversal(root)

print("\nPreorder Traversal:")
preorder_traversal(root)

print("\nPostorder Traversal:")
postorder_traversal(root)
