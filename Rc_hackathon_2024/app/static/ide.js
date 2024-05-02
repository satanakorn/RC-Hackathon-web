document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const submitButton = document.getElementById('uploadButton');
    const csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload-python-file/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': csrfToken
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('File uploaded successfully:', data);
            alert('File uploaded successfully!');
        })
        .catch(error => {
            console.error('There was an error uploading the file:', error);
            alert('There was an error uploading the file. Please try again.');
        });
    });
});
