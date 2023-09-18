const Card = ({id, activity_id}) => {
    return (
        <div className="card-body">
            <h2 className="card-title">id : {id}</h2>
            <div className="label">activity : {activity_id}</div>
        </div>
    );
};

export default Card;
