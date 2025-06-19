import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const SearchProductPage = () => {
	const { filteredProducts, loading } = useProductStore();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top on page load
	}, []);

	return (
		<div className="min-h-screen bg-gray-900 text-white px-4 py-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-emerald-400 mb-6">
					Search Results
				</h2>

				{loading ? (
					<p className="text-center text-gray-300">Loading search results...</p>
				) : filteredProducts.length === 0 ? (
					<p className="text-center text-2xl mt-10  font-semibold text-white">No products found.</p>
				) : (
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{filteredProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchProductPage;
