import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BinaryTree } from '@raj-rathod/dsa-methods';
import { binaryTreeCodeData, binaryTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';
import { Helper } from 'src/app/helper/helper';
import { singleInput, TreeInput } from 'src/app/helper/single-input-meta-data';
import { SearchResultComponent } from 'src/app/shared/components/search-result/search-result.component';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { Operations, TraversalOperations } from 'src/app/shared/enums/basic.enum';
import { CodeHighLight } from 'src/app/shared/interfaces/code-highlight.interface';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.css'],
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
export class BinaryTreeComponent implements OnInit {
  binaryTreeMetaData = binaryTreeMetaData;
  codeHighlightData: CodeHighLight = binaryTreeCodeData;
  traversalData: string = '';
  menuState = 'out';
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
        this.matDialog.open(SearchResultComponent, {
          disableClose: true,
          data:{ 
            title:'Node Search In binary tree',
            searchElement: result,
            result:`${this.binaryTree.findNode !== null ? `
            <p>Node <b>${this.binaryTree.findNode.data}</b> is present in binary tree</p>
            `:`
            <p>Node <b>${result}</b> is not present in the binary tree</p>
            `}`
          },
        });
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
    <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
    <p class='m-0'>Height of binary tree: ${height}</p>
    </div>
    <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
    <p class='m-0'>Levels of binary tree: ${height-1}</p>
    </div>
    <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
    <p class='m-0'>Total number of nodes: ${nodes}</p>
    </div>
    <div class='data-section-active px-3 py-2 me-3 mb-2 rounded'>
    <p class='m-0'>Total number of edges: ${nodes-1}</p>
    </div>
    </div>`
  }
}
