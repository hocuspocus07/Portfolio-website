import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client.ts';
import Card from './Cards.jsx';

function CertComp() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        client
        .fetch(`*[_type == "certificate"]{title, issuedBy, dateIssued, "pdfUrl": pdf.asset->url}`)
            .then((data) => {
                setCertificates(data);
                console.log(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);


    return (
        <div className='text-center w-screen text-white'>
            <h1 className='text-4xl font-bold m-4'>Click on a certificate to view it.</h1>
            <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-20 md:space-y-20 ">
                {certificates.map((cert, index) => (
                    <Card key={index} title={cert.title} description={cert.issuedBy} link={cert.pdfUrl} date={cert.dateIssued} />
                ))}
            </div>
        </div>
    );
}

export default CertComp;
