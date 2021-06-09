const mongoose = require('mongoose');
const Blog = require('./models/blogs')
const day = new Date();
const todayDate = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;

mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connected");
    })
    .catch(err => {
        console.log(err);
    })



const seedBlogs = [
    {
        title: 'My Life 1',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis',
        images: [
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726203/AaliyahSpeaksBlog/df0isnczxs6witgjbsyb.jpg',
                filename: 'AaliyahSpeaksBlog/df0isnczxs6witgjbsyb'
            },
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726204/AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw.jpg',
                filename: 'AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw'
            }
        ],
        date: todayDate
    },
    {
        title: 'My Life 2',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis',
        images: [
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726203/AaliyahSpeaksBlog/df0isnczxs6witgjbsyb.jpg',
                filename: 'AaliyahSpeaksBlog/df0isnczxs6witgjbsyb'
            }
        ],
        date: todayDate
    },
    {
        title: 'My Life 3',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis',
        images: [
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726203/AaliyahSpeaksBlog/df0isnczxs6witgjbsyb.jpg',
                filename: 'AaliyahSpeaksBlog/df0isnczxs6witgjbsyb'
            },
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726204/AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw.jpg',
                filename: 'AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw'
            }
        ],
        date: todayDate
    },
    {
        title: 'My Life 4',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis',
        images: [
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726203/AaliyahSpeaksBlog/df0isnczxs6witgjbsyb.jpg',
                filename: 'AaliyahSpeaksBlog/df0isnczxs6witgjbsyb'
            },
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726204/AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw.jpg',
                filename: 'AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw'
            }
        ],
        date: todayDate
    },
    {
        title: 'My Life 5',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque necessitatibus culpa perspiciatis a quaerat explicabo ipsam adipisci modi provident, placeat labore minus facilis voluptates quibusdam pariatur impedit quis omnis',
        images: [
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726203/AaliyahSpeaksBlog/df0isnczxs6witgjbsyb.jpg',
                filename: 'AaliyahSpeaksBlog/df0isnczxs6witgjbsyb'
            },
            {
                url: 'https://res.cloudinary.com/adrean123/image/upload/v1619726204/AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw.jpg',
                filename: 'AaliyahSpeaksBlog/acesrcsqdvfrkpwpxyiw'
            }
        ],
        date: todayDate
    }

]
const seedDB = async () => {
    await Blog.deleteMany({});
    await Blog.insertMany(seedBlogs)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}

seedDB().then(() => {
    mongoose.connection.close();
});
