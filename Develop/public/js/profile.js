const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim()
    const content = document.querySelector('#post-content').value.trim();
    const user = document.querySelector('#user-id').dataset.id;
    const name = document.querySelector('#user-id').dataset.name;
  
    if (title && content) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, content, user_id:user, author_name:name}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Post created successfully!');
        document.location.replace('/profile');
        console.log("Response")
      } else {
        alert('Failed to create new post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#post-submit-btn')
    .addEventListener('click', newFormHandler);
  
  document
    .querySelector('#post-del-btn')
    .addEventListener('click', delButtonHandler);