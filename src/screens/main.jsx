import axios from 'axios';
import { useState } from 'react';
const Main = () => {
    const [api, setapi] = useState([]);
    const [search, setSearch] = useState(false);
    const [value, setValue] = useState(null);
    const fetchMovies = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.genderize.io/?name=${value}`
        })
        console.log('movies', data);
        if (data.status == 200) {
            setSearch(true);
            setapi(data.data);
        } else {
            setSearch(false);
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={fetchMovies}>Button</button>
                            <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" onChange={(e) => { setValue(e.target.value) }} required />
                            {search ?
                                <>
                                    
                                            <>
                                                <div className="bg-dark text-white col-12 p-2">
                                                    {api.gender}
                                                </div>
                                            </>

                                </>
                                :
                                <>

                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Main;