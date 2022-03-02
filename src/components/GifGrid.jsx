import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridItem } from './GridItem'


export const GifGrid = ({categories}) => {

    const {data:images,loading} = useFetchGifs(categories)
    
    return (
        <>
        <h3 className=' animate__animated animate__fadeIn'>{ categories }</h3>
        {loading && <p className=' animate__animated animate__fadeIn'>Loading</p>}

            <div className='card-grid'>
                { 
                    images.map( (img) =>( 
                        <GridItem 
                            key={img.id}
                            {...img} 
                        />
                    ))
                }
            </div>
    </>
    )
}