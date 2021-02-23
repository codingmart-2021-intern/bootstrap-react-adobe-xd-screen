
const Review = () => {
    const reviewsList = [
        {
            "user_name": "Alexander Joseph",
            "date": "23 Dec 2020",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita numquam enim quasi eveniet praesentium, neque minus facilis beatae optio. Ipsum itaque rem vel tempora placeat minus vitae Aliquam tempora rem nostrum dolorum, nisi harum molestiae laborum velit sequi vero minus laudantium! Cumque ad itaque, inventore, nisi, repellendus eius tempora aliquid nam atque architecto voluptatum aperiam accusantium error. Consequatur dignissimos harum maiores asperiores odit nihil, eius facere, minima, incidunt sed nemo maxime similique nisi! Deserunt, enim distinctio dolor velit laborum et explicabo voluptas inventore labore tempora suscipit exercitationem."
        },
        {
            "user_name": "Alexander Joseph",
            "date": "23 Dec 2020",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita numquam enim quasi eveniet praesentium, neque minus facilis beatae optio. Ipsum itaque rem vel tempora placeat minus vitae Aliquam tempora rem nostrum dolorum, nisi harum molestiae laborum velit sequi vero minus laudantium! Cumque ad itaque, inventore, nisi, repellendus eius tempora aliquid nam atque architecto voluptatum aperiam accusantium error. Consequatur dignissimos harum maiores asperiores odit nihil, eius facere, minima, incidunt sed nemo maxime similique nisi! Deserunt, enim distinctio dolor velit laborum et explicabo voluptas inventore labore tempora suscipit exercitationem."
        },
        {
            "user_name": "Alexander Joseph",
            "date": "23 Dec 2020",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita numquam enim quasi eveniet praesentium, neque minus facilis beatae optio. Ipsum itaque rem vel tempora placeat minus vitae Aliquam tempora rem nostrum dolorum, nisi harum molestiae laborum velit sequi vero minus laudantium! Cumque ad itaque, inventore, nisi, repellendus eius tempora aliquid nam atque architecto voluptatum aperiam accusantium error. Consequatur dignissimos harum maiores asperiores odit nihil, eius facere, minima, incidunt sed nemo maxime similique nisi! Deserunt, enim distinctio dolor velit laborum et explicabo voluptas inventore labore tempora suscipit exercitationem."
        }
    ]
    return (
            <div>
                {reviewsList.map( (data, index) => (
                    <div className="my-3 p-4 border w-75 mx-auto ">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex space-x-2 align-items-center">
                                <span className="inline fw-bolder fs-4">{data.user_name}</span>
                                <div className="d-flex  text-skin_dark">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                            </div>
                            <p className="text-skin_dark">{data.date}</p>
                        </div>
                        <p className="mt-2">{data.description}</p>
                    </div>
                ) )}
            </div>
    )
}

export default Review;