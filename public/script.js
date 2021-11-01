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
    // Populate hidden form on submit
    const contentInput = document.querySelector('input[name=content]');
    contentInput.value = JSON.stringify(quill.getContents());

    console.log('getContents', quill.getContents());
    console.log('getText', quill.getText());

    // console.log('Submitted', $(form).serialize(), $(form).serializeArray());

    // No back end to actually submit to!
    // alert('Open the console to see the submit data!');
    // return false;
  };
}
