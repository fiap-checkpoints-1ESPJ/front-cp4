import './index.css'
import tShirt from '/src/Assets/t-shirt.webp'
import sportShoes from '/src/Assets/sport-shoes.avif'
import sportShorts from '/src/Assets/sport-shorts.avif'

const products = [
    {
        id: 0,
        name: 'SuperSports Performance Jersey',
        price: 49.99,
        description: "Experience ultimate comfort and flexibility with our lightweight, moisture-wicking jersey. Ideal for intense training and competition.",
        image: tShirt
    },
    {
        id: 1,
        name: 'SuperSports Pro Running Shoes',
        price: 119.99,
        description: "Boost your performance with these high-tech running shoes. Engineered for speed, support, and durability on all terrains.",
        image: sportShoes
    },
    {
        id: 2,
        name: 'SuperSports Training Shorts',
        price: 39.99,
        description: "Train in style and comfort with our durable, breathable shorts. Built for flexibility and strength during the toughest workouts.",
        image: sportShorts
    },
]

const Products = () => {
    return (
        <section className='catalog-wrapper'>
            <section className="catalog">
                <h1>SuperSports Gear</h1>
                <section>
                    {!products ? <>No products</> :
                        products.map((p) => (
                            <Product
                                key={p.id}
                                product={p}
                            />
                        ))
                    }
                </section>
            </section>
        </section>
    )
};

const Product = ({ product }) => {
    return (
        <section className="product">
            <picture className="product-image">
                <img src={product.image} alt={`product ${product.id}`} />
            </picture>
            <article className="product-info">
                <h2>{product.name}</h2>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <a href="#" className="cta-button">Add to Cart</a>
            </article>
        </section>
    )
}

export default Products;
