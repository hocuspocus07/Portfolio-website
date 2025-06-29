import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client.ts';
import Card from './Cards.jsx';
import CertFilter from './CertFilter.jsx';

function CertComp() {
    const [certificates, setCertificates] = useState([]);
    const [filteredCertificates, setFilteredCertificates] = useState([]);

    useEffect(() => {
        client
        .fetch(`*[_type == "certificate"]{title, issuedBy, dateIssued, category,"pdfUrl": pdf.asset->url}`)
            .then((data) => {
                setCertificates(data);
                setFilteredCertificates(data);
                console.log(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleFilterChange = (category) => {
        if (category === 'All') {
            setFilteredCertificates(certificates);
        } else {
            const filtered = certificates.filter(cert => 
            cert.category && 
            cert.category.toLowerCase() === category.toLowerCase().trim()
        );
            setFilteredCertificates(filtered);
        }
    };

    return (
        <div className='text-center w-screen text-white'>
            <h1 className='text-4xl font-bold m-4'>Click on a certificate to view it.</h1>
            <CertFilter onFilterChange={handleFilterChange} />
            <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-20 md:space-y-20 ">
                {filteredCertificates.map((cert, index) => (
                    <Card key={index} title={cert.title} description={cert.issuedBy} link={cert.pdfUrl} date={cert.dateIssued} />
                ))}
            </div>
        </div>
    );
}

export default CertComp;
