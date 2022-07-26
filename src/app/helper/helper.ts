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
}