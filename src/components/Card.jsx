export default function Card({attore}){
    const {name, birth_year,nationality,biography, image, awards} = attore
    return(
        <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p>{birth_year}</p>
            <p>{nationality}</p>
            <p>{biography}</p>
            <p>i suoi premi vinti :{awards}</p>
          </div>
        </div>
      </div>
    </div>
)
}