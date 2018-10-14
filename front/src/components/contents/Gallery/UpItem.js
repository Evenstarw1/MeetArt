import axios from 'axios';

export default class UpItem {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/item',
      withCredentials: true
    });

    this.service2 = axios.create({
      baseURL: 'http://localhost:3010/api/EditProfile',
      withCredentials: true
    });
  }

  addPicture(image, title, description, category ) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("category", category)

    console.log('DEBUG formData', formData.get("image"));
    
    return this.service
      .post('new', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
  }
}