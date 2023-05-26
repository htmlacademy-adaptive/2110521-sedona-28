let errorModal = document.querySelector(".modal--error");
let submitModal = document.querySelector(".modal--submit");
let modalContainerError = document.querySelector(".modal-container--error");
let modalContainerSubmit = document.querySelector(".modal-container--submit");
let inputsText = document.querySelectorAll(".input-text:not(.input-text--emotions)");
const applicantForm = document.getElementById('review');

// Проверка, чтобы обязательные поля не были пустыми
function handleFormSubmit(event) {
  event.preventDefault()
  for (let input of inputsText) {
    if (input.value.length === 0) {
      errorModal.classList.remove("modal--hidden");
      modalContainerError.classList.remove("modal-container--hidden");
      return false;
    }
  }
  submitModal.classList.remove("modal--hidden");
  modalContainerSubmit.classList.remove("modal-container--hidden");
  // applicantForm.submit(); --чтобы отправить форму после проверки
  return true;
}
// Обработчик события submit
applicantForm.addEventListener('submit', handleFormSubmit)

// Поведение кнопок в модальных окнах
let submitClose = document.getElementById('submitClose');
submitClose.addEventListener('click', function() {
  submitModal.classList.add("modal--hidden");
  modalContainerSubmit.classList.add("modal-container--hidden");
})

let errorClose = document.getElementById('errorClose');
errorClose.addEventListener('click', function() {
  errorModal.classList.add("modal--hidden");
  modalContainerError.classList.add("modal-container--hidden");
})
