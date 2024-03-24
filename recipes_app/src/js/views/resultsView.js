import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMsg = 'No recipes found for your search query';
  _successMsg;

  _generateMarkup() {
    // qr stands for queryResult
    return this._data.map(qr =>{
      const segments = window.location.href.split("/")
      const id = segments[segments.length - 1];
      return `
      <li class="preview">
      <a class="preview__link ${qr.id === id ? 'preview__link--active':''}" href="${qr.id}">
        <figure class="preview__fig">
          <img src="${qr.image}" alt="${qr.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${qr.title}</h4>
          <p class="preview__publisher">${qr.publisher}</p>
        </div>
      </a>
    </li>
    `;
    }).join('');
  }



}

export default new ResultsView();
