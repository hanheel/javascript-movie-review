var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _footer, _button, _restProps, _background, _content, _Modal_instances, bindEvent_fn, bindButtonClickEvent_fn, bindKeyUpEvent_fn, bindBackgroundClickEvent_fn, _container, _data, _selectedStars, _MovieDetail_instances, getStoredRating_fn, updateMyRateIcons_fn, updateMyRateScore_fn, updateMyRateMessage_fn, getSelectedStarSrc_fn, bindIconClickEvent_fn, _container2, _modal, _data2, _MainBanner_instances, detailButtonElement_fn, modalElement_fn, bindDetailButtonClickEvent_fn, _container3, _data3, _MovieItem_instances, matchImgUrl_fn, bindClickEvent_fn, _container4, _errorMessage, _container5, _movieItemComponents, _status, _MovieGrid_instances, emptyListElement_fn, _container6, _text, _container7, _modal2, _movieGrid, _mainBanner, _movieListData, _currentPage, _modalData, _isFetching, _unbindScrollEvent, _MainPage_instances, titleElement_fn, mainBannerElement_fn, movieGridElement_fn, modalElement_fn2, _loadMoreData, guardedLoadMore_fn, bindMovieSelectEvent_fn, _container8, _modal3, _movieGrid2, _movieListData2, _query, _currentPage2, _totalPage, _isFetching2, _unbindScrollEvent2, _modalData2, _SearchPage_instances, movieGridElement_fn2, _loadMoreData2, guardedLoadMore_fn2, titleElement_fn2, modalElement_fn3, bindMovieSelectEvent_fn2, _container9, _container10, _input, _searchValue, _SearchBar_instances, bindInputEvent_fn, bindSubmitEvent_fn, search_fn, bindEvent_fn2, _container11, _searchBar, _Header_instances, bindLogoClickEvent_fn, _container12, _header, _footer2, _contentContainer;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class Footer {
  constructor() {
    __privateAdd(this, _footer);
    __privateSet(this, _footer, document.createElement("footer"));
    __privateGet(this, _footer).className = "footer";
    this.render();
  }
  render() {
    __privateGet(this, _footer).innerHTML = `
        <p><img src="./woowacourse_logo.png" width="180" /></p>
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      `;
  }
  get element() {
    return __privateGet(this, _footer);
  }
}
_footer = new WeakMap();
const DEBUG_ERROR = {
  getNoElementMessage: (element) => `요소가 존재하지 않습니다 : ${element}`,
  getNoComponentMessage: (component) => `컴포넌트가 존재하지 않습니다 : ${component}`
};
const DEBUG_ERROR_MESSAGE = {
  NO_DATA: "데이터가 존재하지 않습니다",
  NO_EVENT_TARGET: "이벤트 타깃이 존재하지 않습니다.",
  NO_HTML_ELEMENT: "이벤트 타겟이 HTMLElement가 아닙니다."
};
class Button {
  constructor({ size, ...rest }) {
    __privateAdd(this, _button);
    __privateAdd(this, _restProps);
    __privateSet(this, _button, document.createElement("button"));
    __privateGet(this, _button).classList.add(`button--${size}`);
    __privateGet(this, _button).classList.add(`text-button--${size}`);
    __privateSet(this, _restProps, rest);
    this.applyPropsToButton();
  }
  applyPropsToButton() {
    Object.entries(__privateGet(this, _restProps)).forEach(([key, value]) => {
      if (key in __privateGet(this, _button)) {
        __privateGet(this, _button)[key] = value;
        return;
      }
      __privateGet(this, _button).setAttribute(key, String(value));
    });
  }
  get element() {
    return __privateGet(this, _button);
  }
}
_button = new WeakMap();
_restProps = new WeakMap();
class Modal {
  constructor() {
    __privateAdd(this, _Modal_instances);
    __privateAdd(this, _background);
    __privateAdd(this, _content);
    __privateSet(this, _background, document.createElement("div"));
    __privateGet(this, _background).classList.add("modal-background");
    __privateGet(this, _background).id = "modalBackground";
    __privateSet(this, _content, document.createElement("div"));
    this.render();
    __privateMethod(this, _Modal_instances, bindEvent_fn).call(this);
  }
  get element() {
    return __privateGet(this, _background);
  }
  render() {
    __privateGet(this, _background).innerHTML = `
  <div class="modal">
    <button class="close-modal" id="closeModal">
      <img src="./modal_button_close.png" />
    </button>
  </div>
    `;
    const modal = __privateGet(this, _background).querySelector(".modal");
    if (!modal) throw new Error(DEBUG_ERROR.getNoElementMessage("modal"));
    modal.appendChild(__privateGet(this, _content));
  }
  open() {
    document.body.classList.add("modal-open");
    __privateGet(this, _background).classList.add("active");
  }
  close() {
    document.body.classList.remove("modal-open");
    __privateGet(this, _background).classList.remove("active");
  }
  setContent(content) {
    __privateSet(this, _content, content);
    this.render();
    __privateMethod(this, _Modal_instances, bindButtonClickEvent_fn).call(this);
  }
}
_background = new WeakMap();
_content = new WeakMap();
_Modal_instances = new WeakSet();
bindEvent_fn = function() {
  __privateMethod(this, _Modal_instances, bindButtonClickEvent_fn).call(this);
  __privateMethod(this, _Modal_instances, bindKeyUpEvent_fn).call(this);
  __privateMethod(this, _Modal_instances, bindBackgroundClickEvent_fn).call(this);
};
bindButtonClickEvent_fn = function() {
  const closeModal = __privateGet(this, _background).querySelector("#closeModal");
  if (!closeModal) throw new Error(DEBUG_ERROR.getNoElementMessage("closeModal"));
  closeModal.addEventListener("click", () => {
    this.close();
  });
};
bindKeyUpEvent_fn = function() {
  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") this.close();
  });
};
bindBackgroundClickEvent_fn = function() {
  __privateGet(this, _background).addEventListener("click", (event) => {
    if (event.target === __privateGet(this, _background)) {
      this.close();
    }
  });
};
const RATE_MESSAGE = {
  0: "별점을 남겨 주세요",
  1: "별로였어요",
  2: "아쉬운 작품이에요",
  3: "그럭저럭 볼만했어요",
  4: "재밌게 봤어요",
  5: "명작이에요"
};
function getStarSelectionArray(selectedStars) {
  const STAR_TOTAL = 5;
  const starArray = Array.from({ length: STAR_TOTAL }, (_, star) => star < selectedStars);
  return starArray;
}
function calculateRate(selectedStars) {
  const MULTIPLIER = 2;
  return selectedStars * MULTIPLIER;
}
function isStarCount(value) {
  return Object.keys(RATE_MESSAGE).map(Number).includes(value);
}
function getRatingMessage(selectedStars) {
  if (isStarCount(selectedStars)) return RATE_MESSAGE[selectedStars];
}
class MovieDetail {
  constructor({ data }) {
    __privateAdd(this, _MovieDetail_instances);
    __privateAdd(this, _container);
    __privateAdd(this, _data);
    __privateAdd(this, _selectedStars, 0);
    __privateSet(this, _container, document.createElement("div"));
    __privateGet(this, _container).classList.add("movie__detail-container");
    __privateSet(this, _data, data);
    __privateMethod(this, _MovieDetail_instances, getStoredRating_fn).call(this);
    this.render();
    __privateMethod(this, _MovieDetail_instances, bindIconClickEvent_fn).call(this);
  }
  get element() {
    return __privateGet(this, _container);
  }
  render() {
    __privateGet(this, _container).innerHTML = `
    <div class="movie__detail-image">
      <img src=${__privateGet(this, _data).imgUrl} />
    </div>
    <div class="movie__detail-description">
      <h2 class="movie__detail-title">${__privateGet(this, _data).title}</h2>
      <p class="movie__detail-category">${__privateGet(this, _data).releasedDate} · ${__privateGet(this, _data).category}</p>
      <p class="movie__detail-rate"><img src="./star_filled.png" class="star" /><span class="text-body rate__detail">${__privateGet(this, _data).score}</span></p>
      <hr />
      <h3 class="text-body">내 별점</h3>
      <div class="myrate"> 
      <div class="myrate__panel">
        <div class="myrate__icons">
         <img src="./star_empty.png" data-index="1" class="myrate__icon" />
         <img src="./star_empty.png" data-index="2" class="myrate__icon" />
         <img src="./star_empty.png" data-index="3" class="myrate__icon" />
         <img src="./star_empty.png" data-index="4" class="myrate__icon" />
         <img src="./star_empty.png" data-index="5" class="myrate__icon" />
        </div>
        <p class="myrate__score text-body">
      (${calculateRate(__privateGet(this, _selectedStars))}/10)
        </p>
    </div>
        <p class="myrate__message text-body">
      ${getRatingMessage(__privateGet(this, _selectedStars))}
        </p>
      </div>
      <hr />
      <h3 class="text-body">줄거리</h3>
      <p class="detail">
      ${__privateGet(this, _data).description.length !== 0 ? __privateGet(this, _data).description : "줄거리가 없습니다"}
      </p>
    </div>
     `;
    __privateMethod(this, _MovieDetail_instances, updateMyRateIcons_fn).call(this);
  }
}
_container = new WeakMap();
_data = new WeakMap();
_selectedStars = new WeakMap();
_MovieDetail_instances = new WeakSet();
getStoredRating_fn = function() {
  const storedSelectedStars = localStorage.getItem(String(__privateGet(this, _data).id));
  if (storedSelectedStars) {
    __privateSet(this, _selectedStars, Number(storedSelectedStars));
  }
};
updateMyRateIcons_fn = function() {
  const Icons = __privateGet(this, _container).querySelectorAll(".myrate__icon");
  const selectionArray = getStarSelectionArray(__privateGet(this, _selectedStars));
  Icons.forEach((icon, index) => {
    icon.setAttribute("src", __privateMethod(this, _MovieDetail_instances, getSelectedStarSrc_fn).call(this, selectionArray[index]));
  });
  __privateMethod(this, _MovieDetail_instances, bindIconClickEvent_fn).call(this);
};
updateMyRateScore_fn = function() {
  const scoreContainer = __privateGet(this, _container).querySelector(".myrate__score");
  if (!scoreContainer) throw new Error(DEBUG_ERROR.getNoElementMessage("myrate__score"));
  scoreContainer.innerHTML = `(${calculateRate(__privateGet(this, _selectedStars))}/10)`;
};
updateMyRateMessage_fn = function() {
  const messageContainer = __privateGet(this, _container).querySelector(".myrate__message");
  if (!messageContainer) throw new Error(DEBUG_ERROR.getNoElementMessage("myrate__message"));
  messageContainer.innerHTML = `${getRatingMessage(__privateGet(this, _selectedStars))}`;
};
getSelectedStarSrc_fn = function(isFilled) {
  return isFilled ? "./star_filled.png" : "./star_empty.png";
};
bindIconClickEvent_fn = function() {
  __privateGet(this, _container).querySelectorAll(".myrate__icon").forEach(
    (element) => element.addEventListener("click", (event) => {
      if (!event.target) throw new Error(DEBUG_ERROR_MESSAGE.NO_EVENT_TARGET);
      if (!(event.target instanceof HTMLElement)) {
        console.warn(DEBUG_ERROR_MESSAGE.NO_HTML_ELEMENT);
        return;
      }
      __privateSet(this, _selectedStars, Number(event.target.dataset.index));
      localStorage.setItem(String(__privateGet(this, _data).id), String(__privateGet(this, _selectedStars)));
      __privateMethod(this, _MovieDetail_instances, updateMyRateIcons_fn).call(this);
      __privateMethod(this, _MovieDetail_instances, updateMyRateScore_fn).call(this);
      __privateMethod(this, _MovieDetail_instances, updateMyRateMessage_fn).call(this);
    })
  );
};
const mainBannerSkeletonTemplate = `
       <div class="overlay skeleton" aria-hidden="true">
         <img class="main-banner__image"/>
       </div>
       
       <div class="main-banner__info skeleton">

         <div class="main-banner__rate">
           <img src="./star_empty.png" class="main-banner__rating-star" />
           <span class="main-banner__rate-value text-subtitle"></span>
         </div>

         <div class="main-banner__title text-title"></div>
       </div>
`;
class MainBanner {
  constructor() {
    __privateAdd(this, _MainBanner_instances);
    __privateAdd(this, _container2);
    __privateAdd(this, _modal, null);
    __privateAdd(this, _data2, null);
    __privateSet(this, _container2, document.createElement("div"));
    __privateGet(this, _container2).classList.add("main-banner");
    __privateSet(this, _data2, null);
    this.render();
  }
  render() {
    if (!__privateGet(this, _data2)) {
      __privateGet(this, _container2).innerHTML = `${mainBannerSkeletonTemplate}`;
      return;
    }
    __privateGet(this, _container2).innerHTML = `
       <div class="overlay" aria-hidden="true">
         <img class="main-banner__image" src=${__privateGet(this, _data2).imgUrl} alt=${__privateGet(this, _data2).title} />
       </div>
       
       <div class="main-banner__info">

         <div class="main-banner__rate">
           <img src="./star_empty.png" class="main-banner__rating-star" />
           <span class="main-banner__rate-value text-subtitle">${__privateGet(this, _data2).score}</span>
         </div>

         <div class="main-banner__title text-title">${__privateGet(this, _data2).title}</div>
       </div>
    `;
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("main-banner__button");
    buttonContainer.appendChild(__privateMethod(this, _MainBanner_instances, detailButtonElement_fn).call(this));
    const mainBannerInfo = __privateGet(this, _container2).querySelector(".main-banner__info");
    if (mainBannerInfo) {
      mainBannerInfo.appendChild(buttonContainer);
    }
  }
  setData(data) {
    __privateSet(this, _data2, data);
    this.render();
  }
  get element() {
    return __privateGet(this, _container2);
  }
}
_container2 = new WeakMap();
_modal = new WeakMap();
_data2 = new WeakMap();
_MainBanner_instances = new WeakSet();
detailButtonElement_fn = function() {
  return new Button({
    size: "small",
    innerText: "자세히 보기",
    onclick: () => __privateMethod(this, _MainBanner_instances, bindDetailButtonClickEvent_fn).call(this)
  }).element;
};
modalElement_fn = function() {
  __privateSet(this, _modal, new Modal());
  return __privateGet(this, _modal).element;
};
bindDetailButtonClickEvent_fn = function() {
  if (!__privateGet(this, _data2)) throw new Error(DEBUG_ERROR_MESSAGE.NO_DATA);
  const movieDetail = new MovieDetail({ data: __privateGet(this, _data2) }).element;
  __privateGet(this, _container2).appendChild(__privateMethod(this, _MainBanner_instances, modalElement_fn).call(this));
  if (!__privateGet(this, _modal)) throw new Error(DEBUG_ERROR.getNoComponentMessage("Modal"));
  __privateGet(this, _modal).setContent(movieDetail);
  __privateGet(this, _modal).open();
};
const movieItemSkeletonTemplate = `
      <img class="thumbnail skeleton"  />
      <div class="item-desc">
        <p class="rate skeleton">
          <img src="./star_empty.png" class="star" />
          <span class="skeleton"></span>
        </p>
        <strong class="skeleton text-body"></strong>
      </div>`;
