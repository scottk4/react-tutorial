import profilePic from './assets/profile_pic.jpeg'
function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Scott Kelly</h2>
            <p className="card-text">I am a remote sensing scientist, and I like to code. </p>

        </div>
    );
}

export default Card