function Tours({tours}) {
    return(
        <div>
            <div>
                <h2>Plan with Parth</h2>
            </div>
            <div>
                {
                    tours.map( (tour) => {
                        return <card {...tour}></card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;