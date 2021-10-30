import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
// const feedbackFormState = {};
populateFormInput();
feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onSaveProgressInput, 500));
function onSaveProgressInput(e) {
  let feedbackFormState = localStorage.getItem(LOCALSTORAGE_KEY);
  feedbackFormState = feedbackFormState ? JSON.parse(feedbackFormState) : {};
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateFormInput(e) {
  let savedInputForm = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedInputForm) {
    savedInputForm = JSON.parse(savedInputForm);
    Object.entries(savedInputForm).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  }
}
