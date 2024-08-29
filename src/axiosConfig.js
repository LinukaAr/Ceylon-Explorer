import axios from 'axios';

async function handleSubmitGuide() {
    const guideData = {
        // Your JSON guide data
        title: "Guide Title",
        description: "Guide Description",
        // other fields...
    };

    const formData = new FormData();
    formData.append('guide', JSON.stringify(guideData));
    
    // Assuming you have an input field of type file to select the image
    const imageFile = document.querySelector('input[type="file"]').files[0];
    formData.append('image', imageFile);

    try {
        const response = await axios.post('http://localhost:8080/guides', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Success:', response.data);
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            console.error('Error Response:', error.response.data);
        }
    }
}
