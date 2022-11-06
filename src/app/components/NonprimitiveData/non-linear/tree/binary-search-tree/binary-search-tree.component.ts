import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BinarySearchTree } from '@raj-rathod/dsa-methods';
import { binarySearchTreeMetaData, binaryTreeCodeData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';
import { Helper } from 'src/app/helper/helper';
import { singleInput, TreeInput } from 'src/app/helper/single-input-meta-data';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { Operations, TraversalOperations } from 'src/app/shared/enums/basic.enum';
import { CodeHighLight } from 'src/app/shared/interfaces/code-highlight.interface';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BinarySearchTreeComponent implements OnInit {

  binarySearchTreeMetaData = binarySearchTreeMetaData;
  codeHighlightData: CodeHighLight = binaryTreeCodeData;
  traversalData: string = '';
  menuState = 'out';
  operationStep = -1;
  traversalOptionStep = -1;
  traversalOptions = TraversalOperations;
  operations = Operations;
  binarySearchTree: BinarySearchTree;
  helper = Helper;
  constructor(
    private matDialog: MatDialog
  ) { 
    this.binarySearchTree = new BinarySearchTree();
  }

  ngOnInit(): void {
  }

  sideDrawer(): void{
    if(this.menuState === 'out'){
      this.menuState = 'in';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '8px';
    }else{
      this.menuState = 'out';
      document.body.style.overflow = 'visible';
      document.body.style.marginRight = '0px';
    }
  }

  viewSourceCode(): void {
    this.operationStep = this.operations.SourceCode;
    this.sideDrawer();
  }

  createBinarySearchTree(): void {
    this.operationStep = this.operations.Creation;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: TreeInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.binarySearchTree.createBinarySearchTree(result, false);
      }
    });
  }

  insertNode(): void {
    this.operationStep = this.operations.Insertion;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.binarySearchTree.insertNode(this.binarySearchTree.root, result);
      }
    });
  }

  deleteNode(): void {
    this.operationStep = this.operations.Deletion;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.binarySearchTree.deleteNode(result);
      }
    });
  }

  searchNode(): void {
    this.operationStep = this.operations.Search;
  }

  treeTraversal(): void {
    this.operationStep = this.operations.Traversal;
  }

  inorderTraversal(): void {
    this.traversalOptionStep = this.traversalOptions.Inorder;
    let inorderTraversalData = `<div class='mt-3'>
    <h4>In-order Tree Traversal</h4>
    </div>`;
    this.traversalData = inorderTraversalData + 
      this.helper.arrayRepresent(this.binarySearchTree.inOrderTraversal(this.binarySearchTree.root));
  }

  preorderTraversal(): void {
    this.traversalOptionStep = this.traversalOptions.Preorder;
    let inorderTraversalData = `<div class='mt-3'>
    <h4>Pre-order Tree Traversal</h4>
    </div>`;
    this.traversalData = inorderTraversalData + 
      this.helper.arrayRepresent(this.binarySearchTree.preOrderTraversal(this.binarySearchTree.root));
  }

  postorderTraversal(): void {
    this.traversalOptionStep = this.traversalOptions.Postorder;
    let inorderTraversalData = `<div class='mt-3'>
    <h4>Post-order Tree Traversal</h4>
    </div>`;
    this.traversalData = inorderTraversalData + 
      this.helper.arrayRepresent(this.binarySearchTree.postOrderTraversal(this.binarySearchTree.root));
  }

  // treeInfo(): string{
  //   const nodes = this.binarySearchTree.totalNodesCount(this.binarySearchTree.root);
  //   const height = this.binarySearchTree.heightOfBinaryTree(this.binarySearchTree.root);
  //   return `<div class='mt-4 d-flex flex-wrap'>
  //   <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
  //   <p class='m-0'>Height of binary tree: ${height}</p>
  //   </div>
  //   <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
  //   <p class='m-0'>Levels of binary tree: ${height-1}</p>
  //   </div>
  //   <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
  //   <p class='m-0'>Total number of nodes: ${nodes}</p>
  //   </div>
  //   <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
  //   <p class='m-0'>Total number of edges: ${nodes-1}</p>
  //   </div>
  //   </div>`
  // }

}
