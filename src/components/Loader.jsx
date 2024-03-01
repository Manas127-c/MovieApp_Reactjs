import loader from '/loader.gif'
import ScaleLoader from "react-spinners/ScaleLoader";


function Loader() {
  
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        {/* <img className='w-full h-full object-cover' src={loader} alt="" /> */}
        <ScaleLoader color='white' height={150} width={20} radius={2} margin={2} loading={true} aria-label="Loading Spinner"
        data-testid="loader">
        </ScaleLoader>
    </div>
  )
}

export default Loader