import React from 'react';
import CatalogItem from './CatalogItem';
import mai from "../assets/images/maipng.png"
import shirt1 from "../assets/images/shirt2.png"
import shirt3 from "../assets/images/shirt3.png"
import shirt4 from "../assets/images/shirt4.png"

function MainSection() {
    return (
        <main>
            <section className="mobile-block">
                <div className="back">
                    <div className="container">
                    </div>
                </div>
            </section>

            <CatalogItem image={mai} name="mai sakurajima" size="sale" />
            <CatalogItem image={shirt1} name="Amiri shert" size="not" />
            <CatalogItem image={shirt3} name="Comme Des Garсons Play" size="sale" />
            <CatalogItem image={shirt4} name="Disel" size="not" />
        </main>
    );
}

export default MainSection;
