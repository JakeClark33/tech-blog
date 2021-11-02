const postform = document.getElementById('post-form');

if (postform) {
  const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['code-block'],
      ],
    },
    placeholder: 'Write a post...',
    theme: 'snow',
  });

  postform.onsubmit = () => {
    const contentInput = document.querySelector('input[name=content]');
    const descriptionInput = document.querySelector('input[name=description]');
    contentInput.value = JSON.stringify(quill.getContents());
    descriptionInput.value = `${quill.getText().substring(0, 100)}...`;
  };
}
