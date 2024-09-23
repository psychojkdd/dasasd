import shirt from "../assets/images/shirt.png"
import hui from "../assets/images/hui.png"
import blackn from "../assets/images/blackn.png"
import bbb from "../assets/images/aynami.png"
import { Link } from "react-router-dom";


function PostImages () {



        

    return (
        <div>
            <section className="mobile-block">
    <div className="back">
        <div className="container">
        </div>
    </div>
</section>

<Link to="/hui" className="catalog">
    <img src={shirt} alt="blue shirt" width="260" height="300" style={{ position: 'relative', left: '80px' }} />
    <div className="container1">
        <div className="market">
            <div className="container">
                <h3 className="name">shirt</h3>
            </div>
        </div>
    </div>
</Link>

<div className="hhh"></div>

<Link to="/f" className="catalog">
    <img src={bbb} alt="blue shirt" width="260" height="300" style={{ position: 'relative', left: '80px' }} />
    <div className="container1">
        <div className="market">
            <div className="container">
                <h3 className="name">shirt</h3>
            </div>
        </div>
    </div>
</Link>

<div className="hhh"></div>

<div className="catalog">
    <img src={blackn} alt="black trousers" width="240" height="300" style={{ position: 'relative', left: '90px' }} />
    <div className="container1">
        <div className="market">
            <div className="container">
                <h3 className="name">trousers</h3>
            </div>
        </div>
    </div>
</div>

<div className="hhh"></div>
    </div>

    );
}
export default PostImages;