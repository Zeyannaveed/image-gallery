
import {useState,useEffect} from 'react';
import Image from './Image';
function App() {

  const [search, setsearch] = useState('cat')
  const [image, setimage] = useState([])

  useEffect(() => {
fetch(`https://pixabay.com/api/?key=34660537-11bc2ed99eadb96a9e602f174&q=${search}&&pretty=true`)
.then(response=> response.json())
.then((data) =>{ setimage(data.hits); console.log(data)})
.catch(err => console.log(err))
  },[search])
  
  return (
    <div className="App flex pt-5 justify-center" >
      <div className="">
<div className='mx-auto w-fit mb-2 border-b-2 border-teal-500 pb-2'>
  <input className=' bg-transparent border-none text-grey-700 mr-3 leading-tight focus:outline-none' type='text' value={search} onChange={(e)=>setsearch(e.target.value)}></input>
  <button className='bg-teal-500 text-white p-2 '>Search</button>
</div>



        <div>
  {image?.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 ">
          {image.map((images) => (
            <Image image={images} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default App;
