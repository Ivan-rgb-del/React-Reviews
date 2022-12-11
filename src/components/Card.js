import classes from './Card.module.css';

const Card = (props) => {
  return (
      <div className={classes.card} key={props.data[props.count].id}>
        <img src={props.data[props.count].image} href={props.data[props.count].name} />
        <h2>{props.data[props.count].name}</h2>
        <h4>{props.data[props.count].job}</h4>
        <p>{props.data[props.count].text}</p>

        <div>
          <button className={classes.btnDivBack} onClick={props.onBackHandler}>Back</button>
          <button className={classes.btnDivForward} onClick={props.onForwardHandler}>Forward</button>
        </div>

        <button onClick={props.onRandomHandler}>Suprise Me</button>
      </div>
  )
};

export default Card;