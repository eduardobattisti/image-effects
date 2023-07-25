function init() {
  const fileReader = new FileReader();
  const input = document.getElementById('upload');

  fileReader.onloadend = () => {
    const base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ''
    );
    console.log(base64);
  }

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0]);

  });
}

init();
