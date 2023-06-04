import Link from "next/link";
import { useEffect, useState } from "react";
export default function Product() {
	const [productList, setProductList] = useState<TProduct[]>([]);
	useEffect(() => {
		window
			.fetch("/api/avo")
			.then((res) => res.json())
			.then((products: TProduct[]) => {
				setProductList(products);
			});
	});
	return (
		<>
			<ul>
				{productList.map((product) => (
					<li>
						<Link href={`/product/${product.id}`} key={product.name}>
							{product.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
