import { useEffect } from 'react';

const Unsplash = () => {

  useEffect(() => {
    document.body.style.backgroundImage = 'url(https://source.unsplash.com/random'
  }, [])

  return (
    <>
      <div className="image-credits">Image by <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></div>
    </>
  )
    ;
}

export default Unsplash;