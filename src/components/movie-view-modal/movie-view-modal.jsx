import './movie-view.scss';
import PropTypes from "prop-types";
import { SimilarMovies } from '../similar-movies/similar-movies';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {AddFavouriteMovie} from '../../hooks/add-remove-favourite';

export const MovieViewModal = ( {show, movie, onClose, token, user} ) => {



    if(!show) {
        return null
    }

   return (

     <div  onClick={onClose}>
        <>        
        <Modal show={show} size='lg' onClick={(e) => e.stopPropagation()}>
            <Modal.Header>
                <Modal.Title>{movie.Title}</Modal.Title>
                <CloseButton onClick={onClose} style={{cursor: "pointer"}}></CloseButton>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={5}>
                        <Image src={movie.ImagePath} fluid></Image>
                    </Col>
                    <Col xs={7}>
                    <p>Genre: {movie.Genre.Name}</p>
                    <p>{movie.Plot}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Image src={movie.Director.HeadShots[0]} fluid></Image>
                    </Col>
                    <Col xs={9}>
                        <p>
                            {movie.Director.Name}
                        </p>
                    </Col>
                </Row>
                <Row>
                        <SimilarMovies
                            genre={movie.Genre.Name}
                            token={token}
                        />
                </Row>   
            </Modal.Body>
            <Modal.Footer> 
                <ButtonToolbar >

                    <ButtonGroup className='me-2'>
                        <Button onClick={(event) => {
                            event.stopPropagation();
                            AddFavouriteMovie(movie, token)
                        }}>+ Add</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Modal.Footer>
        </Modal>
        </>
    </div>
   )
};

MovieViewModal.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Plot: PropTypes.string.isRequired,
        ReleaseYear: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Director: PropTypes.shape ({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string,
            HeadShots: PropTypes.array.isRequired
        }),
        Genre: PropTypes.shape ({
            Name: PropTypes.string.isRequired,
        })
    })
}
