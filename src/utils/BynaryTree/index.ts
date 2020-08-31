/**
 *                  8 
 *               /     \
 *             6        25
 *           /   \    /    \
 *          4    8   15    30
 *           \    
 *            5   
 * 
 */


export class TreeNode<T> {
  public left: TreeNode<T>|null = null;
  public right: TreeNode<T>|null = null;

  constructor(
      public value: T
  ) { }
}

export class BinarySearchTree<T> {
  public root: any = null;
  private arrayInorder: any[] = []
  private min_diff: any = null
  private min_diff_key: any = null;

  public getValueRoot(){
    return this.root.value;
  }

  public add<T>(value: T): void {
      const node: TreeNode<T>|null = new TreeNode(value);

      if (this.isEmpty()) {
          this.root = node;
      } else {
          let currentNode = this.root;

          while (currentNode) {
              if (value > currentNode.value) {
                  if (currentNode.right === null) {
                      currentNode.right = node;
                      return;
                  }

                  currentNode = currentNode.right;
              } else {
                  if (currentNode.left === null) {
                      currentNode.left = node;
                      return;
                  }

                  currentNode = currentNode.left;
              }
          }
      }
  }

  public search<T>(value: T): T|null {
      let currentNode: TreeNode<T>|null = this.root;

      while (currentNode) {
          if (value === currentNode.value) {
              return value;
          } else if (value > currentNode.value) {
              currentNode = currentNode.right;
          } else {
              currentNode = currentNode.left;
          }
      }

      return null;
  }

  public delete<T>(value: T): void {
      this.root = this.deleteRecursively(this.root, value);
  }

  private deleteRecursively<T>(root: TreeNode<T>|null, value: T): TreeNode<T>|null {
      if (root === null) {
          return null;
      }

      if (root.value === value) {
          root = this.deleteNode(root); 
      } else if (value < root.value) {
          root.left = this.deleteRecursively(root.left, value);
      } else {
          root.right = this.deleteRecursively(root.right, value);
      }

      return root;
  }

  private deleteNode<T>(root: any): TreeNode<T>|null {
      if (root.left === null && root.right === null) {
          return null;
      } else if (root.left !== null && root.right !== null) {
          const successorNode = this.getSuccessor(root.left);
          const successorValue = successorNode.value;

          root = this.deleteRecursively(root, successorValue);
          root.value = successorValue;

          return root;
      } else if (root.left !== null) {
          return root.left;
      }

      return root.right;
  }

  private getSuccessor<T>(node: TreeNode<T>): TreeNode<T> {
      let currentNode: TreeNode<T> = node;

      while (currentNode) {
          if (currentNode.right === null) {
              break;
          }

          currentNode = currentNode.right;
      }

      return currentNode;
  }

    public isEmpty(): boolean {
        return this.root === null;
    }

    public findMostClosed(behindValue){
        this.min_diff = behindValue * 2;
        this.min_diff_key = -1;
        this.maxDiffUtil(this.root, behindValue);
        return this.min_diff_key;
    }

    private maxDiffUtil(root, behindValue){
        if(root === null) return;
        if(root.value === behindValue){
            this.min_diff_key = behindValue;
            return;
        }
        if(this.min_diff > Math.abs(root.value - behindValue)){
            this.min_diff = Math.abs(root.value - behindValue)
            this.min_diff_key = root.value;
        }
        if(behindValue < root.value){
            this.maxDiffUtil(root.left, behindValue)
        }else{
            this.maxDiffUtil(root.right, behindValue)
        }
    }

    public findMax()  { 
        return this._findMax(this.root);
    } 

    private _findMax(root){
    if(root == null) return;
    var res = root.value;
    var lres = this._findMax(root.left);
    var rres =  this._findMax(root.right);
    if (lres > res) { res = lres;  }    
    if (rres > res) { res = rres;  }
            
    return res; 
    }

  public findMin(){
    return this._findMin(this.root)
 }
  private _findMin(root){
    if(root == null) return;
    var res = root.value;
    var lres = this._findMin(root.left);
    var rres =  this._findMin(root.right);
    if (lres < res) { res = lres;  }    
    if (rres < res) { res = rres;  }
           
   return res; 
}
  public inorder(): any {
      this._inorder(this.root);
      return this.arrayInorder[0];
  }

  private _inorder<T>(root: TreeNode<T>|null): void {
      if (root) {
          this._inorder(root.left);
          this.arrayInorder.push(root.value);
          this._inorder(root.right);
      }
  }

  public preorder(): void {
      this._preorder(this.root);
  }

  private _preorder<T>(root: TreeNode<T>|null): void {
      if (root) {
          this._preorder(root.left);
          this._preorder(root.right);
      }
  }

  public postorder(): void {
      this._postorder(this.root);
  }

  private _postorder<T>(root: TreeNode<T>|null): void {
      if (root) {
          this._postorder(root.left);
          this._postorder(root.right);
      }
  }
  
}
