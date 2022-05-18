import photo from "../assets/img/foto.jpg"

const PhotoSide = () => {
    return (
        <div className="rounded-t-full w-6/12  max-w-lg overflow-hidden bg-white h-6/12 border-solid border-4 border-gray-600">
            <img className="" src={photo} >
            </img>
        </div>

    )
}
export default PhotoSide;