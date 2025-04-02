const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

getInfo();
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput() {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getInfo() {
  const saveForm = localStorage.getItem(STORAGE_KEY);

  if (saveForm) {
    formData = JSON.parse(saveForm);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}
