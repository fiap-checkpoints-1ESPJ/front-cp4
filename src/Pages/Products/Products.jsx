import './index.css'

const products = [
    {
        id: 0,
        name: 'water bottle',
        price: 29.99,
        description: "stay hydrated and eco-conscious with our premium, sustainable water bottle. perfect for everyday use, outdoor adventures, and reducing plastic waste.",
        image: ''
    },
    {
        id: 0,
        name: 'water bottle',
        price: 29.99,
        description: "stay hydrated and eco-conscious with our premium, sustainable water bottle. perfect for everyday use, outdoor adventures, and reducing plastic waste.",
        image: ''
    },
    {
        id: 0,
        name: 'water bottle',
        price: 29.99,
        description: "stay hydrated and eco-conscious with our premium, sustainable water bottle. perfect for everyday use, outdoor adventures, and reducing plastic waste.",
        image: ''
    },
]


const Products = () => {
    return (
        <section className="catalog">
            <h1>Catalog</h1>
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
    )
};

const Product = ({ product }) => {
    return (
        <section className="product">
            <div className="product-image">
                <img src={product.image} alt={`product ${product.id}`} />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">{product.price}</p>
                <p className="description">{product.description}</p>
                <a href="#" className="cta-button">Add to Cart</a>
            </div>
        </section>
    )
}

export default Products;
