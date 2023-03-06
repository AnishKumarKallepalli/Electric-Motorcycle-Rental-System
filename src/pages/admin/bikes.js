import BikeList from '@/components/BikeList/BikeList'
import {BASE_URL} from '../../constants'


export default function Bikes({listofbikes}) {
  return (
    <div>
        <BikeList listofbikes={listofbikes}/>
    </div>
  )
}


export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}/api/bikes`)
  const listofbikes = await res.json()
  console.log("The backend bikes are", listofbikes);
  // Pass data to the page via props
  return { props: { listofbikes } }
}