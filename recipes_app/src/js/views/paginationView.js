import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkupBtn(type, curPage){
    let page;
    if(type === 'prev'){
      return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `
    }
    return `
    <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `
  }

  _generateMarkup(){
    const currPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
  // Page 1 and there are more pages

    if(currPage === 1 && numPages > 1){
      return this._generateMarkupBtn('next',currPage)
    }

  // Last Page
    if(currPage === numPages && numPages > 1){
      return this._generateMarkupBtn('prev', currPage)
    }

    // Any other page
    if(currPage < numPages){
      return `
      ${this._generateMarkupBtn('prev', currPage)}
      ${this._generateMarkupBtn('next',currPage)}
      `
    }
    // Page 1 and there are NO more pages (don't need buttons)
    return ''

    }

    addHandlerClick(handler){
      this._parentElement.addEventListener('click', e =>{
        const btn = e.target.closest('.btn--inline');
        if(!btn) return;

        const goToPage = +btn.dataset.goto;

        handler(goToPage);
      })
    }

}

export default new PaginationView();
