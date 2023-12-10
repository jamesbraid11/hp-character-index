import { useLoaderData, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CharIndex() {
  const char = useLoaderData()
  const charWithImg = char.filter(char => char.image)

  // ! States
  const [ filters, setFilters ] = useState({
    house: 'All',
    search: ''
  })
  const [ houses, setHouses ] = useState([])
  const [ filteredCharacters, setFilteredCharacters ] = useState([])

  // ! Function
  function handleChange(e){
    const newObj = { 
      ...filters,
      [e.target.name]: e.target.value
    } 
    setFilters(newObj)
  }

  // ! Effects
  useEffect(() => {
    // Update display of shown characters by name according to keys typed by user AND any dropdown selected by their house
    const pattern = new RegExp(filters.search, 'i')
    const filteredArray = charWithImg.filter(char => {
      return pattern.test(char.name) && (char.house === filters.house || filters.house === 'All')
    })
    setFilteredCharacters(filteredArray)
    // Update dropdown houses options by collating them from fetched data
    if (charWithImg.length > 0 && houses.length === 0) {
      const housesArr = [...new Set(charWithImg.map(char => char.house))].filter(Boolean)
      setHouses(housesArr)
    }
  }, [filters])


  return (
    <>
      <h1 className='text-center bold display-1 mb-4'>Characters</h1>
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <div className="custom-select">
              {/* Dropdown menu */}
              <select id="dropdown" name="house" value={filters.house} onChange={handleChange}>
                <option value="All">All</option>
                { houses.length > 0 &&
                  houses.map(house => {
                    return <option key={house} value={house}>{house}</option>
                  })
                }
              </select>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            {/* Search bar */}
            <input id="search" name="search" placeholder='Search...' value={filters.search} 
            onChange={handleChange} />
          </Col>
        </Row>
        <Row className='character-list'>
          {/* Display filtered results on page */}
          { filteredCharacters.length > 0 &&
          filteredCharacters.map(char => {
            const { id, name, image } = char
            return (
              <Col 
                as={Link}
                key={id} 
                xs={6} 
                md={4} 
                lg={3}
                style={ { backgroundImage: `url(${image})` } }
                to={`/charIndex/${id}`}
              >
                {name}
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}