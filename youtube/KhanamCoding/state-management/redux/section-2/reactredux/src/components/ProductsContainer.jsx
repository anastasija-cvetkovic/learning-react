import { useEffect } from "react";
import { fetchProducts } from "../features/products";
import { connect } from "react-redux";

function ProductsContainer({ productsData, fetchProducts }) {
	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<div>
			{productsData.loading && <p>Loading</p>}
			{productsData.error && <p>Error:{productsData.error}</p>}
			{productsData.products && (
				<p>
					{productsData.products.map((title) => (
						<p>{title}</p>
					))}
				</p>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		productsData: state.products,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: () => dispatch(fetchProducts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
