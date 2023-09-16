import { React, useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';


function Post({ allPosts, setPostId, setPostView, userId, postId }) {
    const [read, setRead] = useState([])

    //Set post as read:

    function readPost( singlePostId ) {

        fetch("//localhost:4200/api/auth/read", {
            method: "POST",
            body: JSON.stringify({ userId, singlePostId }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            
    }

    function readStatus() {

        fetch("//localhost:4200/api/auth/readStatus")
            .then(data => {
                console.log(data) 
                return data.json()
            })
    }
    
    readStatus()

    if (read) return (
        <Row className="gy-3 active-popup w-100">

            <p className="text-center m-0">Home</p>
            <div className="nav-divider d-flex mt-2"></div>

            {Array.isArray(allPosts) ? allPosts.map(post => (
                <Col sm={6} className=" d-flex justify-content-center g-5">
                    <Card border='secondary' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" style={{ height: '75%' }} variant="top" src={post.imageUrl} />
                        <Card.Body>
                            <Card.Title>{post.postTitle}</Card.Title>
                            <Card.Text>
                                {post.text}
                            </Card.Text>
                            <Button variant="link" className="p-0" size="sm" onClick={() => { setPostId(post.id); setPostView(); readPost(post.id) }}>
                                View Post
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>)) : <p className="d-flex justify-content-center">No posts found!</p>}

        </Row>
    )

    return (
        <Row className="gy-3 active-popup w-100">

            <p className="text-center m-0">Home</p>
            <div className="nav-divider d-flex mt-2"></div>

            {Array.isArray(allPosts) ? allPosts.map(post => (
                <Col sm={6} className=" d-flex justify-content-center g-5">
                    <Card border='secondary' style={{ width: '20rem' }}>
                        
                        <Card.Img className="img-fluid" style={{ height: '75%' }} variant="top" src={post.imageUrl} />
                        
                        <Card.ImgOverlay style={{ height: '75%' }}>
                            <Button variant="primary" >
                                New!
                            </Button> 
                        </Card.ImgOverlay>
                        
                        <Card.Body>

                            <Card.Title>{post.postTitle}</Card.Title>
                            
                            <Card.Text>
                                {post.text}
                            </Card.Text>
                            
                            <Button variant="link" className="p-0" size="sm" onClick={() => { setPostId(post.id); setPostView(); readPost(post.id) }}>
                                View Post
                            </Button>

                        </Card.Body>
                    
                    </Card>
                
                </Col>)) : <p className="d-flex justify-content-center">No posts found!</p>}

        </Row>
    )

}

export default Post