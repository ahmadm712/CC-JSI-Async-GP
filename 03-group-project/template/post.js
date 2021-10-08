import { getAuthor, getPost, getPostComments, getRandomPic } from "./helpers.js"
const post_id = ''; // tempat menampung parameter yang ada
const params; // tempat menampung parameter yang ada

const elPageTitle = document.querySelector('#page-title');
const elDetailBerita = document.querySelector('#detail-berita');
const elLoading = document.querySelector('#loading');
const elNotFound = document.querySelector('#not-found');
const elCardImg = document.querySelector('.card-img-top');
const elCardText = document.querySelector('.card-text');
const elCardAuthorImg = document.querySelector('#author-img');
const elCardAuthorName = document.querySelector('#author-name');
const elCardAuthorEmail = document.querySelector('#author-email');
const elListGroup = document.querySelector('#list-group');


const createListElement = (comment) => {

  const elListItem = document.createElement('div');
  const elListItemContainer = document.createElement('div');
  const elListItemTitle = document.createElement('div');
  const elListItemText = document.createElement('span');

  elListItem.classList.add('list-group-item');
  elListItemContainer.classList.add('ms-2', 'me-auto');
  elListItemTitle.classList.add('fw-bold');

  elListItemTitle.innerHTML = comment.email;
  elListItemText.innerHTML = comment.body;

  elListItemContainer.appendChild(elListItemTitle);
  elListItemContainer.appendChild(elListItemText);
  elListItem.appendChild(elListItemContainer);

  elDetailBerita.appendChild(elListItemContainer);

  return elListItem;

  

};



const renderPost = async (post_id) => {

  // EDIT HERE
  let post = await getPost(post_id)
  let comment = await getPostComments(post_id)
  let pic = await getRandomPic()
  let author = await getAuthor(post_id)
  
  

};
elDetailBerita.appendChild(elListItemContainer);

console.log(author);


  renderPost(2);
