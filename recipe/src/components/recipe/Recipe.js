import React,  {useState} from "react";
import Modal from 'react-modal';
import './recipe.css'

const Recipe = ({title, calories, image, ingredients, dishType, direction}) => {

    const [modalIsOpen, setModalIsOpen] = useState(null);
  
	const openModal = (title) => {
	  setModalIsOpen(title);
	};
  
	const closeModal = () => {
	  setModalIsOpen(null);
	};

	const openDirections = () => {
		// Log the URL to verify its value
		console.log("URL:", direction);
	  
		// Open the directions URL in a new tab
		if (direction) {
		  window.open(direction, "_blank");
		}
	  };
	  

    return(
			<article className='recipe__item'>
                <div className='recipe__item-image'>
                    <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <h4>Calories: {calories}</h4>

                <div className='recipe__item-cta'>
				  <a href='#' onClick={() => openModal(title)} className='btn'>
					View Ingredients
				  </a>
				  <button onClick={openDirections} className='btn'>
						View Directions
				 </button>
				  <Modal
					isOpen={modalIsOpen === title}
					onRequestClose={closeModal}
					className='modal'
					overlayClassName='modal-overlay'
				  >
					<div className='modal-content'>
						<div className='modal-header'>
							<h2 className='modal-title'>{title}</h2>
						</div>
						<div className='modal-body'>
							<h4 className='modal-lang'>{dishType}</h4>
                            <ol>
                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </ol>
						</div>
						<div className='modal-footer'>
							<button onClick={closeModal}>Close</button>
						</div>
					</div>
				  </Modal>
				</div>
            </article>
    );
}

export default Recipe