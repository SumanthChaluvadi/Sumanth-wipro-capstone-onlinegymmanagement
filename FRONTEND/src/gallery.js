import React, { useState } from 'react';
import './Gallery.css';

import image12 from './image12.jpg';
import image13 from './image13.jpg';
import image14 from './image14.jpg';
import image15 from './image15.jpg';
import image16 from './image16.jpg';
import image22 from './image22.jpeg';
import image21 from './image21.jpeg';
import image23 from './image23.jpeg';
import image24 from './image24.jpeg';
const images = [
    { id: 1, src: image12, alt: 'Gym Interior 1' },
    { id: 2, src: image13, alt: 'Gym Interior 2' },
    { id: 3, src: image14, alt: 'Gym Equipmentt' },
    { id: 4, src: image15, alt: 'Gym Equipmente' },
    { id: 5, src: image16, alt: 'Gym Equipments' },
    { id: 6, src: image22, alt: 'Gym Equipments' },
    { id: 7, src: image21, alt: 'Gym Equipments' },
    { id: 8, src: image23, alt: 'Gym Equipments' },
    { id: 9, src: image24, alt: 'Gym Equipments' },
    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
