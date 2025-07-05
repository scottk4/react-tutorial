//remove image when clicked
function ProfilePicture(){

    const imageUrl = './src/assets/profile_pic.jpeg'
    
    const handleClick = (e) => e.target.style.display = "none"

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture