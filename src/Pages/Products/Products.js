import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Product = () => {
    const [products] = useProducts([]);
    
    const navigate = useNavigate()
    const navigateToPurchaseDetail = (id) => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className='m-2 p-3'>
            <h2 className='text-center text-4xl my-3 text-blue-600 font-bold'>Our Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products?.slice(0, 8).map(product => <div key={product.product_id} className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div class="avatar justify-center my-2 py-2">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={product?.img} alt={product?.name} className='p-2' />
                            </div>
                        </div>
                        <div className="card-body mt-0 pt-0 text-center">
                            <h2 className="text-2xl font-bold ">{product?.name}</h2>
                            <p className=''><span className='font-bold text-xl'>Price: $ {product?.selling_price} </span></p>
                            <p className=''><span className='font-semibold'>Stock: </span> {product?.stock}</p>

                            <div className="card-actions justify-center">
                                <button
                                    onClick={() => navigateToPurchaseDetail(product._id)}
                                    className="btn btn-outline border-blue-700  w-full max-w-xs my-2">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="card-actions justify-center mt-5">
                <Link to='/products' className="btn btn-outline border-green-700 text-xl w-full max-w-md my-2">
                    All Products
                </Link>
            </div>
        </div>
    );
};

export default Product;