class MovieItem {
  constructor() {
    __privateAdd(this, _MovieItem_instances);
    __privateAdd(this, _container3);
    __privateAdd(this, _data3, null);
    __privateSet(this, _container3, document.createElement("li"));
    __privateGet(this, _container3).classList.add("item");
    __privateSet(this, _data3, null);
    this.render();
    __privateMethod(this, _MovieItem_instances, bindClickEvent_fn).call(this);
  }
  get element() {
    return __privateGet(this, _container3);
  }
  hasData() {
    return __privateGet(this, _data3) !== null;
  }
  render() {
    __privateGet(this, _container3).innerHTML = "";
    if (!__privateGet(this, _data3)) {
      __privateGet(this, _container3).innerHTML = `${movieItemSkeletonTemplate}`;
      return;
    }
    __privateGet(this, _container3).innerHTML = `
      <img class="thumbnail" src=${__privateMethod(this, _MovieItem_instances, matchImgUrl_fn).call(this)} alt=${__privateGet(this, _data3).title} />
      <div class="item-desc">
        <p class="rate">
          <img src="./star_empty.png" class="star" />
          <span>${__privateGet(this, _data3).score}</span>
        </p>
        <strong class="text-body">${__privateGet(this, _data3).title}</strong>
      </div>
  `;
  }
  setData(data) {
    __privateSet(this, _data3, data);
    this.render();
  }
}
_container3 = new WeakMap();
_data3 = new WeakMap();
_MovieItem_instances = new WeakSet();
matchImgUrl_fn = function() {
  if (!__privateGet(this, _data3)) throw new Error(DEBUG_ERROR_MESSAGE.NO_DATA);
  if (__privateGet(this, _data3).imgUrl.includes("null")) {
    return "./empty-item.png";
  }
  return __privateGet(this, _data3).imgUrl;
};
bindClickEvent_fn = function() {
  __privateGet(this, _container3).addEventListener("click", () => {
    const event = new CustomEvent("movieSelect", {
      detail: __privateGet(this, _data3),
      bubbles: true
    });
    __privateGet(this, _container3).dispatchEvent(event);
  });
};
const ERROR_MESSAGE = {
  NO_RESULT: "저런! 검색 결과가 없네요 😅",
  FETCH_FAILED: "서버에서 데이터를 불러 오는데 실패했어요 😭"
};
class ErrorMessage {
  constructor({ errorMessage }) {
    __privateAdd(this, _container4);
    __privateAdd(this, _errorMessage);
    __privateSet(this, _container4, document.createElement("div"));
    __privateGet(this, _container4).classList.add("error-message");
    __privateSet(this, _errorMessage, errorMessage);
    this.render();
  }
  render() {
    __privateGet(this, _container4).innerHTML = `
        <img src="./no-result.png" alt="으아아 행성이"/>
        <p class="error-message__detail text-subtitle">${__privateGet(this, _errorMessage)}</p>
    `;
  }
  get element() {
    return __privateGet(this, _container4);
  }
}
_container4 = new WeakMap();
_errorMessage = new WeakMap();
const APP_CONFIG = {
  BASE_PATH: "/javascript-movie-review"
};
const ASSET_PATHS = {
  IMAGE_BASE: "https://image.tmdb.org/t/p/w500"
};
const MOVIE_API = {
  getSearchUrl: (query, page) => `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR&include_adult=false&page=${page}`,
  getPopularUrl: (page) => `https://api.themoviedb.org/3/movie/popular?language=ko-KR&include_adult=false&page=${page}`
};
const FETCH_COUNT = 20;
const GENRE_MAP = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코미디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스터리",
  10749: "로맨스",
  878: "SF",
  10770: "TV 영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부"
};
class MovieGrid {
  constructor() {
    __privateAdd(this, _MovieGrid_instances);
    __privateAdd(this, _container5);
    __privateAdd(this, _movieItemComponents, []);
    __privateAdd(this, _status, "loading");
    __privateSet(this, _container5, document.createElement("ul"));
    __privateGet(this, _container5).classList.add("thumbnail-list");
    this.render();
  }
  render() {
    __privateGet(this, _container5).innerHTML = "";
    if (__privateGet(this, _status) === "empty") {
      __privateGet(this, _container5).innerHTML = __privateMethod(this, _MovieGrid_instances, emptyListElement_fn).call(this);
      return;
    }
    __privateGet(this, _movieItemComponents).map((movieItem) => __privateGet(this, _container5).appendChild(movieItem.element));
  }
  setStatus(status) {
    __privateSet(this, _status, status);
    this.render();
  }
  appendSkeletonItems() {
    for (let i = 0; i < FETCH_COUNT; i++) {
      const item = new MovieItem();
      __privateGet(this, _movieItemComponents).push(item);
      __privateGet(this, _container5).appendChild(item.element);
    }
  }
  replaceLastNItems(data) {
    for (let i = 0; i < data.length; i++) {
      const index = __privateGet(this, _movieItemComponents).length - data.length + i;
      if (__privateGet(this, _movieItemComponents)[index]) {
        __privateGet(this, _movieItemComponents)[index].setData(data[i]);
      }
    }
  }
  resetSkeletonItems() {
    __privateGet(this, _movieItemComponents).filter((component) => {
      const isDataExist = component.hasData();
      if (!isDataExist) {
        component.element.remove();
      }
      return isDataExist;
    });
  }
  get element() {
    return __privateGet(this, _container5);
  }
}
_container5 = new WeakMap();
_movieItemComponents = new WeakMap();
_status = new WeakMap();
_MovieGrid_instances = new WeakSet();
emptyListElement_fn = function() {
  return new ErrorMessage({ errorMessage: ERROR_MESSAGE.NO_RESULT }).element.outerHTML;
};
class Title {
  constructor({ text }) {
    __privateAdd(this, _container6);
    __privateAdd(this, _text);
    __privateSet(this, _container6, document.createElement("h2"));
    __privateGet(this, _container6).classList.add("title");
    __privateSet(this, _text, text);
    this.render();
  }
  render() {
    __privateGet(this, _container6).innerText = `${__privateGet(this, _text)}`;
  }
  get element() {
    return __privateGet(this, _container6);
  }
}
_container6 = new WeakMap();
_text = new WeakMap();
async function apiClient(url, options) {
  const requestOptions = {
    method: options.method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjg2NjAzNjJjNTFlZDdiYmFhYTY0ZjJiNDA1N2RjMCIsIm5iZiI6MTc0MjI3ODUwNy42NDMwMDAxLCJzdWIiOiI2N2Q5MGY2YmMwNTY2YTEwMGEwODgwYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PJb_lmB5uMCu2xFnSHsP_USp8A6S7CI5rL8l_6u1euk"}`,
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await fetch(url, requestOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    redirectToPage("/error");
    throw err;
  }
}
async function extractedData(url) {
  const movieJSON = await fetchMovieList(url);
  console.log(movieJSON.results);
  const movieListData = movieJSON.results.map((movieItem) => ({
    id: movieItem.id,
    title: movieItem.title,
    imgUrl: `${ASSET_PATHS.IMAGE_BASE}${movieItem.poster_path}`,
    score: Number(movieItem.vote_average.toFixed(1)),
    category: movieItem.genre_ids.map((genre) => GENRE_MAP[genre]),
    description: movieItem.overview,
    releasedDate: new Date(movieItem.release_date).getFullYear()
  }));
  console.log(movieListData);
  const totalPage = movieJSON.total_pages;
  return { movieListData, totalPage };
}
async function fetchMovieList(url) {
  return await apiClient(url, { method: "GET" });
}
const handleBottomScroll = (callback) => {
  const OFFSET = 20;
  const currentScrollBottom = window.scrollY + window.innerHeight;
  const triggerPosition = document.body.offsetHeight - OFFSET;
  if (currentScrollBottom >= triggerPosition) {
    callback();
  }
};
function bindScrollEvent(onScroll) {
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}
class MainPage {
  constructor() {
    __privateAdd(this, _MainPage_instances);
    __privateAdd(this, _container7);
    __privateAdd(this, _modal2, null);
    __privateAdd(this, _movieGrid, null);
    __privateAdd(this, _mainBanner, null);
    __privateAdd(this, _movieListData, []);
    __privateAdd(this, _currentPage, 1);
    __privateAdd(this, _modalData, {
      id: 0,
      imgUrl: "/",
      score: 10,
      title: "",
      description: "",
      category: [""],
      releasedDate: (/* @__PURE__ */ new Date()).getFullYear()
    });
    __privateAdd(this, _isFetching, false);
    __privateAdd(this, _unbindScrollEvent, () => {
    });
    __privateAdd(this, _loadMoreData, async () => {
      if (!__privateGet(this, _movieGrid)) {
        throw new Error(DEBUG_ERROR.getNoComponentMessage("MovieGrid"));
      }
      __privateSet(this, _currentPage, __privateGet(this, _currentPage) + 1);
      __privateGet(this, _movieGrid).appendSkeletonItems();
      const { movieListData } = await extractedData(MOVIE_API.getPopularUrl(__privateGet(this, _currentPage)));
      __privateSet(this, _movieListData, [...__privateGet(this, _movieListData), ...movieListData]);
      __privateGet(this, _movieGrid).replaceLastNItems(movieListData);
    });
    __privateSet(this, _container7, document.createElement("div"));
    __privateGet(this, _container7).classList.add("main-page");
    __privateGet(this, _isFetching);
    this.init();
  }
  get element() {
    return __privateGet(this, _container7);
  }
  async init() {
    this.render();
    if (!__privateGet(this, _movieGrid)) {
      throw new Error(DEBUG_ERROR.getNoComponentMessage("MovieGrid"));
    }
    if (!__privateGet(this, _mainBanner)) {
      throw new Error(DEBUG_ERROR.getNoComponentMessage("MainBanner"));
    }
    __privateGet(this, _movieGrid).appendSkeletonItems();
    __privateGet(this, _movieGrid).setStatus("loading");
    const { movieListData } = await extractedData(MOVIE_API.getPopularUrl(__privateGet(this, _currentPage)));
    __privateSet(this, _movieListData, movieListData);
    this.setGridStatus();
    __privateGet(this, _movieGrid).replaceLastNItems(movieListData);
    __privateGet(this, _mainBanner).setData(__privateGet(this, _movieListData)[0]);
    __privateSet(this, _unbindScrollEvent, bindScrollEvent(() => handleBottomScroll(() => __privateMethod(this, _MainPage_instances, guardedLoadMore_fn).call(this))));
    __privateMethod(this, _MainPage_instances, bindMovieSelectEvent_fn).call(this);
  }
  render() {
    __privateGet(this, _container7).innerHTML = "";
    __privateGet(this, _container7).appendChild(__privateMethod(this, _MainPage_instances, mainBannerElement_fn).call(this));
    __privateGet(this, _container7).appendChild(__privateMethod(this, _MainPage_instances, titleElement_fn).call(this));
    __privateGet(this, _container7).appendChild(__privateMethod(this, _MainPage_instances, modalElement_fn2).call(this));
    this.renderDynamicSection();
  }
  setGridStatus() {
    if (!__privateGet(this, _movieGrid)) {
      throw new Error(DEBUG_ERROR.getNoComponentMessage("MovieGrid"));
    }
    if (__privateGet(this, _movieListData).length === 0) {
      __privateGet(this, _movieGrid).setStatus("empty");
      return;
    }
    __privateGet(this, _movieGrid).setStatus("loaded");
  }
  renderDynamicSection() {
    __privateGet(this, _container7).appendChild(__privateMethod(this, _MainPage_instances, movieGridElement_fn).call(this));
  }
  destroy() {
    __privateGet(this, _unbindScrollEvent).call(this);
  }
}
_container7 = new WeakMap();
_modal2 = new WeakMap();
_movieGrid = new WeakMap();
_mainBanner = new WeakMap();
_movieListData = new WeakMap();
_currentPage = new WeakMap();
_modalData = new WeakMap();
_isFetching = new WeakMap();
_unbindScrollEvent = new WeakMap();
_MainPage_instances = new WeakSet();
titleElement_fn = function() {
  return new Title({ text: "지금 인기 있는 영화" }).element;
};
mainBannerElement_fn = function() {
  __privateSet(this, _mainBanner, new MainBanner());
  return __privateGet(this, _mainBanner).element;
};
movieGridElement_fn = function() {
  __privateSet(this, _movieGrid, new MovieGrid());
  return __privateGet(this, _movieGrid).element;
};
modalElement_fn2 = function() {
  __privateSet(this, _modal2, new Modal());
  return __privateGet(this, _modal2).element;
};
_loadMoreData = new WeakMap();
guardedLoadMore_fn = function() {
  if (__privateGet(this, _isFetching)) return;
  __privateSet(this, _isFetching, true);
  __privateGet(this, _loadMoreData).call(this).finally(() => {
    __privateSet(this, _isFetching, false);
  });
};
bindMovieSelectEvent_fn = function() {
  __privateGet(this, _container7).addEventListener("movieSelect", (event) => {
    __privateSet(this, _modalData, event.detail);
    const movieDetail = new MovieDetail({ data: __privateGet(this, _modalData) }).element;
    if (!__privateGet(this, _modal2)) throw new Error(DEBUG_ERROR.getNoComponentMessage("Modal"));
    __privateGet(this, _modal2).setContent(movieDetail);
    __privateGet(this, _modal2).open();
  });
};
class SearchPage {
  constructor() {
    __privateAdd(this, _SearchPage_instances);
    __privateAdd(this, _container8);
    __privateAdd(this, _modal3, null);
    __privateAdd(this, _movieGrid2, null);
    __privateAdd(this, _movieListData2, []);
    __privateAdd(this, _query);
    __privateAdd(this, _currentPage2, 1);
    __privateAdd(this, _totalPage, 0);
    __privateAdd(this, _isFetching2, false);
    __privateAdd(this, _unbindScrollEvent2, () => {
    });
    __privateAdd(this, _modalData2, {
      id: 0,
      imgUrl: "/",
      score: 10,
      title: "",
      description: "",
      category: [""],
      releasedDate: (/* @__PURE__ */ new Date()).getFullYear()
    });
    __privateAdd(this, _loadMoreData2, async () => {
      __privateSet(this, _currentPage2, __privateGet(this, _currentPage2) + 1);
      if (!__privateGet(this, _movieGrid2)) throw new Error(DEBUG_ERROR.getNoComponentMessage("MovieGrid"));
      __privateGet(this, _movieGrid2).appendSkeletonItems();
      const { movieListData } = await extractedData(MOVIE_API.getSearchUrl(__privateGet(this, _query), __privateGet(this, _currentPage2)));
      __privateSet(this, _movieListData2, movieListData);
      __privateGet(this, _movieGrid2).replaceLastNItems(__privateGet(this, _movieListData2));
      if (__privateGet(this, _currentPage2) === __privateGet(this, _totalPage)) {
        __privateGet(this, _movieGrid2).resetSkeletonItems();
        return;
      }
    });
    __privateSet(this, _container8, document.createElement("div"));
    __privateGet(this, _container8).classList.add("search-page");
    __privateGet(this, _isFetching2);
    __privateGet(this, _movieListData2);
    const params = new URLSearchParams(window.location.search);
    __privateSet(this, _query, params.get("query") ?? "");
    this.init();
  }
  async init() {
    this.render();
    if (!__privateGet(this, _movieGrid2)) {
      throw new Error(DEBUG_ERROR.getNoComponentMessage("MovieGrid"));
    }
    __privateGet(this, _movieGrid2).appendSkeletonItems();
    __privateGet(this, _movieGrid2).setStatus("loading");
    if (__privateGet(this, _query)) {
      const { movieListData, totalPage } = await extractedData(MOVIE_API.getSearchUrl(__privateGet(this, _query), __privateGet(this, _currentPage2)));
      __privateSet(this, _movieListData2, movieListData);
      this.setGridStatus();
      __privateGet(this, _movieGrid2).replaceLastNItems(__privateGet(this, _movieListData2));
      __privateSet(this, _totalPage, totalPage);
    }
    __privateSet(this, _unbindScrollEvent2, bindScrollEvent(() => handleBottomScroll(() => __privateMethod(this, _SearchPage_instances, guardedLoadMore_fn2).call(this))));
    __privateMethod(this, _SearchPage_instances, bindMovieSelectEvent_fn2).call(this);
  }
  render() {
    __privateGet(this, _container8).innerHTML = "";
    __privateGet(this, _container8).appendChild(__privateMethod(this, _SearchPage_instances, titleElement_fn2).call(this));
    this.renderDynamicSection();
  }
  setGridStatus() {
    if (!__privateGet(this, _movieGrid2)) {
      throw new Error(DEBUG_ERROR.getNoComponentMessage("MovieGrid"));
    }
    if (__privateGet(this, _movieListData2).length === 0) {
      __privateGet(this, _movieGrid2).setStatus("empty");
      return;
    }
    __privateGet(this, _movieGrid2).setStatus("loaded");
  }
  renderDynamicSection() {
    __privateGet(this, _container8).appendChild(__privateMethod(this, _SearchPage_instances, movieGridElement_fn2).call(this));
    __privateGet(this, _container8).appendChild(__privateMethod(this, _SearchPage_instances, modalElement_fn3).call(this));
  }
  destroy() {
    __privateGet(this, _unbindScrollEvent2).call(this);
  }
  get element() {
    return __privateGet(this, _container8);
  }
}
_container8 = new WeakMap();
_modal3 = new WeakMap();
_movieGrid2 = new WeakMap();
_movieListData2 = new WeakMap();
_query = new WeakMap();
_currentPage2 = new WeakMap();
_totalPage = new WeakMap();
_isFetching2 = new WeakMap();
_unbindScrollEvent2 = new WeakMap();
_modalData2 = new WeakMap();
_SearchPage_instances = new WeakSet();
movieGridElement_fn2 = function() {
  __privateSet(this, _movieGrid2, new MovieGrid());
  return __privateGet(this, _movieGrid2).element;
};
_loadMoreData2 = new WeakMap();
guardedLoadMore_fn2 = function() {
  if (__privateGet(this, _currentPage2) >= __privateGet(this, _totalPage)) return;
  if (__privateGet(this, _isFetching2)) return;
  __privateSet(this, _isFetching2, true);
  __privateGet(this, _loadMoreData2).call(this).finally(() => {
    __privateSet(this, _isFetching2, false);
  });
};
titleElement_fn2 = function() {
  return new Title({ text: `"${__privateGet(this, _query)}" 검색 결과` }).element;
};
modalElement_fn3 = function() {
  __privateSet(this, _modal3, new Modal());
  return __privateGet(this, _modal3).element;
};
bindMovieSelectEvent_fn2 = function() {
  __privateGet(this, _container8).addEventListener("movieSelect", (event) => {
    __privateSet(this, _modalData2, event.detail);
    const movieDetail = new MovieDetail({ data: __privateGet(this, _modalData2) }).element;
    if (!__privateGet(this, _modal3)) throw new Error(DEBUG_ERROR.getNoComponentMessage("Modal"));
    __privateGet(this, _modal3).setContent(movieDetail);
    __privateGet(this, _modal3).open();
  });
};
class ErrorPage {
  constructor() {
    __privateAdd(this, _container9);
    __privateSet(this, _container9, document.createElement("div"));
  }
  get element() {
    return __privateGet(this, _container9).appendChild(new ErrorMessage({ errorMessage: ERROR_MESSAGE.FETCH_FAILED }).element);
  }
}
_container9 = new WeakMap();
let previousPageInstance = null;
function initRouter() {
  window.addEventListener("popstate", () => {
    renderContent();
  });
}
function routes() {
  return {
    "/": () => new MainPage(),
    "/search": () => new SearchPage(),
    "/error": () => new ErrorPage()
  };
}
function destroyEvent() {
  if (previousPageInstance && previousPageInstance.destroy) previousPageInstance.destroy();
}
async function renderInnerContentsByRoute() {
  let currentPath = window.location.pathname;
  if (currentPath.startsWith(APP_CONFIG.BASE_PATH)) {
    currentPath = currentPath.replace(APP_CONFIG.BASE_PATH, "") || "/";
  }
  if (currentPath.startsWith("/error")) currentPath = "/error";
  if (currentPath.startsWith("/search")) currentPath = "/search";
  return routes()[currentPath]();
}
async function redirectToPage(url) {
  const redirectUrl = `${APP_CONFIG.BASE_PATH}${url}`;
  history.pushState({}, "", redirectUrl);
  await renderContent();
}
async function renderContent() {
  const layoutContainer = document.querySelector(".content");
  if (!layoutContainer) throw new Error(DEBUG_ERROR.getNoElementMessage(".content"));
  destroyEvent();
  const newPageInstance = await renderInnerContentsByRoute();
  const oldContent = layoutContainer.querySelector(".render-content");
  if (oldContent) oldContent.remove();
  newPageInstance.element.classList.add("render-content");
  layoutContainer.appendChild(newPageInstance.element);
  previousPageInstance = newPageInstance;
}
class SearchBar {
  constructor() {
    __privateAdd(this, _SearchBar_instances);
    __privateAdd(this, _container10);
    __privateAdd(this, _input, null);
    __privateAdd(this, _searchValue, "");
    __privateSet(this, _container10, document.createElement("form"));
    __privateGet(this, _container10).classList.add("searchbar");
    this.render();
    __privateMethod(this, _SearchBar_instances, bindEvent_fn2).call(this);
  }
  render() {
    __privateGet(this, _container10).innerHTML = `
      <input placeholder="검색어를 입력하세요" class="text-placeholder searchbar__input" />
      <button class="searchbar__button" type="submit">
        <img src="./search-icon.png" class="searchbar__icon"/>
      </button>
  `;
  }
  get element() {
    return __privateGet(this, _container10);
  }
}
_container10 = new WeakMap();
_input = new WeakMap();
_searchValue = new WeakMap();
_SearchBar_instances = new WeakSet();
bindInputEvent_fn = function() {
  __privateSet(this, _input, __privateGet(this, _container10).querySelector(".searchbar__input"));
  if (!__privateGet(this, _input)) throw new Error(DEBUG_ERROR.getNoElementMessage("SearchBar Input"));
  __privateGet(this, _input).addEventListener("input", (event) => {
    if (event.target instanceof HTMLInputElement) {
      __privateSet(this, _searchValue, event.target.value);
    }
  });
};
bindSubmitEvent_fn = function() {
  __privateGet(this, _container10).addEventListener("submit", (event) => {
    if (!__privateGet(this, _input)) throw new Error(DEBUG_ERROR.getNoElementMessage("SearchBar Input"));
    event.preventDefault();
    __privateGet(this, _input).value = "";
    __privateMethod(this, _SearchBar_instances, search_fn).call(this);
  });
};
search_fn = function() {
  if (__privateGet(this, _searchValue).length === 0) return;
  const params = new URLSearchParams(window.location.search);
  params.set("query", __privateGet(this, _searchValue));
  const searchUrl = `/search?${params.toString()}`;
  redirectToPage(searchUrl);
};
bindEvent_fn2 = function() {
  __privateMethod(this, _SearchBar_instances, bindInputEvent_fn).call(this);
  __privateMethod(this, _SearchBar_instances, bindSubmitEvent_fn).call(this);
};
class Header {
  constructor() {
    __privateAdd(this, _Header_instances);
    __privateAdd(this, _container11);
    __privateAdd(this, _searchBar);
    __privateSet(this, _container11, document.createElement("header"));
    __privateGet(this, _container11).className = "header";
    __privateSet(this, _searchBar, new SearchBar());
    this.render();
  }
  get element() {
    return __privateGet(this, _container11);
  }
  render() {
    __privateGet(this, _container11).innerHTML = `
    <h1 class="logo"/>
      <img src="./logo.png" alt="MovieList" class="logo__img"/>
    </h1>
    `;
    __privateMethod(this, _Header_instances, bindLogoClickEvent_fn).call(this);
    const searchBarWrapper = document.createElement("div");
    searchBarWrapper.className = "header__searchbar";
    searchBarWrapper.appendChild(__privateGet(this, _searchBar).element);
    __privateGet(this, _container11).appendChild(searchBarWrapper);
  }
}
_container11 = new WeakMap();
_searchBar = new WeakMap();
_Header_instances = new WeakSet();
bindLogoClickEvent_fn = function() {
  const logo = __privateGet(this, _container11).querySelector(".logo img");
  if (logo) {
    logo.addEventListener("click", () => {
      redirectToPage("/");
    });
  }
};
class Layout {
  constructor() {
    __privateAdd(this, _container12);
    __privateAdd(this, _header);
    __privateAdd(this, _footer2);
    __privateAdd(this, _contentContainer);
    __privateSet(this, _container12, document.createElement("div"));
    __privateGet(this, _container12).classList.add("layout");
    __privateSet(this, _header, new Header());
    __privateSet(this, _footer2, new Footer());
    __privateSet(this, _contentContainer, document.createElement("div"));
    __privateGet(this, _contentContainer).classList.add("content");
    __privateGet(this, _container12).appendChild(__privateGet(this, _header).element);
    __privateGet(this, _container12).appendChild(__privateGet(this, _contentContainer));
    __privateGet(this, _container12).appendChild(__privateGet(this, _footer2).element);
    document.querySelector("body").appendChild(__privateGet(this, _container12));
    this.render();
  }
  get element() {
    return __privateGet(this, _container12);
  }
  async render() {
    await renderContent();
  }
}
_container12 = new WeakMap();
_header = new WeakMap();
_footer2 = new WeakMap();
_contentContainer = new WeakMap();
addEventListener("load", () => {
  initRouter();
  new Layout();
});
