import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

const HomeProperties = async () => {
  const data = await fetchProperties();

  const recentProperties = data?.properties?.length
  ? data.properties
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
  : [];


  return (
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Imóveis recentes
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {recentProperties.length === 0 ? (
              <p>Nenhum imóvel encontrado</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          Ver todos os imóveis
        </Link>
      </section>
    </>
  );
};
export default HomeProperties;
