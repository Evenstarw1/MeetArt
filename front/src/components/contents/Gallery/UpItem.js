import axios from 'axios';

export default class UpItem {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/item`,
      withCredentials: true
    });

    this.service2 = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/EditProfile`,
      withCredentials: true
    });
  }

  addPicture(image, title, description, category ) {
    const formData = new FormData();
    formData.append("item", image)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("category", category)

    console.log('DEBUG formData');
    
    return this.service
      .post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
  }
  
}