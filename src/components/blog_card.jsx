import img from '../assets/illustration-article.png'
import avatar from '../assets/image-avatar.webp'
export default function Card() {

  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div class="card border border-1 border-dark">
  <img src={img} className="card-img-top p-2 rounded" alt="..."/>
  <div className='learn_btn_div text-start ps-2'><a href="#" className="learn_btn text-decoration-none p-1 rounded" >Learning</a></div>
  <div class="card-body text-start">
    <p className='blog_date'>Published 21 Dec 2024</p>
    <h5 class="card-title fw-bold"><span className='text-uppercase'>html & css</span> foundation</h5>
    <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
 <div className='avatar d-flex gap-2 justify-content-start align-items-center'>
 <img src={avatar} className="card_avt" alt="avatar"/>
 <p className='mb-0 fw-bold'>dinesh babu</p>
 </div>
  </div>
</div>
</div>
  )
}
