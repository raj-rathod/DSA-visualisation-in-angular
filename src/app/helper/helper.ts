export class Helper{
     static setListwithTitleHtml(title: string, list:string[]): string{
          let listHtml = `<h4>${title}</h4>`;
          listHtml += `<ul>`;
          list.forEach(listItem =>{
            listHtml += `<li>${listItem}</li>`;
          });
          listHtml += `</ul>`;

          return listHtml;
     }

     static setExampleImage(title:string, url:string): string {
      return `<h4>${title}</h4> <img src="${url}" class="img-fluid" alt="example image" />`;
     }

     static setHeader(header:string):string {
          return `<p>${header}</p>`
     }

     static setTitleDescription(title:string, description:string):string {
          return `<h4>${title}</h4> <p>${description}</p>`;
     }

     static treeRepresentation(node: any):string {
          const { data, leftChild, rightChild } = node;
          return `
          <div class="node-element">
          <p class="m-0">${data}</p>
          </div>
          ${ leftChild || rightChild ? `
          <div class="node-bottom-line"></div>
          <div class="node-children">
              ${leftChild ? `
                <div class="node left-node">
                    ${this.treeRepresentation(leftChild)}
                </div>
              `:''}
              ${rightChild ? `
                 <div class="node right-node">
                    ${this.treeRepresentation(rightChild)}
                 </div>
              `:''}
          </div>
          `:''}
          `;
     }

     static singleLinkedList(node: any): string {
          if(node !== null){
               const {data, next} = node;
               return `
               <div class="d-flex align-items-center">
                    <div class="data-section border border-end-0 border-2 border-info">
                         <p class="m-0">${data}</p>
                    </div>
                    <div class="link-section border border-2 border-danger">
                         <p class="m-0">Link</p>
                    </div>
                    <div class="arrow">
                         <img src="assets/icons/link-arrow.jpg" width="30" height="10" alt="">
                    </div>
                    ${ next !== null ? `
                    ` : `
                    <p class="m-0 ms-1">Null</p>
                    ` }
               </div>
               ${ next !== null ? `
                    ${this.singleLinkedList(next)}
               ` : `
               ` }
               `;
          }else{
               return `<div class="d-flex align-items-center">
               <div class="data-section border border-end-0 border-2 border-info">
                    <p class="m-0">Null</p>
               </div>
               <div class="link-section border border-2 border-danger">
                    <p class="m-0">Link</p>
               </div>
               <div class="arrow">
                    <img src="assets/icons/link-arrow.jpg" width="30" height="10" alt="">
               </div>
              
               <p class="m-0 ms-1">Null</p>
               
          </div>`;
          }
          
     }
    
}