import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

function ProductsView() {
	const products = useSelector((state) => state.product);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	return (
		<div>
			<h2>List of product titles</h2>
			{products.loading && <h2>Loading ..</h2>}
			{!products.loading && products.error && <h2>Error {products.error}</h2>}
			{products.products.map((prod) => (
				<p key={prod.key}>{prod.title}</p>
			))}
		</div>
	);
}

export default ProductsView;
