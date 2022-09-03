import photo from './logo.svg';
export default function Info() {
    return (
        <div className='lineheiht10px'>
            <img src={photo} className="photo" alt="photo" />
            <h2 className='boldfont'>James M Githire</h2>
            <p>Full-Stack Developer<br />
                <a href='mailto:jamesmburug@gmail.com'>jamesmburug@gmail.com</a>
            </p>
            <button className='width80pc br5 bdnone lh25 position-relative align-c-c center-row'>
                <i className="fa-solid fa-envelope font1rem top-1 position-relative"></i> Email</button>
        </div>
    )
}