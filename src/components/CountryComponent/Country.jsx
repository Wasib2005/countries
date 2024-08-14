import './Country.css'

const Country = ({country}) => {
    const {name,flags,region,flag,area,}=country
    const linkWiki = 'https://en.wikipedia.org/wiki/'+name.common
    return (
        
        <div className='country'>
            <img src={flags.png} alt="" />
            <h5>Name: {name.common} ({region})</h5>
            <h5>Area: {area} KM</h5>
            <h5>Small flag character: {flag}</h5>
            <a href={linkWiki} target="_blank" rel="noopener noreferrer">
            <button>Learn more</button>
            </a>
        </div>
    );
};

export default Country;