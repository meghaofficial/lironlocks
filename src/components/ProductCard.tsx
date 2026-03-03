type ProductCardType = {
  url: string | undefined;
  name?: string
}

const ProductCard = ({ url, name }: ProductCardType) => {
  return (
    <div className='bg-gray-100 h-75 relative'>
      <div className='p-10'>
        <img src={url} alt="" className='h-55 object-contain' />
      </div>
      <span className="absolute bottom-4 text-sm right-4">{name}</span>
    </div>
  )
}

export default ProductCard
