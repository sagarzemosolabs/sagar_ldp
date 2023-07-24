
type ImageComponentProps = {
    link: string
}

export const ImageComponent: React.FC<ImageComponentProps> = (props) => {
    return <img src={props.link}/>
}