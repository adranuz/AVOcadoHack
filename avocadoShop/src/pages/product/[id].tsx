import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ProductItem() {
  const [product, setProduct] = useState<TProduct|null>(null)
	const router = useRouter();
	useEffect(() => {
		window.fetch(`/api/avo/${router.query.id}`)
		.then(res => res.json())
    .then((product:TProduct) => {
      setProduct(product)
    })
	})
	return (
		<>
			{product &&
			<div>Aqui se veria un ProductItem: {product.name}</div>
			}
		</>
	);
}
