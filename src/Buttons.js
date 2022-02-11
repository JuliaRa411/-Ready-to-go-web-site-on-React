function Buttons({filteredCars}){

    return(<div className="group" > 
        <button className="change" onClick={() => filteredCars("cars") } > Cars</button>
        <button className="change" onClick={() => filteredCars("suv") }> SUVs</button>
        <button className="change" onClick={() => filteredCars("Trucks")}>Trucks  </button>
        <button className="change" onClick={() => filteredCars("Vans") }>Vans  </button>
        <button className="change" onClick={() => filteredCars("Luxury Cars") }>Luxury Cars </button>
    </div>
    
    )
}


export default Buttons;