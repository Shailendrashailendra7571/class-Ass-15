const accessKey = '2XB3jmDvhjiWjI318K3HHwQKDblFeo2fApbSSWGHMKc'; // Replace with your Unsplash API Key
        const query = 'car';
        const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}`;

        // Function to fetch and display a random car photo
        async function getRandomCarPhoto() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (response.ok) {
                    const photoUrl = data.urls.regular;
                    const photoElement = document.createElement('img');
                    photoElement.src = photoUrl;
                    document.getElementById('photo-container').appendChild(photoElement);
                } else {
                    console.error('Error fetching data:', data.errors);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        // Call the function to get and display a random car photo
        getRandomCarPhoto();