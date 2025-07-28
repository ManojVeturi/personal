import profilePic from './assets/MANOJ.jpg';
function Home() {

    return (
        <div className='home' id="Home">
            <div className='home-content'>
                <h3>Hi, I'm <span>Manoj Veturi</span></h3>
                <h4>Metallurgical & Materials Engineer</h4>
                <h5>Web Developer | AI Explorer</h5>
            </div>
            <img src={profilePic} alt="Manoj Veturi" className="profile-pic" />
        </div>
    );
}
export default Home;