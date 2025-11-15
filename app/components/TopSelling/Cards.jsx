import PlantCard from '../Cards/plantCards'

const plants = [
  {
    "image":'/plants/plant1.png',
    "plant_name": "Aglaonema plant",
    "price": "Rs. 300/-",
    "description": "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care."
  },
  {
    "image":'/plants/plant2.png',
    "plant_name": "Plantain Lilies",
    "price": "Rs. 380/-",
    "description": "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes."
  },
  {
    "image":'/plants/plant3.png',
    "plant_name": "Cactus",
    "price": "Rs. 259/-",
    "description": "It is known for their ability to thrive in arid environments."
  },
  {
    "image":'/plants/plant4.png',
    "plant_name": "Swiss cheese Plant",
    "price": "Rs. 400/-",
    "description": "It is a popular tropical houseplant known for its distinctive, perforated leaves."
  },
  {
    "image":'/plants/plant5.png',
    "plant_name": "Sansevieria plant",
    "price": "Rs. 450/-",
    "description": "It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
  },
  {
    "image":'/plants/plant6.png',
    "plant_name": "Agave plant",
    "price": "Rs. 359/-",
    "description": "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
  }
]

function Cards() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-22'>
            {
                plants.map(item => <PlantCard key={item.plant_name} image={item.image} price={item.price} title={item.plant_name} description={item.description} />)
            }
            
        </div>
    )
}

export default Cards