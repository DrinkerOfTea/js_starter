/**
 * Created by James on 09/04/2016.
 */

var Countries = () => {

    var countries = [
        { id : "UK", display: "United Kingdom (UK)", selected: true },
        { id : "FR", display: "France (FR)" },
        { id : "DE", display: "Germany (DE)" },
        { id : "LO", display: "Very very very very very very very long country name (LO)" },
        { id : "US", display: "United States (US)" }
    ];

    var getCountries  = () => {
        return countries;
    }

    return {
        getCountries: getCountries
    };

};

export default Countries();
