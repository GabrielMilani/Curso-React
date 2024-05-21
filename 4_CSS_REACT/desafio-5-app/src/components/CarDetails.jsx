import styles from './CarDetails.module.css'

const CarDetails = ({ car }) => {
    return (
        <div className={styles.card}>
            <div key={car.id}>
                <h1>{car.brand}</h1>
                <p>{car.model}</p>
                <p>{car.color}</p>
            </div>
        </div>
    )
}

export default CarDetails