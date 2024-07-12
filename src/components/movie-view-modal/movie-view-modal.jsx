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
import thumbUp from '../../../public/img/thumbUp.svg';
import thumbDown from '../../../public/img/thumbDown.svg';

export const MovieViewModal = ( {show, movie, onClose, token} ) => {

    if(!show) {
        return null
    }

   return (

     <div  onClick={onClose}>
        <>        
        <Modal show={show} size='lg'>
            <Modal.Header>
                <Modal.Title>{movie.Title}</Modal.Title>
                <CloseButton onClick={onClose} style={{cursor: "pointer"}}></CloseButton>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={5}>
                        <Image src={movie.ImagePath} fluid></Image>
                    </Col>
                    <Col xs={7}>Genre: {movie.Genre.Name}</Col>
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
                        <Button variant="outline-warning">
                            <Image src={thumbUp}></Image>
                        </Button>
                        <Button variant="outline-warning">
                            <Image src={thumbDown}></Image>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className='me-2'>
                        <Button >+ Add</Button>
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
