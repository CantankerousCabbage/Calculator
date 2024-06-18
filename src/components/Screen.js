
import '../styles/chassis.css';

const Screen = ({ display }) => {
    return (
        <div className="display">
            <div className="screen">
                {display}
            </div>
        </div>
    )
}

export default Screen;