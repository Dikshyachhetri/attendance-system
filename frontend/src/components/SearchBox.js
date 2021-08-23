import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline className="search-engine flex-all">
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search'
                className="search-input"
            ></Form.Control>
            <img src="/images/search-icon.svg"></img>

            {/* <Button type='submit' variant='outline-success' className='p-2'>
                Search
            </Button> */}
        </Form>
    )
}

export default SearchBox
