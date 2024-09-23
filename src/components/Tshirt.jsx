import React from 'react';
import CatalogItem from './CatalogItem';
import maitsirt from "../assets/images/backwoods.png"
import aynami from "../assets/images/aynami.png"
import grey from "../assets/images/greytshirt.png"


function Tshirt() {
    return (
        <main>
            <section className="mobile-block">
                <div className="back">
                    <div className="container">
                    </div>
                </div>
            </section>

            <CatalogItem image={maitsirt} name="mai sakurajima" size="sale" />
            <CatalogItem image={aynami} name="evangelion" size="not" />
            <CatalogItem image={grey} name="grey t shert" size="sale" />
        </main>
    );
}

export default Tshirt;