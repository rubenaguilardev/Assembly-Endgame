export default function Chip(props) {
    
    return (
        <span 
            key={props.id}
            className='chip' 
            style={{
                backgroundColor: props.backgroundColor,
                color: props.color
            }}>
                {props.name}
        </span>
    )
}