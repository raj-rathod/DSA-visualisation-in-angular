import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BinaryTree } from '@raj-rathod/dsa-methods';
import { binaryTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';
import { Helper } from 'src/app/helper/helper';
import { singleInput, TreeInput } from 'src/app/helper/single-input-meta-data';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { Operations, TraversalOperations } from 'src/app/shared/enums/basic.enum';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.css'],
})
export class BinaryTreeComponent implements OnInit {
  binaryTreeMetaData = binaryTreeMetaData;
  traversalData: string = '';
  operationStep = -1;
  traversalOptionStep = -1;
  traversalOptions = TraversalOperations;
  operations = Operations;
  binaryTree: BinaryTree;
  helper = Helper;
  constructor(private matDialog: MatDialog) {
    this.binaryTree = new BinaryTree();
  }

  ngOnInit(): void {}

  createBinaryTree(): void {
    this.operationStep = this.operations.Creation;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: TreeInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.binaryTree.createBinaryTree(result);
      }
    });
  }

  viewSourceCode(): void {
    this.operationStep = this.operations.SourceCode;
  }

  // insertNode(): void {
  //   this.operationStep = this.operations.Insertion;
  //   const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
  //     disableClose: true,
  //     data: singleInput,
  //   });
  //   matDialogRef.afterClosed().subscribe((result) => {
  //     if (result || result === 0) {
  //       this.binaryTree.insertNodeAtLevel()
  //     }
  //   });
  // }

  deleteNode(): void {
    this.operationStep = this.operations.Deletion;
    // const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
    //   disableClose: true,
    //   data: singleInput,
    // });
    // matDialogRef.afterClosed().subscribe((result) => {
    //   if (result || result === 0) {
    //     this.binaryTree.deleteNode(this.binaryTree.root, result);
    //   }
    // });
  }

  searchNode(): void {
    this.operationStep = this.operations.Search;
    this.binaryTree.findNode = null;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.binaryTree.searchNode(this.binaryTree.root, result);
        console.log(this.binaryTree.findNode);
      }
    });
  }

  treeTraversal(): void {
    this.operationStep = this.operations.Traversal;
    this.traversalOptionStep = -1;
  }

  inorderTraversal(): void {
    this.traversalOptionStep = this.traversalOptions.Inorder;
    let inorderTraversalData = `<div class='mt-3'>
    <h4>In-order Tree Traversal</h4>
    </div>`;
    this.traversalData = inorderTraversalData + 
      this.helper.arrayRepresent(this.binaryTree.inOrderTraversal(this.binaryTree.root));
  }

  preorderTraversal(): void {
    this.traversalOptionStep = this.traversalOptions.Preorder;
    let inorderTraversalData = `<div class='mt-3'>
    <h4>Pre-order Tree Traversal</h4>
    </div>`;
    this.traversalData = inorderTraversalData + 
      this.helper.arrayRepresent(this.binaryTree.preOrderTraversal(this.binaryTree.root));
  }

  postorderTraversal(): void {
    this.traversalOptionStep = this.traversalOptions.Postorder;
    let inorderTraversalData = `<div class='mt-3'>
    <h4>Post-order Tree Traversal</h4>
    </div>`;
    this.traversalData = inorderTraversalData + 
      this.helper.arrayRepresent(this.binaryTree.postOrderTraversal(this.binaryTree.root));
  }

  treeInfo(): string{
    const nodes = this.binaryTree.totalNodesCount(this.binaryTree.root);
    const height = this.binaryTree.heightOfBinaryTree(this.binaryTree.root);
    return `<div class='mt-4 d-flex flex-wrap'>
    <p class='me-3'>Height of binary tree: ${height}</p>
    <p class='me-3'>Levels of binary tree: ${height-1}</p>
    <p class='me-3'>Total number of nodes: ${nodes}</p>
    <p>Total number of edges: ${nodes-1}</p>
    </div>`
  }
}
