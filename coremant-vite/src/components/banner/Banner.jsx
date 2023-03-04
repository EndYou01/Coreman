import bannerImg from '../../assets/coremantBanner.jpg'
import coremantLogo from '../../assets/coremantLogo.svg'


export const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner_img-container'>
          <img className='banner_img' src={bannerImg} alt="banner_img" />
        </div>

        <div className='banner_info'>
          <div className='logo-container'>
            <img className='logo' src={coremantLogo} alt="coremant logo" />
          </div>
          
          <div>
            <h1>
              When it absolutely, positively has to be readability in yor designs
            </h1>
          </div>
        </div>
    </div>
  )
}