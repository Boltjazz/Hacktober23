class Node:
    """
    A class representing a node in a binary tree.
    """
    def __init__(self, value):
        """
        Initializes a new instance of the Node class.

        :param value: The value of the node.
        """
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    """
    A class representing a binary tree.
    """
    def __init__(self):
        """
        Initializes a new instance of the BinaryTree class.
        """
        self.root = None

    def insert(self, value):
        """
        Inserts a new node with the given value into the binary tree.

        :param value: The value of the node to insert.
        """
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert(value, self.root)

    def _insert(self, value, node):
        """
        Helper method for inserting a new node with the given value into the binary tree.

        :param value: The value of the node to insert.
        :param node: The current node being evaluated.
        """
        direction = input(f"Do you want to insert {value} to the left or right of {node.value}? (l/r): ")
        if direction.lower() == "l":
            if node.left is None:
                node.left = Node(value)
            else:
                self._insert(value, node.left)
        elif direction.lower() == "r":
            if node.right is None:
                node.right = Node(value)
            else:
                self._insert(value, node.right)
        else:
            print("Invalid direction. Please enter 'l' or 'r'.")
            self._insert(value, node)
    def _delete(self, value, node):
        """
        Helper method for deleting the node with the given value from the binary tree.

        :param value: The value of the node to delete.
        :param node: The current node being evaluated.
        """
        if node is None:
            print(f"{value} not found in tree.")
        elif value < node.value:
            node.left = self._delete(value, node.left)
        elif value > node.value:
            node.right = self._delete(value, node.right)
        else:
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            else:
                temp = self._find_min(node.right)
                node.value = temp.value
                node.right = self._delete(temp.value, node.right)
        return node

    def _find_min(self, node):
        """
        Helper method for finding the node with the minimum value in a subtree.

        :param node: The root of the subtree to search.
        :return: The node with the minimum value in the subtree.
        """
        while node.left is not None:
            node = node.left
        return node

    def traverse_inorder(self):
        """
        Traverses the binary tree in inorder.

        :return: A list of the values of the nodes in the binary tree in inorder.
        """
        return self._traverse_inorder(self.root, [])

    def _traverse_inorder(self, node, result):
        """
        Helper method for traversing the binary tree in inorder.

        :param node: The current node being evaluated.
        :param result: The list of values of the nodes visited so far.
        :return: A list of the values of the nodes in the binary tree in inorder.
        """
        if node is not None:
            self._traverse_inorder(node.left, result)
            result.append(node.value)
            self._traverse_inorder(node.right, result)
        return result


if __name__ == "__main__":
    tree = BinaryTree()

    root_value = int(input("Enter the value of the root node: "))
    tree.insert(root_value)

    while True:
        choice = input("Do you want to add another node? (y/n): ")
        if choice.lower() == "n":
            break

        value = int(input("Enter the value of the node: "))
        tree.insert(value)

    print("Inorder traversal:", tree.traverse_inorder())

    while True:
        choice = input("Do you want to delete a node? (y/n): ")
        if choice.lower() == "n":
            break

        value = int(input("Enter the value of the node to delete: "))
        node = tree.find(value)
        if node is None:
            print(f"{value} not found in tree.")
        else:
            confirm = input(f"Are you sure you want to delete {value}? (y/n): ")
            if confirm.lower() == "y":
                tree.delete(value)
                print(f"{value} deleted from tree.")
            else:
                print(f"{value} not deleted from tree.")

    print("Inorder traversal:", tree.traverse_inorder())