import { useEffect } from "react";
import { fetchProducts } from "../features/products";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";

function ProductsContainer() {
	const productsData = useSelector((state) => state.products);
	const dispatch = useDispatch();
	useEffect(() => {
		//fetchProducts();
		dispatch(fetchProducts());
	}, []);
	return (
		<div>
			{productsData.loading && <p>Loading</p>}
			{productsData.error && <p>Error:{productsData.error}</p>}
			{productsData.products && (
				<div>
					{productsData.products.map((product) => (
						<p key={product.id}>{product.title}</p>
					))}
				</div>
			)}
		</div>
	);
}

// const mapStateToProps = (state) => {
// 	return {
// 		productsData: state.products,
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchProducts: () => dispatch(fetchProducts()),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
export default ProductsContainer;
